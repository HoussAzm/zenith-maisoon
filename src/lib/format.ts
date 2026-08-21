export function formatPrice(price: number, locale: string) {
  return new Intl.NumberFormat(`${locale}-u-nu-latn`, { maximumFractionDigits: 0 }).format(price);
}

export function formatStat(value: number, locale: string, decimals = 0) {
  return new Intl.NumberFormat(`${locale}-u-nu-latn`, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
