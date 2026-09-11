import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load data", error));
  }, []);

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <div className="py-20 text-center">
          <p className="text-slate-600 font-semibold">Loading Technologies...</p>
        </div>
      ) : (
        /* MAIN PART */
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {tech.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {tech.description}
                  </p>
                </div>

                <button
                  onClick={() => toast.success(` ${tech.name} added to stack!`)}
                  className="w-full brand-gradient text-white py-2 rounded-xl font-medium shadow-sm hover:opacity-90 transition cursor-pointer"
                >
                  Add to Stack
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}