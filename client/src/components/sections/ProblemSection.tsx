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
      id="problema"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background data fragments */}
      <div className="absolute top-20 right-10 font-[family-name:var(--font-mono)] text-[10px] text-white/[0.04] leading-relaxed hidden lg:block">
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
            O Problema
          </span>
        </div>

        {/* Main headline - large, dramatic */}
        <h2 className="problem-reveal font-[family-name:var(--font-display)] font-black text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] text-white max-w-4xl mb-16">
          O sistema tributário brasileiro foi projetado para ser{" "}
          <span className="text-white/30">incompreensível.</span>
        </h2>

        {/* Asymmetric layout: large stat left + cards right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Left - Big number */}
          <div className="problem-reveal lg:col-span-4 flex flex-col justify-center">
            <div className="font-[family-name:var(--font-mono)] text-7xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none">
              97
            </div>
            <div className="mt-4 text-sm text-white/40">
              normas tributárias publicadas <strong className="text-white/70">por dia útil</strong> no Brasil
            </div>
            <div className="mt-6 w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          {/* Right - Impact cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            <div className="problem-reveal p-6 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="font-[family-name:var(--font-mono)] text-3xl font-bold text-white mb-2">34%</div>
              <div className="text-xs text-white/30 uppercase tracking-wider mb-3">da receita bruta</div>
              <p className="text-white/50 text-sm leading-relaxed">
                Empresas brasileiras destinam em média 34% de sua receita para tributos. Quanto disso é evitável na sua operação?
              </p>
            </div>

            <div className="problem-reveal p-6 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="font-[family-name:var(--font-mono)] text-3xl font-bold text-white mb-2">R$ 4,7 tri</div>
              <div className="text-xs text-white/30 uppercase tracking-wider mb-3">em litígios ativos</div>
              <p className="text-white/50 text-sm leading-relaxed">
                O contencioso tributário brasileiro supera R$ 4,7 trilhões. Parte desse valor pode estar no seu balanço.
              </p>
            </div>

            <div className="problem-reveal sm:col-span-2 p-6 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BA1414]" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-white/30">
                  Análise de cenário
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                A maioria das empresas não perde dinheiro por incompetência. Perde porque o sistema foi desenhado para que{" "}
                <strong className="text-white font-medium">ninguém consiga enxergar todas as oportunidades</strong>{" "}
                ao mesmo tempo. Até agora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
