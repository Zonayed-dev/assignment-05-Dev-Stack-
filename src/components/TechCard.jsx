export default function TechCard({ tech, isAdded, onAddToStack }) {
    return (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
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
                    onClick={() => onAddToStack(tech)}
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
}