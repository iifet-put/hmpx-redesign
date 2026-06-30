import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(headlineRef.current, { y: 60, opacity: 0, duration: 1, delay: 0.3 })
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(statRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(dataRef.current, { x: 30, opacity: 0, duration: 0.8 }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(/manus-storage/hmpx-hero-bg_0663a553.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Red Line - vertical accent */}
      <div className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#BA1414]/60 to-transparent" />

      {/* Content - asymmetric layout */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left: Main content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#BA1414] animate-pulse" />
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-white/40">
                Sistema ativo — Análise em tempo real
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-[family-name:var(--font-display)] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6"
            >
              Sua empresa perde dinheiro todos os dias.
              <br />
              <span className="text-white/40">Você só não sabe quanto.</span>
            </h1>

            <p
              ref={subRef}
              className="text-lg md:text-xl text-white/45 max-w-xl mb-10 leading-relaxed"
            >
              Inteligência fiscal estratégica que transforma complexidade
              tributária em vantagem competitiva. Para empresas que exigem
              precisão, não promessas.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(186,20,20,0.4)] active:scale-[0.97]"
              >
                Descubra suas oportunidades ocultas
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#metodologia"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 rounded transition-all duration-300"
              >
                Como funciona
              </a>
            </div>

            {/* Stats - horizontal */}
            <div
              ref={statRef}
              className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-white/5"
            >
              <div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-white">30+</div>
                <div className="text-xs text-white/30 mt-1">Anos de expertise</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-[#BA1414]">R$ 2,3 bi</div>
                <div className="text-xs text-white/30 mt-1">Recuperados</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-white/30 mt-1">Empresas</div>
              </div>
            </div>
          </div>

          {/* Right: Data fragments (5 cols) - intelligence interface */}
          <div ref={dataRef} className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* Floating data modules */}
              <div className="space-y-4">
                {/* Module 1 */}
                <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/30">
                      Diagnóstico Fiscal
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-[family-name:var(--font-mono)] text-3xl font-bold text-white">47</span>
                    <span className="text-xs text-white/30 pb-1">oportunidades identificadas</span>
                  </div>
                  <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[73%] bg-gradient-to-r from-[#BA1414] to-[#BA1414]/50 rounded-full" />
                  </div>
                </div>

                {/* Module 2 */}
                <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/30">
                      Economia Projetada
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-green-400/70">+12.4%</span>
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-white">
                    R$ 23.4M
                  </div>
                  <div className="text-xs text-white/30 mt-1">Potencial anual estimado</div>
                </div>

                {/* Module 3 */}
                <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/30">
                      Monitoramento
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">Tempo real</span>
                  </div>
                  <div className="space-y-2">
                    {["PIS/COFINS", "ICMS-ST", "IPI"].map((tax, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="font-[family-name:var(--font-mono)] text-xs text-white/50">{tax}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white/20 rounded-full"
                              style={{ width: `${60 + i * 15}%` }}
                            />
                          </div>
                          <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">
                            {["Alerta", "Otimizado", "Em análise"][i]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative connection lines */}
              <div className="absolute -left-8 top-1/4 w-8 h-px bg-gradient-to-r from-[#BA1414]/30 to-transparent" />
              <div className="absolute -left-8 top-2/4 w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />
              <div className="absolute -left-8 top-3/4 w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase font-[family-name:var(--font-mono)]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
