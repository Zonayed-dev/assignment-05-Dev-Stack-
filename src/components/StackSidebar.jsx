export default function StackSidebar({ myStack, onRemoveFromStack, onClearStack }) {
    return (
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
                                onClick={() => onRemoveFromStack(item)}
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
                    onClick={onClearStack}
                    className="w-full py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                    Remove All
                </button>
            )}
        </aside>
    );
}