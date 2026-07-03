import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DemoPost } from "@/types/DemoPost.type";
import { DEMO_POSTS } from "@/constants/DemoPosts.const";

gsap.registerPlugin(ScrollTrigger);

const INSTAGRAM_URL = "https://www.instagram.com/hmpxinteligenciafiscal/";
const INSTAGRAM_HANDLE = "@hmpxinteligenciafiscal";

const POST_WIDTH_CLASSES: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
};

const POST_HEIGHT_CLASSES: Record<number, string> = {
  1: "lg:row-span-1",
  2: "lg:row-span-2",
  3: "lg:row-span-3",
  4: "lg:row-span-4",
};

export default function ContentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // -------------------------------------------------------------------------
  //  Animações de scroll reveal (padrão GSAP do projeto).
  // -------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".content-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.06,
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
  });

  return (
    <section
      ref={sectionRef}
      id="conteudos"
      className="relative py-28 md:py-36 overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Red line accent no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/40 to-transparent" />

      {/* Glow vermelho controlado */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#BA1414]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#BA1414]/[0.04] blur-[120px]" />

      <div className="relative container max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="content-reveal flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#BA1414]" />
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
            Sinais do Mercado
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="content-reveal font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.08] text-white mb-6">
              Inteligência fiscal em movimento.{" "}
              <span className="text-white/35">
                Eventos, análises e a Reforma em tempo real.
              </span>
            </h2>
            <p className="content-reveal text-white/50 text-sm md:text-base leading-relaxed max-w-2xl">
              Acompanhe a produção contínua da HMPX sobre inteligência fiscal,
              tributária e a Reforma Tributária. Publicações, eventos e leituras
              do setor — direto do nosso Instagram oficial{" "}
              <span className="text-white/70">{INSTAGRAM_HANDLE}</span>.
            </p>
          </div>

          {/* CTA lateral (desktop) */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="content-reveal group inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/10 bg-white/[0.02] hover:border-[#BA1414]/40 hover:bg-[#BA1414]/[0.06] transition-all duration-300"
            >
              <InstagramIcon className="w-5 h-5 text-white/70 group-hover:text-[#BA1414] transition-colors duration-300" />
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                Acompanhe a HMPX no Instagram
              </span>
            </a>
          </div>
        </div>

        <div className="content-reveal">
            <>
              <BentoGrid posts={DEMO_POSTS}/>
            </>
        </div>

        {/* Nota sobre atualização + CTA final */}
        <div className="content-reveal mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-white/5">
          <p className="flex items-center gap-2.5 text-[11px] text-white/30 font-[family-name:var(--font-mono)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Acompanhe os conteúdos da HMPX em tempo real. Atualizações diárias no Instagram oficial.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(186,20,20,0.35)] active:scale-[0.97] shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            Acompanhe a HMPX no Instagram
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
 *  BENTO GRID — grade responsiva de 8 posts com card destaque (featured)
 * ===========================================================================
 */
function BentoGrid({ posts }: { posts: DemoPost[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(0,1fr)] gap-3 md:gap-4">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} index={i} />
      ))}
    </div>
  );
}

function PostCard({ post, index }: { post: DemoPost; index: number }) {
  const featuredClasses = [
    post.width ? POST_WIDTH_CLASSES[post.width] : "",
    post.height ? POST_HEIGHT_CLASSES[post.height] : "",
  ].join(" ");

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-[#BA1414]/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(186,20,20,0.25)] ${featuredClasses} ${
        post.featured ? "min-h-[280px] md:min-h-[360px]" : "min-h-[150px] md:min-h-[180px]"
      }`}
    >
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 z-10 opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500"
        style={{
          backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow no hover */}
      <div className="absolute -bottom-16 -right-16 z-20 w-40 h-40 rounded-full bg-[#BA1414]/0 group-hover:bg-[#BA1414]/20 blur-3xl transition-all duration-500" />

      {/* Índice / marca d'água */}
      <span
        className={`absolute z-30 font-[family-name:var(--font-mono)] font-bold text-white/[0.04] group-hover:text-[#BA1414]/[0.10] transition-colors duration-500 leading-none select-none ${
          post.featured
          ? "text-[9rem] md:text-[13rem] -top-6 -right-4"
            : "text-[5rem] md:text-[7rem] -top-4 -right-2"
            }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Conteúdo */}
      <div className="relative z-40 h-full flex flex-col justify-between p-4 md:p-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[9px] md:text-[10px] tracking-wider uppercase text-white/40 group-hover:text-[#BA1414] transition-colors duration-300">
            <span className="w-1 h-1 rounded-full bg-[#BA1414]" />
            {post.category}
          </span>
          <InstagramIcon className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors duration-300" />
        </div>

        <div>
          <h3
            className={`font-[family-name:var(--font-display)] font-semibold text-white/90 leading-snug mb-2 ${
              post.featured ? "text-lg md:text-2xl" : "text-sm md:text-base"
            }`}
          >
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-white/30 font-[family-name:var(--font-mono)] uppercase tracking-wider">
            <span>{post.meta}</span>
            <span className="w-3 h-px bg-white/15" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/50">
              Ver no Instagram
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ===========================================================================
 *  Ícone do Instagram (inline SVG, sem dependências externas)
 * ===========================================================================
 */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
