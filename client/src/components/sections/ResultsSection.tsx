import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    sector: "Setor Automotivo",
    value: "R$ 247M",
    description: "Créditos de PIS/COFINS recuperados em operação de revisão fiscal completa.",
    timeline: "8 meses",
    type: "Recuperação",
  },
  {
    sector: "Varejo Nacional",
    value: "R$ 183M",
    description: "Economia anual gerada por reestruturação de planejamento tributário interestadual.",
    timeline: "12 meses",
    type: "Planejamento",
  },
  {
    sector: "Agronegócio",
    value: "R$ 289M",
    description: "Recuperação de tributos pagos indevidamente nos últimos 5 anos via compensação administrativa.",
    timeline: "14 meses",
    type: "Compensação",
  },
  {
    sector: "Indústria",
    value: "R$ 221M",
    description: "Revisão tributária com identificação e recuperação de créditos acumulados em operações industriais.",
    timeline: "10 meses",
    type: "Recuperação",
  },
  {
    sector: "Atacado",
    value: "R$ 260M",
    description: "Redução de carga tributária por reorganização fiscal e planejamento estratégico de operações.",
    timeline: "11 meses",
    type: "Planejamento",
  },
];

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".results-reveal").forEach((el, i) => {
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
      id="resultados"
      className="relative py-28 md:py-36 overflow-hidden bg-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="results-reveal flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Resultados
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-7">
            <h2 className="results-reveal font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-gray-900 mb-6">
              Números que falam por si.{" "}
              <span className="text-gray-300">Sem promessas. Sem asteriscos.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="results-reveal text-gray-500 text-sm leading-relaxed">
              Cada resultado representa capital real recuperado ou economizado.
              Valores auditáveis e documentados.
            </p>
          </div>
        </div>

        {/* Big number - monumental */}
        <div className="results-reveal mb-16 relative">
          <div className="flex items-baseline gap-4">
            <span className="font-[family-name:var(--font-mono)] text-6xl md:text-8xl lg:text-[8rem] font-bold text-gray-900 leading-none">
              R$ 1,2
            </span>
            <span className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl font-bold text-[#BA1414]">
              bi
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-4 font-[family-name:var(--font-mono)]">
            Total recuperado e economizado
          </p>
          <div className="mt-6 w-full h-px bg-gradient-to-r from-[#BA1414]/20 via-gray-100 to-transparent" />
        </div>

        {/* Case cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {results.map((result, i) => (
            <div
              key={i}
              className="results-reveal group p-6 md:p-7 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-gray-400 uppercase tracking-wider">
                  {result.sector}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-gray-400 px-2 py-0.5 rounded border border-gray-200 bg-white">
                  {result.type}
                </span>
              </div>
              <div className="font-[family-name:var(--font-mono)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {result.value}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {result.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-[family-name:var(--font-mono)]">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {result.timeline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
