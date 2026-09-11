export default function Footer({ logoImg }) {
    return (
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
    );
}