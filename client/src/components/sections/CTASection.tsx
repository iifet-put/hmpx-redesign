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
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Red Line - final accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/30 to-transparent" />

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

            <h2 className="cta-reveal font-[family-name:var(--font-display)] font-black text-3xl md:text-4xl leading-[1.1] text-white mb-6">
              Quanto sua empresa está deixando na mesa?
            </h2>

            <p className="cta-reveal text-white/45 text-sm leading-relaxed mb-8">
              Nosso diagnóstico estratégico gratuito identifica em 72 horas o
              potencial de economia e recuperação da sua operação. Sem compromisso.
              Sem custo. Apenas inteligência aplicada.
            </p>

            <div className="cta-reveal space-y-3">
              {[
                "Diagnóstico completo em 72h",
                "Sem custo e sem compromisso",
                "Análise personalizada do seu setor",
                "Potencial de economia quantificado",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/40 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="cta-reveal p-6 md:p-8 rounded-lg bg-white/[0.02] border border-white/5">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/25 mb-2">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/25 mb-2">E-mail</label>
                    <input
                      type="email"
                      placeholder="email@empresa.com.br"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/25 mb-2">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/25 mb-2">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/25 mb-2">Faturamento anual</label>
                  <select
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded text-white/40 text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 appearance-none"
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
                  className="w-full py-3.5 px-8 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(186,20,20,0.3)] active:scale-[0.97] mt-2"
                >
                  Solicitar Diagnóstico Gratuito
                </button>
              </form>

              <p className="mt-4 text-[10px] text-white/20 font-[family-name:var(--font-mono)] text-center">
                Dados tratados com sigilo absoluto. Resposta em até 24h úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
