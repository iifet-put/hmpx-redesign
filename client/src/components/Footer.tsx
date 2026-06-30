export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/manus-storage/hmpx-logo-icon_6611e25d.png"
                alt="HMPX"
                className="w-7 h-7"
              />
              <span className="font-[family-name:var(--font-display)] font-black text-base tracking-[0.2em] text-white">
                HMP<span className="text-[#BA1414]">X</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-6">
              Inteligência fiscal e tributária para empresas que exigem
              precisão. 30 anos transformando complexidade em vantagem competitiva.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/10 transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/10 transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
              Navegação
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "Problema", href: "#problema" },
                { label: "Metodologia", href: "#metodologia" },
                { label: "Especialidades", href: "#especialidades" },
                { label: "Reforma Tributária", href: "#reforma" },
                { label: "Resultados", href: "#resultados" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
              Contato
            </h4>
            <div className="space-y-2.5 text-sm text-white/35">
              <p>São Paulo, SP — Brasil</p>
              <p>contato@hmpx.com.br</p>
              <p>(11) 3000-0000</p>
            </div>
            <div className="mt-6 p-3 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">Atendimento ativo</span>
              </div>
              <span className="text-xs text-white/20">Seg–Sex, 8h–18h</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 font-[family-name:var(--font-mono)]">
            © 2024 HMPX Inteligência Fiscal e Tributária
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors font-[family-name:var(--font-mono)]">
              Privacidade
            </a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors font-[family-name:var(--font-mono)]">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
