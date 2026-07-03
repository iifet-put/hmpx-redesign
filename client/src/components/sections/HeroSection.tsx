import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DialogTrigger } from "@/components/ui/dialog";

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
      tl.from(headlineRef.current, { y: 60, opacity: 0, duration: 0.7, delay: 0.3 })
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.5 }, "-=0.5")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(statRef.current, { y: 30, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(dataRef.current, { x: 30, opacity: 0, duration: 0.5 }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />

      {/* Red Line - vertical accent */}
      <div className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#BA1414]/20 to-transparent" />

      {/* Content - asymmetric layout */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left: Main content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#BA1414] animate-pulse" />
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-gray-400">
                Sistema ativo — Análise em tempo real
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-[family-name:var(--font-display)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-gray-900 mb-6"
            >
              Sua empresa perde dinheiro todos os dias.
              <br />
              <span className="text-[#BA1414]">Você só não sabe quanto.</span>
            </h1>

            <p
              ref={subRef}
              className="text-lg md:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed"
            >
              Inteligência fiscal estratégica que transforma complexidade
              tributária em vantagem competitiva. Para empresas que exigem
              precisão, não promessas.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <DialogTrigger asChild>
                <button
                  type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_4px_20px_rgba(186,20,20,0.3)] active:scale-[0.97]"
                >
                Descubra suas oportunidades ocultas
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
              </DialogTrigger>
              <a
                href="#metodologia"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded transition-all duration-300"
              >
                Como funciona
              </a>
            </div>

            {/* Stats - horizontal */}
            <div
              ref={statRef}
              className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-gray-100"
            >
              <div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-gray-900">30+</div>
                <div className="text-xs text-gray-400 mt-1">Anos de expertise</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-[#BA1414]">R$ 1,2 bi</div>
                <div className="text-xs text-gray-400 mt-1">Recuperados</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-400 mt-1">Empresas</div>
              </div>
            </div>
          </div>

          {/* Right: Data fragments (5 cols) - intelligence interface */}
          <div ref={dataRef} className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* backgroun color #1F6F6B */}
              <div className="mb-4 flex justify-center">
                <iframe
                  id="impostometro"
                  title="Impostômetro"
                  src="https://impostometro.com.br/widget/contador/"
                  width="480"
                  height="90"
                  scrolling="no"
                  frameBorder="0"
                  className="block max-w-full"
                />
              </div>

              {/* Floating data modules */}
              <div className="space-y-4">
                {/* Module 1 */}
                <div className="p-5 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400">
                      Cenário empresarial no Brasil
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="shrink-0 whitespace-nowrap font-[family-name:var(--font-mono)] text-xl font-bold leading-none text-gray-900">
                      6 em cada 10
                    </span>
                    <span className="whitespace-nowrap text-[11px] text-gray-400">
                      empresas abertas encerram atividades em até 5 anos
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-gray-400">
                    Taxa de sobrevivência em 5 anos: 39,8%
                  </p>
                  <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[62.5%] bg-gradient-to-r from-[#BA1414] to-[#BA1414]/50 rounded-full" />
                  </div>
                </div>

                {/* Module 2 */}
                <div className="p-5 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
                    <div>
                      <div className="mb-4 font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400">
                        Complexidade tributária
                      </div>
                      <div className="whitespace-nowrap font-[family-name:var(--font-mono)] text-3xl font-bold leading-none text-gray-900">
                        1.501 h/ano
                      </div>
                      <div className="mt-3 whitespace-nowrap text-xs text-gray-400">
                        tempo gasto para preparar, declarar e pagar tributos no Brasil
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-mono)] text-2xl font-bold leading-none text-green-600">
                        65,1%
                      </div>
                      <div className="mt-2 text-xs leading-relaxed text-gray-500">
                        <span className="block">do lucro em tributos</span>
                        <span className="block">e contribuições*</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="p-5 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400">
                      Indicadores de pressão
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-gray-400">Referência Brasil</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-gray-600">Sobrevivência em 5 anos</span>
                      <div className="grid grid-cols-[4rem_6.5rem] items-center gap-3">
                        <div className="h-1 overflow-hidden rounded-full bg-gray-200">
                          <div className="h-full w-[39.8%] rounded-full bg-gray-400" />
                        </div>
                        <span className="font-[family-name:var(--font-mono)] text-xs text-gray-500">39,8% ativas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-gray-600">Tempo para cumprir tributos</span>
                      <div className="grid grid-cols-[4rem_6.5rem] items-center gap-3">
                        <div className="h-1 overflow-hidden rounded-full bg-gray-200">
                          <div className="h-full w-[47%] rounded-full bg-gray-400" />
                        </div>
                        <span className="font-[family-name:var(--font-mono)] text-xs text-gray-500">1.501 horas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-gray-600">Carga sobre o lucro*</span>
                      <div className="grid grid-cols-[4rem_6.5rem] items-center gap-3">
                        <div className="h-1 overflow-hidden rounded-full bg-gray-200">
                          <div className="h-full w-[65.1%] rounded-full bg-gray-400" />
                        </div>
                        <span className="font-[family-name:var(--font-mono)] text-xs text-gray-500">65,1%</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[10px] leading-relaxed text-gray-400">
                    Fontes: IBGE e World Bank Doing Business 2020. *Indicador de empresa padrão do relatório.
                  </p>
                </div>
              </div>

              {/* Decorative connection lines */}
              <div className="absolute -left-8 top-1/4 w-8 h-px bg-gradient-to-r from-[#BA1414]/20 to-transparent" />
              <div className="absolute -left-8 top-2/4 w-8 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              <div className="absolute -left-8 top-3/4 w-8 h-px bg-gradient-to-r from-gray-200 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-[#BA1414] tracking-[0.3em] uppercase font-[family-name:var(--font-mono)]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  );
}
