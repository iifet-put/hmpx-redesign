import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Diagnóstico Profundo",
    description: "Análise completa da estrutura fiscal. Identificação de gaps, riscos e oportunidades ocultas no cenário tributário atual.",
    metric: "72h",
    metricLabel: "para mapeamento completo",
  },
  {
    number: "02",
    title: "Modelagem Estratégica",
    description: "Simulação de cenários e construção de modelos otimizados que maximizam eficiência fiscal dentro da legalidade absoluta.",
    metric: "∞",
    metricLabel: "cenários simulados",
  },
  {
    number: "03",
    title: "Implementação Cirúrgica",
    description: "Execução precisa das estratégias aprovadas, com acompanhamento em tempo real de cada etapa e resultado mensurável.",
    metric: "30-90d",
    metricLabel: "para primeiros resultados",
  },
  {
    number: "04",
    title: "Monitoramento Contínuo",
    description: "Vigilância permanente sobre mudanças regulatórias e novas oportunidades. Sua empresa nunca perde uma vantagem.",
    metric: "24/7",
    metricLabel: "alertas ativos",
  },
];

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".method-reveal").forEach((el, i) => {
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
      id="metodologia"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Red Line - horizontal connector */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/20 to-transparent" />

      {/* Background data fragment */}
      <div className="absolute bottom-20 left-8 font-[family-name:var(--font-mono)] text-[10px] text-white/[0.03] hidden lg:block rotate-90 origin-bottom-left">
        HMPX_METHODOLOGY_v4.2
      </div>

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="method-reveal flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Metodologia
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-7">
            <h2 className="method-reveal font-[family-name:var(--font-display)] font-black text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white mb-6">
              Precisão que se mede em{" "}
              <span className="text-white/30">reais recuperados.</span>
            </h2>
            <p className="method-reveal text-lg text-white/45 max-w-xl">
              Cada etapa do nosso processo foi desenhada para eliminar incertezas
              e entregar resultados quantificáveis. Sem subjetividade.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-end justify-end">
            <div className="method-reveal font-[family-name:var(--font-mono)] text-[10px] text-white/20 text-right leading-loose hidden lg:block">
              <div>input → análise → modelagem</div>
              <div>modelagem → validação → execução</div>
              <div>execução → monitoramento → loop</div>
            </div>
          </div>
        </div>

        {/* Steps - card grid instead of vertical list */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="method-reveal group relative p-6 md:p-8 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-white/20">
                  {step.number}
                </span>
                <div className="font-[family-name:var(--font-mono)] text-right">
                  <div className="text-lg font-bold text-white">{step.metric}</div>
                  <div className="text-[10px] text-white/30">{step.metricLabel}</div>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connection indicator */}
              {i < 3 && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-white/10 to-transparent hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
