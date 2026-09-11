import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoImg from './assets/logo.png';
import banner from './assets/banner-stack.png';
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


  // Main Playground JSX
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between antialiased">
      <ToastContainer autoClose={2000} position="top-right" />

      {/* NavBar */}
      <header className="border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Header Logo */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl"
            >
              ≡
            </button>
            <img src={logoImg} alt="Logo" className="w-50 h-10 object-contain" />

          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="text-pink-600 font-semibold">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          {/* Auth Part */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-semibold transition cursor-pointer shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white border-b p-4 flex flex-col gap-2 md:hidden">
          <a href="#home" className="text-pink-600 font-semibold">Home</a>
          <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      )}
      {/* 2. HERO SECTION */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-slate-500 text-base leading-relaxed max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#technologies"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition"
            >
              Explore Technologies
            </a>
            <button className="bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 font-semibold px-6 py-3 rounded-xl transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Graphic */}
        <div className="flex justify-center md:justify-end">

          <img src={banner} alt="Development Stack Illustration" className="w-full h-full object-contain" />

        </div>
      </section>

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

            {/*LEFT 3-COLUMN CARDS GRID */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = myStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon & Badge */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                          {tech.icon && (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-8 h-8 object-contain"
                            />
                          )}
                        </div>
                        {tech.badge && (
                          <span className="bg-sky-50 text-sky-500 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-sky-100">
                            {tech.badge}
                          </span>
                        )}
                      </div>

                      {/* Name & Description */}
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {tech.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      {/* Metadata Row */}
                      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 border-t border-slate-100 pt-3 mb-3">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {tech.category}
                        </span>
                        {tech.difficulty && <span>{tech.difficulty}</span>}
                        {tech.rating && (
                          <span className="flex items-center gap-1 font-bold text-slate-700">
                            <span className="text-amber-400">★</span> {tech.rating}
                          </span>
                        )}
                      </div>

                      {/* Button */}
                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isAdded}
                        className={`w-full py-2 rounded-xl font-semibold text-xs transition ${isAdded
                          ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
                          : "bg-slate-950 text-white hover:bg-slate-800 cursor-pointer"
                          }`}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/*  RIGHT=  YOUR STACK SIDEBAR */}
            <aside className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs sticky top-24">
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {myStack.length} {myStack.length === 1 ? 'Technology' : 'Technologies'} Selected
                </p>
              </div>

              {myStack.length === 0 ? (
                <div className="text-center py-8 border border-dashed border-slate-200 rounded-xl">
                  <p className="text-slate-400 text-xs font-medium">
                    No items added yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 mb-4">
                  {myStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border border-slate-200 p-2.5 rounded-xl bg-white"
                    >
                      <div className="flex items-center gap-2.5">
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span className="font-semibold text-slate-800 text-xs">
                          {item.name}
                        </span>
                      </div>

                      <button
                        onClick={() => handleRemoveFromStack(item)}
                        aria-label={`Remove ${item.name}`}
                        className="text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {myStack.length > 0 && (
                <button
                  onClick={handleClearStack}
                  className="w-full py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  Remove All
                </button>
              )}
            </aside>

          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            {/* Footer Logo */}
            <div className="flex items-center gap-2 mb-3">
              <img
                src={logoImg}
                alt="Dev Stack Logo"
                className="w-40 h-10 object-contain"
              />

            </div>
            <p className="text-slate-400 text-xs max-w-xs mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-slate-400 font-medium">
              <a href="#github" className="hover:text-slate-600">GitHub</a>
              <a href="#twitter" className="hover:text-slate-600">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-600">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-slate-600">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-600">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-600">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-slate-600">About</a></li>
              <li><a href="#contact" className="hover:text-slate-600">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#privacy" className="hover:text-slate-600">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}