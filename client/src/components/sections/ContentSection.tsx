import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * =============================================================================
 *  SEÇÃO: SINAIS DO MERCADO — Eventos & Conteúdos
 *  Feed premium com as 8 publicações mais recentes do Instagram oficial da HMPX
 *  @hmpxinteligenciafiscal
 * -----------------------------------------------------------------------------
 *  DIREÇÃO TÉCNICA
 *  Esta seção NÃO usa a Instagram Graph API. O feed é alimentado por um
 *  widget externo (Elfsight, LightWidget, EmbedSocial, SnapWidget ou similar).
 *
 *  COMO CONECTAR O WIDGET (para o desenvolvedor):
 *  1. O cliente conecta o perfil @hmpxinteligenciafiscal ao serviço escolhido.
 *  2. O serviço gera um código (iframe OU script).
 *  3. Cole esse código dentro da função `renderWidget()` mais abaixo,
 *     ou defina a constante WIDGET_MODE e os parâmetros correspondentes.
 *  4. O feed deve ser configurado para exibir 8 posts, layout em grade.
 *  5. A atualização ocorre conforme o cache da ferramenta (minutos/horas),
 *     NÃO em tempo real absoluto.
 *
 *  Enquanto o widget real não é conectado, a seção exibe uma grade de
 *  placeholders (posts de demonstração) que representam fielmente o layout
 *  final — mantendo a experiência visual nativa e premium da HMPX.
 * =============================================================================
 */

const INSTAGRAM_URL = "https://www.instagram.com/hmpxinteligenciafiscal/";
const INSTAGRAM_HANDLE = "@hmpxinteligenciafiscal";

/**
 * WIDGET_MODE controla o comportamento da seção:
 *  - "demo"   → exibe posts de demonstração (estado atual, antes de conectar)
 *  - "script" → carrega um widget baseado em <script> (Elfsight, EmbedSocial…)
 *  - "iframe" → carrega um widget baseado em <iframe> (LightWidget, SnapWidget…)
 *
 * Para ativar o feed real, altere WIDGET_MODE e preencha os campos abaixo.
 */
const WIDGET_MODE: "demo" | "script" | "iframe" = "demo";

/** Se WIDGET_MODE === "iframe", cole aqui a URL do embed gerado pela ferramenta. */
const WIDGET_IFRAME_SRC = ""; // ex.: "https://lightwidget.com/widgets/xxxxxxxx.html"

/** Se WIDGET_MODE === "script", preencha os dados do script gerado pela ferramenta. */
const WIDGET_SCRIPT_SRC = ""; // ex.: "https://static.elfsight.com/platform/platform.js"
const WIDGET_SCRIPT_MOUNT_CLASS = ""; // ex.: "elfsight-app-xxxxxxxx-xxxx-xxxx"

/**
 * Posts de demonstração — representam o layout final.
 * Serão substituídos automaticamente pelo feed real ao ativar o widget.
 * As imagens usam a mesma estética da marca (obsidiano + vermelho).
 */
type DemoPost = {
  category: string;
  title: string;
  meta: string;
  featured?: boolean;
};

const DEMO_POSTS: DemoPost[] = [
  {
    category: "Reforma Tributária",
    title: "CBS e IBS: o que muda no seu fluxo de caixa a partir de 2026",
    meta: "Análise",
    featured: true,
  },
  {
    category: "Recuperação de Créditos",
    title: "PIS/COFINS: créditos invisíveis no seu balanço",
    meta: "Insight",
  },
  {
    category: "Evento",
    title: "Live — Planejamento fiscal na transição 2026–2033",
    meta: "Agenda",
  },
  {
    category: "Atualização",
    title: "STF define modulação em tese tributária relevante",
    meta: "Alerta",
  },
  {
    category: "Compliance",
    title: "Novo cronograma de obrigações acessórias",
    meta: "Prazo",
  },
  {
    category: "Inteligência Fiscal",
    title: "Como mapeamos oportunidades ocultas em 72h",
    meta: "Método",
  },
  {
    category: "Contencioso",
    title: "Estratégia de defesa em autuações de ICMS-ST",
    meta: "Case",
  },
  {
    category: "Bastidores",
    title: "HMPX no evento de inteligência tributária do setor",
    meta: "Presença",
  },
];

