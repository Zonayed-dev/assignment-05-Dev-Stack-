import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoImg from './assets/logo.png';
import banner from './assets/banner-stack.png';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myStack, setMyStack] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load data", error);
        setLoading(false);
      });
  }, []);

  // HANDLER PART
  const handleAddToStack = (tech) => {
    const exists = myStack.find((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
    } else {
      setMyStack([...myStack, tech]);
      toast.success(`${tech.name} added to stack!`);
    }
  };

  const handleRemoveFromStack = (tech) => {
    const updatedStack = myStack.filter((item) => item.id !== tech.id);
    setMyStack(updatedStack);
    toast.info(`${tech.name} removed from stack!`);
  };

  const handleClearStack = () => {
    if (myStack.length === 0) return;
    setMyStack([]);
    toast.error("Cleared your entire stack!");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between antialiased">
      <ToastContainer autoClose={2000} position="top-right" />

      {/* 1. NAVBAR */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} logoImg={logoImg} />

      {/* 2. HERO SECTION */}
      <Banner bannerImg={banner} />

      {/* 3. MAIN CATALOG */}
      <section id="technologies" className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore the <span className="text-pink-600">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <p className="text-slate-600 font-semibold">Loading Technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* LEFT 3-COLUMN CARDS GRID */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={myStack.some((item) => item.id === tech.id)}
                  onAddToStack={handleAddToStack}
                />
              ))}
            </div>

            {/* RIGHT YOUR STACK SIDEBAR */}
            <StackSidebar
              myStack={myStack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearStack={handleClearStack}
            />
          </div>
        )}
      </section>

      {/* 4. FOOTER */}
      <Footer logoImg={logoImg} />
    </div>
  );
}