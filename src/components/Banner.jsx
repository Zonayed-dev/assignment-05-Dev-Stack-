export default function Banner({ bannerImg }) {
    return (
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
                <img src={bannerImg} alt="Development Stack Illustration" className="w-full h-full object-contain" />
            </div>
        </section>
    );
}