export default function ContentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Estados do carregamento do widget externo.
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  // -------------------------------------------------------------------------
  //  Carregamento do widget externo (script/iframe) com fallback e timeout.
  // -------------------------------------------------------------------------
  useEffect(() => {
    // Modo demonstração: mostra a grade nativa após um breve skeleton.
    if (WIDGET_MODE === "demo") {
      const t = setTimeout(() => setStatus("ready"), 900);
      return () => clearTimeout(t);
    }

    let cleanup: (() => void) | undefined;
    // Timeout de segurança: se o widget não sinalizar carregamento, cai no fallback.
    const failSafe = setTimeout(() => {
      setStatus((s) => (s === "ready" ? s : "error"));
    }, 12000);

    if (WIDGET_MODE === "iframe") {
      // O onLoad do <iframe> (no JSX) atualiza o status.
      // Aqui só garantimos o failSafe.
    }

    if (WIDGET_MODE === "script" && WIDGET_SCRIPT_SRC) {
      const script = document.createElement("script");
      script.src = WIDGET_SCRIPT_SRC;
      script.async = true;
      script.onload = () => setStatus("ready");
      script.onerror = () => setStatus("error");
      document.body.appendChild(script);
      cleanup = () => script.remove();
    } else if (WIDGET_MODE === "script" && !WIDGET_SCRIPT_SRC) {
      setStatus("error");
    }

    return () => {
      clearTimeout(failSafe);
      cleanup?.();
    };
  }, []);

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
  }, [status]);

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

        {/* ---------------------------------------------------------------- */}
        {/*  ÁREA DO FEED                                                     */}
        {/*  Renderiza: skeleton → (widget real | grade demo) → fallback     */}
        {/* ---------------------------------------------------------------- */}
        <div className="content-reveal">
          {status === "loading" && <SkeletonGrid />}

          {status === "error" && <Fallback />}

          {status === "ready" && (
            <>
              {WIDGET_MODE === "demo" && <BentoGrid posts={DEMO_POSTS} />}

              {WIDGET_MODE === "iframe" && (
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                  <iframe
                    src={WIDGET_IFRAME_SRC}
                    title="Feed do Instagram HMPX"
                    loading="lazy"
                    className="w-full min-h-[520px] md:min-h-[640px]"
                    onLoad={() => setStatus("ready")}
                    onError={() => setStatus("error")}
                    style={{ border: "0" }}
                  />
                </div>
              )}

              {WIDGET_MODE === "script" && (
                <div
                  ref={widgetRef}
                  className={`rounded-2xl overflow-hidden ${WIDGET_SCRIPT_MOUNT_CLASS}`}
                />
              )}
            </>
          )}
        </div>

        {/* Nota sobre atualização + CTA final */}
        <div className="content-reveal mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-white/5">
          <p className="flex items-center gap-2.5 text-[11px] text-white/30 font-[family-name:var(--font-mono)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Feed sincronizado automaticamente — a atualização pode levar alguns
            minutos conforme o cache da plataforma.
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
  // O primeiro card ocupa 2 colunas e 2 linhas em telas grandes (bento).
  const featuredClasses = post.featured
    ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2"
    : "col-span-1 row-span-1";

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-[#BA1414]/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(186,20,20,0.25)] ${featuredClasses} ${
        post.featured ? "min-h-[280px] md:min-h-[360px]" : "min-h-[150px] md:min-h-[180px]"
      }`}
    >
      {/* Visual de fundo — gradiente obsidiano com padrão */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0d0d0d] to-black" />
      <div
        className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow no hover */}
      <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-[#BA1414]/0 group-hover:bg-[#BA1414]/20 blur-3xl transition-all duration-500" />

      {/* Índice / marca d'água */}
      <span
        className={`absolute font-[family-name:var(--font-mono)] font-bold text-white/[0.04] group-hover:text-[#BA1414]/[0.10] transition-colors duration-500 leading-none select-none ${
          post.featured
            ? "text-[9rem] md:text-[13rem] -top-6 -right-4"
            : "text-[5rem] md:text-[7rem] -top-4 -right-2"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Conteúdo */}
      <div className="relative h-full flex flex-col justify-between p-4 md:p-5">
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
 *  SKELETON LOADING — placeholders animados no formato bento
 * ===========================================================================
 */
function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(0,1fr)] gap-3 md:gap-4">
      {Array.from({ length: 8 }).map((_, i) => {
        const featured = i === 0;
        return (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.06] bg-white/[0.02] ${
              featured
                ? "col-span-2 row-span-2 min-h-[280px] md:min-h-[360px]"
                : "col-span-1 row-span-1 min-h-[150px] md:min-h-[180px]"
            }`}
          >
            {/* Shimmer */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-4 md:p-5">
              <div className="h-3 w-20 rounded-full bg-white/[0.06]" />
              <div className="space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-white/[0.06]" />
                <div className="h-3 w-1/2 rounded-full bg-white/[0.05]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================================================================
 *  FALLBACK — mensagem elegante quando o widget não carrega
 * ===========================================================================
 */
function Fallback() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-16 md:py-24 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] mb-6">
          <InstagramIcon className="w-6 h-6 text-white/50" />
        </div>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
          Não foi possível carregar os conteúdos no momento.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(186,20,20,0.35)] active:scale-[0.97]"
        >
          <InstagramIcon className="w-4 h-4" />
          Acessar o Instagram oficial
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
