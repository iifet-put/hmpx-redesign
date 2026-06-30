import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    code: "PLN",
    title: "Planejamento Tributário",
    description: "Estruturação fiscal inteligente que reduz carga tributária dentro da legalidade absoluta. Economia real, mensurável e sustentável.",
  },
  {
    code: "AUD",
    title: "Auditoria Fiscal",
    description: "Revisão minuciosa que identifica créditos esquecidos, pagamentos indevidos e oportunidades de recuperação que passaram despercebidas.",
  },
  {
    code: "REC",
    title: "Recuperação de Créditos",
    description: "Identificação e recuperação de valores pagos a maior nos últimos 5 anos. Capital que já é seu, mas estava invisível.",
  },
  {
    code: "CTN",
    title: "Contencioso Tributário",
    description: "Defesa estratégica em processos administrativos e judiciais. Cada caso tratado como uma operação de precisão com resultado calculado.",
  },
  {
    code: "CMP",
    title: "Compliance Fiscal",
    description: "Conformidade total com zero surpresas. Monitoramento preventivo que elimina riscos antes que se tornem autuações.",
  },
  {
    code: "DDG",
    title: "Due Diligence Tributária",
    description: "Análise fiscal completa para operações de M&A. Conheça cada risco e oportunidade antes de fechar negócio.",
  },
];

export default function SpecialtiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".spec-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
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
      id="especialidades"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="spec-reveal flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Especialidades
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-7">
            <h2 className="spec-reveal font-[family-name:var(--font-display)] font-black text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white">
              Cada área de atuação é uma{" "}
              <span className="text-white/30">frente de resultado.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="spec-reveal text-white/40 text-sm leading-relaxed">
              Não oferecemos serviços genéricos. Cada especialidade foi construída
              para gerar impacto financeiro direto e mensurável.
            </p>
          </div>
        </div>

        {/* Cards grid - with system codes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map((spec, i) => (
            <div
              key={i}
              className="spec-reveal group relative p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Code badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-white/20 bg-white/[0.03] px-2 py-1 rounded border border-white/5">
                  {spec.code}
                </span>
                <svg className="w-3.5 h-3.5 text-white/10 group-hover:text-white/30 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <h3 className="font-[family-name:var(--font-display)] font-bold text-base text-white mb-3">
                {spec.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
