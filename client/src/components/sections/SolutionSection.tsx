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
          duration: 0.8,
          delay: i * 0.08,
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
      {/* Red Line - vertical connector from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#BA1414]/30 to-transparent" />

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

            <h2 className="solution-reveal font-[family-name:var(--font-display)] font-black text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white mb-8">
              Não somos uma consultoria.
              <br />
              <span className="text-white/30">Somos um sistema de inteligência.</span>
            </h2>

            <p className="solution-reveal text-lg text-white/45 leading-relaxed mb-10 max-w-xl">
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
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/20 bg-white/[0.03] px-2 py-1 rounded border border-white/5 shrink-0 mt-0.5">
                    {item.code}
                  </span>
                  <span className="text-white/60 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual (5 cols) */}
          <div className="solution-reveal lg:col-span-5">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-white/5">
                <img
                  src="/manus-storage/hmpx-methodology_f912f904.png"
                  alt="Sistema de inteligência HMPX"
                  className="w-full h-auto opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              </div>

              {/* Floating stat module */}
              <div className="absolute -bottom-4 -left-4 p-4 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BA1414]" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">Economia identificada</span>
                </div>
                <div className="font-[family-name:var(--font-mono)] text-xl font-bold text-white">
                  +47%
                </div>
              </div>

              {/* System status indicator */}
              <div className="absolute -top-3 -right-3 p-3 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/40">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
