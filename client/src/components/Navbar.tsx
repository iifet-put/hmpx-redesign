import { useState, useEffect } from "react";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Reforma", href: "#reforma" },
  { label: "Resultados", href: "#resultados" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo - Proprietary wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/manus-storage/hmpx-logo-icon_6611e25d.png"
            alt="HMPX"
            className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-[family-name:var(--font-display)] font-black text-base md:text-lg tracking-[0.2em] text-white">
            HMP<span className="text-[#BA1414]">X</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(186,20,20,0.3)]"
        >
          Diagnóstico Gratuito
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-500 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-white/60 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#BA1414] rounded"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </header>
  );
}
