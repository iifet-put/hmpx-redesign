import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".solution-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.05,
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
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Red Line - vertical connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#BA1414]/20 to-transparent" />

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Text (7 cols) */}
          <div className="lg:col-span-7">
            <div className="solution-reveal flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-[#BA1414]" />
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
                A Solução
              </span>
            </div>

            <h2 className="solution-reveal font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-gray-900 mb-8">
              Não somos uma consultoria.
              <br />
              <span className="text-[#BA1414]">Somos um hub de inteligência.</span>
            </h2>

            <p className="solution-reveal text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              A HMPX combina 30 anos de expertise tributária com análise
              sistemática de dados para identificar oportunidades que nenhuma
              auditoria convencional encontra. Onde outros veem obrigações,
              nós enxergamos capital.
            </p>

            {/* Capabilities as system-like list */}
            <div className="solution-reveal space-y-3">
              {[
                { code: "SCAN", label: "Análise algorítmica de cenários tributários" },
                { code: "FIND", label: "Identificação proativa de créditos e oportunidades" },
                { code: "WATCH", label: "Monitoramento contínuo de mudanças regulatórias" },
                { code: "PLAN", label: "Estratégia fiscal integrada ao planejamento financeiro" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-gray-400 rounded border border-gray-100 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BA1414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                  <span className="text-gray-600 text-sm mt-0.5">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual (5 cols) */}
          <div className="solution-reveal lg:col-span-5">
            <div className="relative">
              <div className="relative z-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <img
                  src="/images/hmpx-methodology.webp"
                  alt="Sistema de inteligência HMPX"
                  className="relative z-0 w-full h-auto"
                />
              </div>

              {/* Floating stat module */}
              <div className="bg-white absolute z-10 -bottom-4 -left-4 p-4 shadow-lg border border-gray-100 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BA1414]" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-gray-400">Economia identificada</span>
                </div>
                <div className="font-[family-name:var(--font-mono)] text-xl font-bold text-gray-900">
                  +47%
                </div>
              </div>

              {/* System status indicator */}
              <div className="bg-white absolute z-10 -top-3 -right-3 p-3 shadow-lg border border-gray-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-gray-400">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
