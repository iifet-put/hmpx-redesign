# Seção "Sinais do Mercado" — Eventos & Conteúdos (Feed Instagram)

Este documento explica a nova seção de conteúdos do site da HMPX, o local dela na one-page, como conectar o feed real do Instagram via widget externo e os cuidados de performance e responsividade.

## 1. O que foi entregue

Foi criada a seção **"Sinais do Mercado"** — nome estratégico proposto no lugar do genérico "Eventos & Conteúdos". Ela reforça autoridade e produção contínua de conteúdo sobre inteligência fiscal, tributária e Reforma Tributária.

- **Arquivo do componente:** `client/src/components/sections/ContentSection.tsx`
- **Âncora / ID da seção:** `#conteudos`
- **Posição na one-page:** logo após a seção de autoridade/prova social (`TrustSection`) e antes do `FAQSection` e do CTA final de contato. Esse é o ponto ideal: o visitante já absorveu a proposta de valor e os resultados, e a prova de "presença ativa" reforça a decisão antes do formulário.
- **Links adicionados:** item **"Conteúdos"** na navbar (desktop e mobile) e **"Eventos & Conteúdos"** no rodapé, ambos apontando para `#conteudos`.

### Características visuais implementadas

| Recurso | Status |
|---|---|
| Bento grid (card destaque 2×2 + 7 cards) | Implementado |
| Cards sofisticados com marca d'água numérica | Implementado |
| Hover effects e microinterações | Implementado |
| Scroll reveal (GSAP ScrollTrigger, padrão do projeto) | Implementado |
| Skeleton loading (shimmer) | Implementado |
| Lazy loading do iframe/script | Implementado |
| Espaçamento premium e fundo obsidiano | Implementado |
| Uso controlado de vermelho (#BA1414) | Implementado |
| CTA "Acompanhe a HMPX no Instagram" | Implementado |
| Fallback elegante | Implementado |
| Responsivo (2 colunas mobile → 4 colunas desktop) | Implementado |

> **Estado atual:** a seção opera em modo de **demonstração** (`WIDGET_MODE = "demo"`), exibindo 8 cards que representam fielmente o layout final. Assim que o widget real for conectado, os cards passam a refletir os posts reais do Instagram, mantendo a mesma moldura visual.

## 2. Recomendações de widget

Nenhuma integração direta com a Instagram Graph API foi feita neste momento, conforme solicitado. A recomendação é usar um serviço de feed que gera código pronto:

| Ferramenta | Formato | Observações |
|---|---|---|
| **Elfsight** | `<script>` | Mais completo, muitos layouts, plano gratuito limitado. Recomendado para grade premium. |
| **LightWidget** | `<iframe>` | Simples, leve, ótimo custo-benefício, fácil de estilizar em grade. |
| **EmbedSocial** | `<script>` | Robusto, bom para múltiplas redes. |
| **SnapWidget** | `<iframe>` | Gratuito, muito simples, ideal para grade fixa de 8 posts. |

**Sugestão:** para o objetivo (8 posts, grade, baixo esforço), **LightWidget** ou **SnapWidget** (iframe) são os mais diretos; **Elfsight** se quiser mais controle visual.

## 3. Como conectar o feed real (passo a passo para o desenvolvedor)

1. O cliente conecta o perfil **@hmpxinteligenciafiscal** ao serviço escolhido.
2. Configure o widget para: **8 posts**, **layout em grade**, sem cabeçalho/bordas do próprio widget (para parecer nativo).
3. O serviço gera um código **iframe** ou **script**.
4. Abra `client/src/components/sections/ContentSection.tsx` e edite as constantes no topo do arquivo (linhas ~43-50):

### Caso o código gerado seja um IFRAME (ex.: LightWidget, SnapWidget)

```ts
const WIDGET_MODE: "demo" | "script" | "iframe" = "iframe";
const WIDGET_IFRAME_SRC = "https://lightwidget.com/widgets/SEU_ID.html";
```

### Caso o código gerado seja um SCRIPT (ex.: Elfsight, EmbedSocial)

```ts
const WIDGET_MODE: "demo" | "script" | "iframe" = "script";
const WIDGET_SCRIPT_SRC = "https://static.elfsight.com/platform/platform.js";
const WIDGET_SCRIPT_MOUNT_CLASS = "elfsight-app-SEU-ID-AQUI";
```

O componente já cuida de: skeleton enquanto carrega, `onLoad`/`onError` para alternar entre feed e fallback, `loading="lazy"` no iframe e injeção assíncrona do script.

5. Rode `pnpm dev` para validar localmente e `pnpm build` para produção.

## 4. Sobre a atualização (importante)

A atualização **não é em tempo real absoluto**. Ela ocorre conforme o **cache da ferramenta escolhida**, podendo levar de alguns **minutos a algumas horas**. Isso é o comportamento normal e esperado desse tipo de widget — a copy da seção e esta documentação já refletem essa expectativa.

## 5. Fallback

Se o widget não carregar (falha de rede, bloqueio, erro do serviço), a seção exibe automaticamente uma mensagem elegante:

> "Não foi possível carregar os conteúdos no momento."

…mantendo sempre visível o botão **"Acompanhe a HMPX no Instagram"** (link direto para o perfil oficial). Há também um *failsafe* de 12s: se o widget não sinalizar carregamento nesse tempo, o fallback é acionado.

## 6. Cuidados de performance e responsividade

- **Lazy loading:** o iframe usa `loading="lazy"` e o script é injetado de forma assíncrona apenas quando a seção é montada, evitando bloquear o carregamento inicial da página.
- **Skeleton:** placeholders com shimmer evitam *layout shift* e comunicam carregamento.
- **Responsividade:** grade `grid-cols-2` no mobile e `lg:grid-cols-4` no desktop; o card destaque ocupa `span 2×2` apenas em telas grandes.
- **Coerência visual:** ao conectar o widget real, configure-o **sem** cabeçalho, legenda ou botões próprios, e com fundo transparente, para que ele se integre à moldura obsidiana da seção e não pareça um bloco genérico incorporado.
- **CSP / domínios:** caso o site use Content-Security-Policy, libere o domínio do widget (ex.: `*.elfsight.com`, `*.lightwidget.com`, `*.snapwidget.com`) em `frame-src`/`script-src`.
