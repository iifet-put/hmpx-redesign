import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".problem-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
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
      id="cenario"
      className="relative py-28 md:py-36 overflow-hidden bg-white"
    >
      {/* Background data fragments */}
      <div className="absolute top-20 right-10 font-[family-name:var(--font-mono)] text-[10px] text-gray-100 leading-relaxed hidden lg:block">
        <div>LEI_COMPLEMENTAR_190/2022</div>
        <div>CONVÊNIO_ICMS_142/2018</div>
        <div>IN_RFB_2121/2022</div>
        <div>SOLUÇÃO_COSIT_98/2023</div>
        <div>ADI_5469_STF</div>
      </div>

      <div className="relative container max-w-6xl mx-auto px-4">
        {/* Section label */}
        <div className="problem-reveal flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            O Cenário
          </span>
        </div>

        {/* Main headline */}
        <h2 className="problem-reveal font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] text-gray-900 max-w-4xl mb-16">
          O sistema tributário brasileiro foi projetado para ser{" "}
          <span className="text-gray-300">incompreensível.</span>
        </h2>

        {/* Asymmetric layout: large stat left + cards right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Left - Big number */}
          <div className="problem-reveal lg:col-span-4 flex flex-col justify-center">
            <div className="font-[family-name:var(--font-mono)] text-7xl md:text-8xl lg:text-8xl font-bold text-gray-300 leading-none">
              40-46
            </div>
            <div className="mt-4 text-sm text-gray-500">
              normas tributárias publicadas <strong className="text-gray-800">por dia útil</strong> no Brasil
            </div>
            <div className="mt-6 w-full h-px bg-gradient-to-r from-gray-200 to-transparent" />
          </div>

          {/* Right - Impact cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            <div className="problem-reveal p-6 rounded-lg bg-gray-50 border border-gray-100">
              <div className="font-[family-name:var(--font-mono)] text-3xl font-bold text-gray-900 mb-2">34%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">da receita bruta</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empresas brasileiras destinam em média 34% de sua receita para tributos. Quanto disso é evitável na sua operação?
              </p>
            </div>

            <div className="problem-reveal p-6 rounded-lg bg-gray-50 border border-gray-100">
              <div className="font-[family-name:var(--font-mono)] text-3xl font-bold text-gray-900 mb-2">R$ 5,6 tri</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">em litígios ativos</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                O contencioso tributário brasileiro supera R$ 4,7 trilhões. Parte desse valor pode estar no seu balanço.
              </p>
            </div>

            <div className="problem-reveal sm:col-span-2 p-6 rounded-lg bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BA1414]" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400">
                  Análise de cenário
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                A maioria das empresas não perde dinheiro por incompetência. Perde porque o sistema foi desenhado para que{" "}
                <strong className="text-gray-900 font-medium">ninguém consiga enxergar todas as oportunidades</strong>{" "}
                ao mesmo tempo. Até agora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
