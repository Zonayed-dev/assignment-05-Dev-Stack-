export default function Navbar({ isOpen, setIsOpen, logoImg }) {
    return (
        <>
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

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-white border-b p-4 flex flex-col gap-2 md:hidden z-40">
                    <a href="#home" className="text-pink-600 font-semibold">Home</a>
                    <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
                    <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
                    <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
                    <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
                </div>
            )}
        </>
    );
}