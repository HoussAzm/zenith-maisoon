export function formatPrice(price: number, locale: string) {
  return new Intl.NumberFormat(`${locale}-u-nu-latn`, { maximumFractionDigits: 0 }).format(price);
}
