# Brainstorm de Design — HMPX Redesign

## Abordagem 1: "Obsidian Intelligence"
**Intro:** Estética de inteligência algorítmica — fundo negro absoluto com elementos de luz vermelha que evocam precisão cirúrgica e análise de dados em tempo real. A sensação é de estar dentro de um sistema de inteligência avançado.
**Probabilidade:** 0.04

## Abordagem 2: "Tectonic Shift"
**Intro:** Inspirada em movimentos geológicos — camadas que se revelam durante o scroll, representando as camadas ocultas de oportunidades tributárias. Transições dramáticas entre seções com parallax profundo e tipografia monumental.
**Probabilidade:** 0.03

## Abordagem 3: "Precision Grid"
**Intro:** Minimalismo radical com grid assimétrico — inspirado em design editorial de alta costura. Cada seção é uma composição visual única, com tipografia como protagonista e vermelho usado apenas como bisturi visual.
**Probabilidade:** 0.07

---

## Abordagem Escolhida: "Obsidian Intelligence"

### Design Movement
Dark UI Premium com influências de interfaces de dados financeiros e dashboards de inteligência artificial. Referências visuais: Linear, Bloomberg Terminal (estética), Stripe (qualidade de execução).

### Core Principles
1. **Precisão Visual** — Cada pixel tem propósito. Nenhum elemento decorativo sem função comunicacional.
2. **Profundidade Luminosa** — O preto não é pesado; é profundo. Gradientes sutis, glows e bordas luminosas criam dimensão.
3. **Tensão Controlada** — O vermelho (#BA1414 / #F50000) aparece apenas em momentos de máximo impacto, criando pontos de tensão visual que guiam o olhar.
4. **Revelação Progressiva** — A informação se revela em camadas durante o scroll, mantendo curiosidade constante.

### Color Philosophy
O preto (#0A0A0A) representa a complexidade do cenário tributário brasileiro — denso, profundo, cheio de camadas ocultas. O branco (#FAFAFA) representa clareza — o resultado do trabalho da HMPX. O vermelho (#BA1414) representa urgência e oportunidade — os momentos críticos onde decisões tributárias impactam milhões. Gradientes sutis de cinza escuro criam profundidade sem peso.

### Layout Paradigm
Layout assimétrico com seções de largura variável. Alternância entre composições full-bleed (hero, CTAs) e composições contidas em grid. Uso de espaço negativo como ferramenta narrativa. Seções com alturas variáveis para criar ritmo irregular que mantém atenção.

### Signature Elements
1. **Red Line** — Uma linha vermelha fina que aparece como elemento de conexão entre seções, representando o "fio condutor" da inteligência tributária.
2. **Glow Pulse** — Elementos com brilho sutil pulsante que sugerem "inteligência ativa" e processamento em tempo real.
3. **Data Fragments** — Números e dados que aparecem como fragmentos visuais no background, sugerindo a análise constante de informações.

### Interaction Philosophy
Interações são respostas — nunca decorações. Hover states revelam informação adicional. Scroll triggers revelam conteúdo de forma cinematográfica. Cada clique leva a uma ação de valor. O site responde ao usuário como um sistema inteligente responderia.

### Animation
- Scroll-triggered reveals com GSAP ScrollTrigger (fade-up + scale sutil, 0.8s, ease: power2.out)
- Parallax em camadas de profundidade (velocidades: 0.3x, 0.5x, 1x)
- Números animados (countUp) ao entrar na viewport
- Glow pulsante em elementos-chave (CSS animation, 3s infinite, ease-in-out)
- Stagger em listas/cards (50ms entre itens)
- Hero: partículas/grid animado com canvas ou CSS

### Typography System
- **Display/Headlines:** Inter Tight (900 weight) — geométrica, moderna, com presença monumental
- **Body:** Inter (400/500) — legibilidade perfeita em fundos escuros
- **Accents/Labels:** JetBrains Mono (500) — para números, dados e elementos técnicos que reforçam a ideia de precisão
- Escala: 14px / 16px / 20px / 28px / 40px / 56px / 72px / 96px

### Brand Essence
**Posicionamento:** Inteligência fiscal estratégica para empresas que não aceitam perder dinheiro invisível — feita para CFOs e decisores que exigem precisão, não promessas.
**Personalidade:** Precisa. Ousada. Cirúrgica.

### Brand Voice
Headlines e CTAs soam como afirmações de quem domina o assunto — nunca como quem está tentando vender. Microcopy é direto e confiante.
- Exemplo 1: "R$ 2,3 bilhões. É o que empresas perdem por ano em oportunidades tributárias invisíveis."
- Exemplo 2: "Sua empresa não precisa de mais uma consultoria. Precisa de inteligência."

### Wordmark & Logo
Logotipo "HMPX" em tipografia geométrica customizada com tracking expandido. O "X" possui um corte diagonal sutil em vermelho, representando a precisão cirúrgica da análise tributária. Fundo transparente, versão principal em branco para aplicação sobre fundos escuros.

### Signature Brand Color
**Vermelho #BA1414** — um vermelho profundo, não agressivo, que evoca urgência estratégica e importância. Usado com parcimônia extrema para máximo impacto.

## Style Decisions
- O vermelho #BA1414 deve aparecer apenas como sinal de decisão — CTA principal, numerais críticos, cortes do "X" e Red Line — nunca como cor decorativa genérica em muitos elementos ao mesmo tempo.
- Cada seção principal deve conter pelo menos um gesto de "interface de inteligência" — fragmentos de dados, linhas de conexão, leitura mono ou composição assimétrica — para evitar que o site recaia em uma landing page corporativa escura comum.
- O wordmark HMPX deve ser tratado como ativo proprietário: tracking expandido, geometria rígida e "X" com corte vermelho devem reaparecer como assinatura visual consistente em toda a experiência.
