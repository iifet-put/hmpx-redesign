# HMPX — Documentação Completa do Projeto

## Visão Geral

Site institucional one-page para a **HMPX — Inteligência Fiscal e Tributária**, desenvolvido como uma experiência digital premium com estética "Obsidian Intelligence". O projeto foi construído com React 19, Tailwind CSS 4, GSAP (ScrollTrigger) e segue uma arquitetura modular de componentes.

---

## Stack Tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| React | 19.x | Framework de UI |
| Tailwind CSS | 4.x | Sistema de estilos utilitários |
| GSAP + ScrollTrigger | 3.x | Animações de scroll |
| Vite | 7.x | Build tool e dev server |
| TypeScript | 5.6 | Tipagem estática |

---

## Arquitetura de Componentes

```
client/src/
├── pages/
│   └── Home.tsx              ← Página principal (assembla todas as seções)
├── components/
│   ├── Navbar.tsx            ← Navegação fixa com transição ao scroll
│   ├── Footer.tsx            ← Rodapé com branding e links
│   └── sections/
│       ├── HeroSection.tsx       ← Hero com layout assimétrico + data modules
│       ├── ProblemSection.tsx    ← Seção de problema (dados + impacto)
│       ├── SolutionSection.tsx   ← Apresentação da HMPX como sistema
│       ├── MethodologySection.tsx← Processo em 4 etapas
│       ├── SpecialtiesSection.tsx← 6 áreas de atuação
│       ├── ReformSection.tsx     ← Reforma Tributária 2026-2033
│       ├── ResultsSection.tsx    ← Resultados quantificados
│       ├── TrustSection.tsx      ← Prova social e depoimento
│       ├── FAQSection.tsx        ← Perguntas frequentes (accordion)
│       └── CTASection.tsx        ← Formulário de contato
└── index.css                 ← Design tokens e variáveis globais
```

---

## Design System

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| Background | `#0A0A0A` | Fundo principal (obsidiano) |
| Foreground | `#FFFFFF` | Texto principal |
| Accent (Red) | `#BA1414` | CTA, numerais críticos, Red Line |
| Muted Text | `rgba(255,255,255,0.45)` | Texto secundário |
| Subtle Text | `rgba(255,255,255,0.20-0.30)` | Labels, metadata |
| Card BG | `rgba(255,255,255,0.02)` | Fundos de cards |
| Border | `rgba(255,255,255,0.05-0.10)` | Bordas sutis |

### Tipografia

| Fonte | Uso | Variável CSS |
|---|---|---|
| Space Grotesk | Headlines, títulos | `--font-display` |
| JetBrains Mono | Dados, labels, código | `--font-mono` |
| Inter | Corpo de texto | `--font-body` |

### Princípios de Design

1. **Vermelho como sinal de decisão** — Usado apenas em CTA, numerais críticos, Red Line e corte do "X"
2. **Interface de inteligência** — Cada seção contém fragmentos de dados, leituras mono ou composição assimétrica
3. **Wordmark proprietário** — "HMPX" com tracking expandido e "X" em vermelho como assinatura visual

---

## Animações (GSAP)

Todas as seções utilizam `ScrollTrigger` para revelação progressiva:

- **Padrão**: `y: 40, opacity: 0 → 0, 1` com `ease: "power2.out"`
- **Duração**: 0.7-0.8s
- **Stagger**: 0.08-0.1s entre elementos
- **Trigger**: `start: "top 85%"`

O Hero utiliza uma timeline GSAP sequencial para entrada coordenada dos elementos.

---

## Responsividade

O site é totalmente responsivo com breakpoints:

| Breakpoint | Comportamento |
|---|---|
| < 640px | Layout single-column, tipografia reduzida |
| 640-1024px | Grid 2 colunas em cards |
| > 1024px | Layout completo com assimetria 12-col |

A Navbar alterna para menu hamburger em mobile com animação de transição.

---

## Seções e Copy

### 1. Hero
- **Headline**: "Sua empresa perde dinheiro todos os dias. Você só não sabe quanto."
- **CTA**: "Descubra suas oportunidades ocultas"
- **Elemento diferencial**: Data modules flutuantes (dashboard-like) no lado direito

### 2. Problema
- **Headline**: "O sistema tributário brasileiro foi projetado para ser incompreensível."
- **Dados**: 97 normas/dia, 34% da receita, R$ 4,7 tri em litígios

### 3. Solução (HMPX)
- **Headline**: "Não somos uma consultoria. Somos um sistema de inteligência."
- **Diferencial**: Lista de capabilities com códigos de sistema (SCAN, FIND, WATCH, PLAN)

### 4. Metodologia
- **Headline**: "Precisão que se mede em reais recuperados."
- **4 etapas**: Diagnóstico → Modelagem → Implementação → Monitoramento

### 5. Especialidades
- 6 áreas com códigos: PLN, AUD, REC, CTN, CMP, DDG

### 6. Reforma Tributária
- Timeline horizontal 2026-2033
- Alert box com CTA contextual

### 7. Resultados
- **Big number**: R$ 2,3 bi
- 3 cases: Indústria (R$ 47M), Varejo (R$ 23M), Agronegócio (R$ 89M)

### 8. Trust/Social Proof
- Setores atendidos + depoimento anônimo

### 9. FAQ
- 5 perguntas com accordion customizado

### 10. CTA Final
- Formulário de contato com campos: Nome, Email, Empresa, Telefone, Faturamento

---

## Assets Visuais

| Asset | Uso | Path |
|---|---|---|
| Hero BG | Background do hero | `/manus-storage/hmpx-hero-bg_0663a553.png` |
| Logo Icon | Navbar e Footer | `/manus-storage/hmpx-logo-icon_6611e25d.png` |
| Methodology | Seção Solução | `/manus-storage/hmpx-methodology_f912f904.png` |
| Reform | Background Reforma | `/manus-storage/hmpx-reform_5a790e10.png` |
| Data Pattern | Decorativo | `/manus-storage/hmpx-data-pattern_8e0b2c1a.png` |

---

## Como Executar

```bash
# Instalar dependências
pnpm install

# Iniciar dev server
pnpm dev

# Build para produção
pnpm build

# Iniciar em produção
pnpm start
```

---

## Próximos Passos Sugeridos

1. **Integração de formulário** — Conectar o CTA a um backend (webhook, email, CRM)
2. **Analytics** — Configurar eventos de conversão no formulário
3. **Blog/Conteúdo** — Adicionar seção de artigos sobre Reforma Tributária
4. **WhatsApp** — Botão flutuante para contato direto
5. **Performance** — Lazy loading de imagens e code splitting por seção
