import { useState, useEffect } from "react";
import { DialogTrigger } from "@/components/ui/dialog";

const navLinks = [
  { label: "Cenário", href: "#cenario" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Reforma", href: "#reforma" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "Resultados", href: "#resultados" },
  { label: "Conteúdos", href: "#conteudos" },
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
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo - Official HMPX */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/images/Logo_HMPX_Padrao.webp"
            alt="HMPX - Inteligência Fiscal e Tributária"
            className="h-9 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-gray-500 hover:text-[#BA1414] transition-colors duration-300 font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <DialogTrigger asChild>
          <button
            type="button"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_4px_20px_rgba(186,20,20,0.25)]"
          >
            Diagnóstico Gratuito
          </button>
        </DialogTrigger>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-500 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-gray-600 hover:text-[#BA1414] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <DialogTrigger asChild>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#BA1414] rounded"
            >
              Diagnóstico Gratuito
            </button>
          </DialogTrigger>
        </div>
      </div>
    </header>
  );
}
