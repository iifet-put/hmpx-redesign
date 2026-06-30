import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  "Indústria", "Varejo", "Agronegócio", "Tecnologia", "Saúde", "Energia", "Logística", "Construção"
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".trust-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 30,
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
      className="relative py-20 md:py-28 overflow-hidden bg-gray-50/50"
    >
      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="trust-reveal text-center mb-12">
          <p className="text-gray-400 text-sm font-[family-name:var(--font-mono)] tracking-wider uppercase mb-8">
            Setores que confiam na HMPX
          </p>

          {/* Sector tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {logos.map((sector, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 text-sm hover:border-[#BA1414]/30 hover:text-[#BA1414] transition-all duration-300"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="trust-reveal max-w-3xl mx-auto text-center mt-16 p-8 md:p-12 rounded-lg bg-white border border-gray-100 shadow-sm">
          <svg className="w-8 h-8 text-[#BA1414]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
            "A HMPX não nos entregou um relatório — entregou R$ 47 milhões que
            estavam invisíveis na nossa operação. Em 30 anos de empresa, nunca
            tivemos esse nível de inteligência fiscal."
          </blockquote>
          <div>
            <div className="text-gray-900 font-semibold text-sm">Diretor Financeiro</div>
            <div className="text-gray-400 text-xs mt-1">Grupo Industrial — Setor Automotivo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
