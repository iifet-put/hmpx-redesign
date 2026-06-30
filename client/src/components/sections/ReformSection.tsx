import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReformSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reform-reveal").forEach((el, i) => {
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
      id="reforma"
      className="relative py-28 md:py-36 overflow-hidden bg-gray-50/50"
    >
      {/* Red Line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/15 to-transparent" />

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="reform-reveal flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Reforma Tributária 2026–2033
          </span>
        </div>

        {/* Headline */}
        <h2 className="reform-reveal font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-gray-900 max-w-4xl mb-8">
          A maior mudança tributária em 40 anos{" "}
          <span className="text-gray-300">já começou.</span>
        </h2>

        <p className="reform-reveal text-lg text-gray-500 max-w-2xl mb-16">
          A Reforma Tributária não é um evento futuro — é um processo em
          andamento que já está redefinindo regras. Empresas que se
          prepararem agora terão vantagem competitiva irreversível.
        </p>

        {/* Timeline - horizontal on desktop */}
        <div className="reform-reveal grid md:grid-cols-4 gap-4 md:gap-3 mb-16">
          {[
            { year: "2026", event: "Início da transição", desc: "CBS e IBS coexistem com tributos atuais." },
            { year: "2027–28", event: "Fase de testes", desc: "Alíquotas de referência definidas." },
            { year: "2029–32", event: "Migração progressiva", desc: "Redução gradual dos tributos antigos." },
            { year: "2033", event: "Consolidação", desc: "Novo sistema plenamente vigente." },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-5 rounded-lg bg-white border border-gray-100 group hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="font-[family-name:var(--font-mono)] text-lg font-bold text-gray-900 mb-2">
                {item.year}
              </div>
              <h4 className="font-[family-name:var(--font-display)] font-semibold text-sm text-gray-700 mb-1">
                {item.event}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>
              {/* Connection line between cards */}
              {i < 3 && (
                <div className="absolute top-1/2 -right-2 w-4 h-px bg-gray-200 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Alert box */}
        <div className="reform-reveal p-6 md:p-8 rounded-lg border border-[#BA1414]/20 bg-[#BA1414]/[0.02]">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-[#BA1414] mt-2 shrink-0 animate-pulse" />
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                O período de transição (2026-2033) é a janela de oportunidade.
                Quem mapear cenários agora poderá otimizar sua estrutura antes
                que as novas regras se consolidem. Inércia custará caro.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#BA1414] hover:text-[#D41818] transition-colors duration-300"
              >
                Preparar minha empresa
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
