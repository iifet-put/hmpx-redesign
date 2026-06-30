import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".cta-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative py-28 md:py-36 overflow-hidden bg-gray-50/50"
    >
      {/* Red Line - final accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/15 to-transparent" />

      <div className="relative container max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="lg:col-span-5">
            <div className="cta-reveal flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#BA1414]" />
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
                Próximo Passo
              </span>
            </div>

            <h2 className="cta-reveal font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl leading-[1.1] text-gray-900 mb-6">
              Quanto sua empresa está deixando na mesa?
            </h2>

            <p className="cta-reveal text-gray-500 text-sm leading-relaxed mb-8">
              Nosso diagnóstico estratégico gratuito identifica em 72 horas o
              potencial de economia e recuperação da sua operação. Sem compromisso.
              Sem custo. Apenas inteligência aplicada.
            </p>

            <div className="cta-reveal space-y-3 mb-10">
              {[
                "Diagnóstico completo em 72h",
                "Sem custo e sem compromisso",
                "Análise personalizada do seu setor",
                "Potencial de economia quantificado",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-gray-500 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="cta-reveal space-y-3 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-600">atendimento@hmpx.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-600">(16) 3620-4545</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-600">Av. Braz Olaia Acosta, 2100 - Nova Aliança, Ribeirão Preto</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="cta-reveal p-6 md:p-8 rounded-lg bg-white border border-gray-100 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400 mb-2">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#BA1414]/40 focus:ring-1 focus:ring-[#BA1414]/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400 mb-2">E-mail</label>
                    <input
                      type="email"
                      placeholder="email@empresa.com.br"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#BA1414]/40 focus:ring-1 focus:ring-[#BA1414]/10 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400 mb-2">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#BA1414]/40 focus:ring-1 focus:ring-[#BA1414]/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400 mb-2">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(16) 99999-9999"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#BA1414]/40 focus:ring-1 focus:ring-[#BA1414]/10 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400 mb-2">Faturamento anual</label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-500 text-sm focus:outline-none focus:border-[#BA1414]/40 focus:ring-1 focus:ring-[#BA1414]/10 transition-all duration-300 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    <option value="50-100m">R$ 50M – R$ 100M</option>
                    <option value="100-500m">R$ 100M – R$ 500M</option>
                    <option value="500m-1b">R$ 500M – R$ 1B</option>
                    <option value="1b+">Acima de R$ 1B</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-8 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_4px_20px_rgba(186,20,20,0.25)] active:scale-[0.97] mt-2"
                >
                  Solicitar Diagnóstico Gratuito
                </button>
              </form>

              <p className="mt-4 text-[10px] text-gray-400 font-[family-name:var(--font-mono)] text-center">
                Dados tratados com sigilo absoluto. Resposta em até 24h úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
