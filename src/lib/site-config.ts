export const siteConfig = {
  name: "Zénith Maison",
  tagline: "Palais, riads & villas de prestige à Marrakech",
  city: "Marrakech, Maroc",
  address: "Route de l'Ourika, Marrakech, Maroc",
  phone: "+212 6 00 00 00 00",
  phoneDisplay: "+212 6 00 00 00 00",
  whatsapp: "212600000000",
  email: "contact@zenith-maison.com",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  hours: "Disponible 7j/7 — 8h à 22h",
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
