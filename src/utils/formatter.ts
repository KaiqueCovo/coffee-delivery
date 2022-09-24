export const priceFormatterWithCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
});
