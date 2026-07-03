export type DemoPost = {
  category: string; // Titulo da categoria exibido acima do card (ex.: "Evento", "Insight", "Alerta")
  title: string; // Titulo do card (ex.: "CBS e IBS: o que muda no seu fluxo de caixa a partir de 2026")
  meta: string; // Texto de metadados exibido abaixo do card (ex.: "Análise", "Case", "Prazo")
  featured?: boolean; // Se o card é destaque (featured) ou não.
  height?: number; // Número de linhas que o card ocupa. Se não definido, usa o padrão do bento grid.
  width?: number; // Número de colunas que o card ocupa. Se não definido, usa o padrão do bento grid.
  image?: string; // URL da imagem de fundo do card (ex.: "/images/demo-post-1.webp")
};
