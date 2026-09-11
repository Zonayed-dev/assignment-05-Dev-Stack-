import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [count, setCount] = useState(0);

  const handleTestToast = () => {
    setCount(count + 1);
    toast.success(`Tailwind & Toastify are working! (Click count: ${count + 1})`, {
      position: 'top-right',
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <ToastContainer autoClose={3000} />

      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        {/* Gradient Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white shadow-md">
          Dev Stack Setup Test
        </span>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400">
          Tailwind CSS Active
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          If this box is centered on a dark background with gradient text and styled buttons, Tailwind CSS is successfully configured!
        </p>

        {/* Interactive Test Button */}
        <button
          onClick={handleTestToast}
          className="w-full py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 active:scale-95 transition-all shadow-lg cursor-pointer"
        >
          Test Toastify Notification
        </button>
      </div>
    </div>
  );
}