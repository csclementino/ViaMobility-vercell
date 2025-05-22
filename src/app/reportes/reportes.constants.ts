export const categories = [
  'Assédio',
  'Racismo', 
  'Roubo',
  'Vandalismo',
  'Violência',
  'Vendedor Ilegal'
] as const;

export type ReportCategory = typeof categories[number];

export const categoryIcons: Record<ReportCategory, string> = {
  'Assédio': '/assedio.png',
  'Racismo': '/racismo.png',
  'Roubo': '/roubo.png',
  'Vandalismo': '/vandalismo.png',
  'Violência': '/violencia.png',
  'Vendedor Ilegal': '/vendedor.png'
};

export const categorySlugs = categories.map(category => ({
  tipo: category.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
}));