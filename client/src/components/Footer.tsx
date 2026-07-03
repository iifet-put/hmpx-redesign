export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <img
              src="/images/Logo_HMPX_Padrao_Branca.webp"
              alt="HMPX - Inteligência Fiscal e Tributária"
              className="h-9 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Inteligência Fiscal e Tributária. Transformamos complexidade
              regulatória em vantagem competitiva para empresas que exigem
              precisão.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">
                Monitoramento ativo 24/7
              </span>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-3">
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
              Navegação
            </h4>
            <div className="space-y-3">
              {[
                { label: "O Cenário", href: "#cenario" },
                { label: "Metodologia", href: "#metodologia" },
                { label: "Especialidades", href: "#especialidades" },
                { label: "Reforma Tributária", href: "#reforma" },
                { label: "Resultados", href: "#resultados" },
                { label: "Eventos & Conteúdos", href: "#conteudos" },
                { label: "Contato", href: "#contato" },
                { label: "Calculadora", href: "https://calculadora.hmpx.com.br/" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>atendimento@hmpx.com.br</p>
              <p>(16) 3620-4545</p>
              <p>Av. Braz Olaia Acosta, 2100</p>
              <p>Nova Aliança — Ribeirão Preto/SP</p>
            </div>
            <div className="mt-6 p-3 rounded bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">Atendimento ativo</span>
              </div>
              <span className="text-xs text-white/20">Seg–Sex, 8h–18h</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-[family-name:var(--font-mono)]">
            © 2024 HMPX — Inteligência Fiscal e Tributária. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
