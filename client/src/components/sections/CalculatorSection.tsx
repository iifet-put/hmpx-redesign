import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CalculatorSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".calculator-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.5,
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
      id="calculadora"
      className="relative py-28 md:py-36 overflow-hidden bg-gray-50/50"
    >
      {/* Red Line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/15 to-transparent" />

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="calculator-reveal flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Calculadora da Reforma Tributária
          </span>
        </div>

        {/* Headline */}
        <h2 className="calculator-reveal font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-gray-900 max-w-4xl mb-8">
          Descubra quais serão os seus impactos da{" "}
          <span className="text-[#BA1414]">Reforma Tributária</span>
          {" "} na sua empresa.
        </h2>

        <p className="calculator-reveal text-lg text-gray-500 max-w-2xl mb-16">
          Não perca mais tempo, preencha os dados que serão pedidos e receba uma análise comparativa.
        </p>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_4px_20px_rgba(186,20,20,0.3)] active:scale-[0.97]"
          onClick={() => {
            window.location.href = "https://calculadora.hmpx.com.br/";
          }}
        >
          Acessar a Calculadora
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
