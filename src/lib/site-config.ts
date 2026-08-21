export const siteConfig = {
  name: "Zénith Maison",
  tagline: "Palais, riads & villas de prestige à Marrakech",
  city: "Marrakech, Maroc",
  address: "Route de l'Ourika, Marrakech, Maroc",
  phone: "+212 658300133",
  phoneDisplay: "+212 658300133",
  whatsapp: "212658300133",
  email: "houssamazmour@gmail.com",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
