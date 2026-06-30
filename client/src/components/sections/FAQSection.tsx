import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Qual o investimento mínimo para iniciar?",
    answer: "Nosso diagnóstico inicial é gratuito. A partir dele, apresentamos um escopo personalizado com investimento proporcional ao potencial de retorno identificado. Em média, nossos clientes recuperam 10x o valor investido nos primeiros 12 meses.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados tangíveis aparecem entre 30 e 90 dias, dependendo da complexidade da operação. O diagnóstico completo é entregue em até 72 horas após o início do projeto.",
  },
  {
    question: "Vocês atendem empresas de qual porte?",
    answer: "Atendemos empresas com faturamento anual a partir de R$ 50 milhões. Nossa metodologia é mais eficaz em operações de média e grande complexidade, onde as oportunidades ocultas são proporcionalmente maiores.",
  },
  {
    question: "Como funciona a Reforma Tributária para minha empresa?",
    answer: "Realizamos uma análise específica do impacto da reforma no seu setor e estrutura. Simulamos cenários comparativos (sistema atual vs. novo sistema) e construímos um roadmap de adaptação que protege e otimiza sua posição fiscal durante toda a transição.",
  },
  {
    question: "Qual a diferença entre HMPX e uma consultoria tradicional?",
    answer: "Consultorias tradicionais reagem a problemas. Nós antecipamos oportunidades. Nossa abordagem combina análise sistemática de dados com expertise humana para identificar cenários que auditorias convencionais simplesmente não conseguem enxergar.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".faq-reveal").forEach((el, i) => {
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
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      <div className="relative container max-w-4xl mx-auto px-4">
        <div className="faq-reveal flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Perguntas Frequentes
          </span>
        </div>

        <h2 className="faq-reveal font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl leading-[1.1] text-gray-900 mb-12">
          Respostas diretas.{" "}
          <span className="text-gray-300">Sem rodeios.</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-reveal border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-colors duration-300 bg-gray-50/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="font-[family-name:var(--font-display)] font-semibold text-gray-900 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#BA1414] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
