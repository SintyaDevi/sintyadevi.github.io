function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Sintya Devi
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#portfolio"
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              Portfolio
            </a>

            <a
              href="#about"
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              Contact
            </a>

            {/* CTA Button */}
            <a
              href="mailto:sintyadevilaksanaputri@gmail.com"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition duration-300 font-medium"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;