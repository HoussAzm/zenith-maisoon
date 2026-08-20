import type { FAQ, Property, Testimonial } from "@/types";

export const properties: Property[] = [
  {
    slug: "palais-riyad-el-fassia",
    name: "Palais Riyad El Fassia",
    category: "palais",
    categoryLabel: "Palais",
    location: "Médina de Marrakech, quartier Mouassine",
    pricePerNight: 5800,
    capacity: 16,
    bedrooms: 8,
    bathrooms: 8,
    rating: 5.0,
    reviews: 39,
    featured: true,
    shortDescription:
      "Ancien palais du XIXe siècle restauré avec deux patios, hammam privé et service de majordome dédié.",
    description:
      "Le Palais Riyad El Fassia occupe une demeure du XIXe siècle entièrement restaurée par des maîtres artisans marocains. Ses deux patios à ciel ouvert, ses salons voûtés en zellige et bois peint et sa piscine intérieure en font une adresse d'exception pour les grandes familles ou les groupes d'amis souhaitant un séjour royal au cœur de la médina. Une équipe dédiée (majordome, chef privé, spa) est disponible sur place tout au long du séjour.",
    amenities: [
      "Piscine intérieure chauffée",
      "Hammam et spa privés",
      "Deux patios avec fontaines",
      "Service de majordome",
      "Chef privé sur demande",
      "Climatisation",
      "Wifi haut débit",
      "Transfert aéroport",
    ],
    images: [
      "/images/hebergements/palais-riyad-el-fassia-1.jpg",
      "/images/hebergements/palais-riyad-el-fassia-2.jpg",
      "/images/hebergements/palais-riyad-el-fassia-3.jpg",
    ],
  },
  {
    slug: "riad-al-manar",
    name: "Riad Al Manar",
    category: "riad",
    categoryLabel: "Riad de charme",
    location: "Médina de Marrakech",
    pricePerNight: 1450,
    capacity: 8,
    bedrooms: 4,
    bathrooms: 4,
    rating: 4.9,
    reviews: 128,
    featured: true,
    shortDescription:
      "Riad traditionnel entièrement rénové avec patio central, fontaine en zellige et piscine chauffée.",
    description:
      "Niché au cœur de la médina de Marrakech, le Riad Al Manar allie authenticité marocaine et confort moderne. Autour de son patio à ciel ouvert, la fontaine en zellige et les orangers créent une atmosphère sereine. Les quatre suites climatisées offrent chacune leur propre identité décorative, entre mobilier artisanal et linge de maison haut de gamme. La terrasse panoramique avec vue sur les toits de la médina et l'Atlas est idéale pour les petits-déjeuners et dîners privés.",
    amenities: [
      "Piscine chauffée",
      "Terrasse panoramique",
      "Climatisation",
      "Wifi haut débit",
      "Petit-déjeuner inclus",
      "Service de majordome",
      "Hammam privé",
      "Transfert aéroport",
    ],
    images: [
      "/images/hebergements/riad-al-manar-1.jpg",
      "/images/hebergements/riad-al-manar-2.jpg",
      "/images/hebergements/riad-al-manar-3.jpg",
    ],
  },
  {
    slug: "riad-jasmin",
    name: "Riad Jasmin",
    category: "riad",
    categoryLabel: "Riad de charme",
    location: "Médina, quartier Kasbah",
    pricePerNight: 1150,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 3,
    rating: 4.8,
    reviews: 94,
    shortDescription:
      "Riad intimiste à deux pas du Palais Bahia, décoration artisanale et rooftop privatif.",
    description:
      "Le Riad Jasmin séduit par son atmosphère feutrée et sa décoration entièrement réalisée par des artisans locaux : tadelakt, bois de cèdre sculpté et zellige fait main. Situé dans le quartier calme de la Kasbah, à quelques minutes à pied du Palais Bahia et de la place Jemaa el-Fna, il offre un accès privilégié aux principaux sites de la médina tout en préservant une réelle tranquillité.",
    amenities: [
      "Rooftop privatif",
      "Climatisation",
      "Wifi haut débit",
      "Petit-déjeuner inclus",
      "Cours de cuisine sur demande",
      "Conciergerie",
    ],
    images: [
      "/images/hebergements/riad-jasmin-1.jpg",
      "/images/hebergements/riad-jasmin-2.jpg",
      "/images/hebergements/riad-jasmin-3.jpg",
    ],
  },
  {
    slug: "villa-atlas-view",
    name: "Villa Atlas View",
    category: "villa",
    categoryLabel: "Villa avec piscine",
    location: "Route de l'Ourika, Palmeraie",
    pricePerNight: 3200,
    capacity: 12,
    bedrooms: 6,
    bathrooms: 6,
    rating: 5.0,
    reviews: 61,
    featured: true,
    shortDescription:
      "Villa contemporaine avec vue imprenable sur l'Atlas, grande piscine à débordement et jardin privé.",
    description:
      "Idéale pour les séjours en famille ou entre amis, la Villa Atlas View déploie 800 m² de jardins arborés autour d'une piscine à débordement face aux montagnes de l'Atlas. Les volumes généreux, la cuisine entièrement équipée et le salon d'été couvert en font un lieu parfait pour recevoir. Un chef privé et une équipe de maison peuvent être mis à disposition sur demande.",
    amenities: [
      "Piscine à débordement",
      "Jardin privé de 800 m²",
      "Chef privé sur demande",
      "Salle de sport",
      "Climatisation",
      "Wifi haut débit",
      "Parking privé",
      "Sécurité 24h/24",
    ],
    images: [
      "/images/hebergements/villa-atlas-view-1.jpg",
      "/images/hebergements/villa-atlas-view-2.jpg",
      "/images/hebergements/villa-atlas-view-3.jpg",
    ],
  },
  {
    slug: "villa-palmeraie-dune",
    name: "Villa Palmeraie Dune",
    category: "villa",
    categoryLabel: "Villa avec piscine",
    location: "Palmeraie de Marrakech",
    pricePerNight: 2600,
    capacity: 10,
    bedrooms: 5,
    bathrooms: 5,
    rating: 4.9,
    reviews: 47,
    shortDescription:
      "Villa design au cœur de la Palmeraie, ambiance zen, piscine chauffée et espace bien-être.",
    description:
      "Entourée de palmiers centenaires, la Villa Palmeraie Dune propose une architecture épurée mêlant béton ciré, bois brut et larges baies vitrées. L'espace bien-être avec sauna et salle de massage, ainsi que la piscine chauffée toute l'année, en font une adresse recherchée pour les séjours ressourçants.",
    amenities: [
      "Piscine chauffée",
      "Sauna & salle de massage",
      "Cuisine équipée",
      "Climatisation",
      "Wifi haut débit",
      "Voiturier",
    ],
    images: [
      "/images/hebergements/villa-palmeraie-dune-1.jpg",
      "/images/hebergements/villa-palmeraie-dune-2.jpg",
      "/images/hebergements/villa-palmeraie-dune-3.jpg",
    ],
  },
  {
    slug: "appartement-gueliz-loft",
    name: "Appartement Guéliz Loft",
    category: "appartement",
    categoryLabel: "Appartement moderne",
    location: "Guéliz, ville nouvelle",
    pricePerNight: 650,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.7,
    reviews: 152,
    shortDescription:
      "Loft moderne au cœur de Guéliz, proche restaurants et boutiques, terrasse avec vue ville.",
    description:
      "Situé dans le quartier animé de Guéliz, cet appartement loft combine design contemporain et fonctionnalité. À proximité immédiate des meilleures adresses gastronomiques et boutiques de Marrakech, il constitue une base idéale pour explorer la ville nouvelle comme la médina, accessible en quelques minutes.",
    amenities: [
      "Terrasse avec vue",
      "Climatisation",
      "Wifi haut débit",
      "Cuisine équipée",
      "Parking sécurisé",
      "Salle de sport de l'immeuble",
    ],
    images: [
      "/images/hebergements/appartement-gueliz-loft-1.jpg",
      "/images/hebergements/appartement-gueliz-loft-2.jpg",
      "/images/hebergements/appartement-gueliz-loft-3.jpg",
    ],
  },
  {
    slug: "appartement-medina-suite",
    name: "Appartement Médina Suite",
    category: "appartement",
    categoryLabel: "Appartement moderne",
    location: "Médina, proche Koutoubia",
    pricePerNight: 780,
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.8,
    reviews: 76,
    shortDescription:
      "Suite raffinée à deux pas de la Koutoubia, idéale pour un séjour romantique ou en solo.",
    description:
      "Cette suite lumineuse allie le charme de la médina à un confort résolument contemporain. Sa situation, à quelques minutes à pied de la mosquée Koutoubia et de la place Jemaa el-Fna, en fait un pied-à-terre de choix pour découvrir Marrakech à pied, tout en profitant d'un intérieur cocooning et silencieux.",
    amenities: [
      "Climatisation",
      "Wifi haut débit",
      "Kitchenette équipée",
      "Petit-déjeuner sur demande",
      "Conciergerie",
    ],
    images: [
      "/images/hebergements/appartement-medina-suite-1.jpg",
      "/images/hebergements/appartement-medina-suite-2.jpg",
      "/images/hebergements/appartement-medina-suite-3.jpg",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Camille & Thomas",
    origin: "France",
    rating: 5,
    text: "Un séjour absolument parfait au Riad Al Manar. L'équipe a organisé notre transfert et chaque détail de notre séjour. Tout était fluide du début à la fin.",
    service: "Riad Al Manar",
  },
  {
    name: "Marco Bellini",
    origin: "Italie",
    rating: 5,
    text: "La Villa Atlas View dépasse toutes les photos. Piscine magnifique, personnel aux petits soins : un des meilleurs souvenirs de notre voyage au Maroc.",
    service: "Villa Atlas View",
  },
  {
    name: "Sarah Al-Farsi",
    origin: "Émirats Arabes Unis",
    rating: 5,
    text: "Réservation simple, communication rapide en anglais. Le riad était d'un raffinement incroyable, je recommande sans hésiter.",
    service: "Riad Jasmin",
  },
  {
    name: "Julien Moreau",
    origin: "Belgique",
    rating: 4,
    text: "Excellent rapport qualité-prix pour l'appartement à Guéliz, très bien situé, idéal pour découvrir Marrakech en famille.",
    service: "Appartement Guéliz Loft",
  },
  {
    name: "Amira & Karim Haddad",
    origin: "Qatar",
    rating: 5,
    text: "Un niveau de service digne des plus grands palaces. Le majordome et le chef privé ont rendu notre réunion de famille inoubliable, chaque détail était pensé.",
    service: "Palais Riyad El Fassia",
  },
  {
    name: "Laura Bianchi",
    origin: "Suisse",
    rating: 5,
    text: "La villa était un havre de paix : sauna, massage, piscine chauffée toute la semaine. Exactement la coupure dont nous avions besoin.",
    service: "Villa Palmeraie Dune",
  },
  {
    name: "David & Rachel Cohen",
    origin: "Canada",
    rating: 5,
    text: "Suite lumineuse, ultra bien placée à deux pas de la Koutoubia. Communication impeccable avant et pendant le séjour, on recommande sans hésiter.",
    service: "Appartement Médina Suite",
  },
  {
    name: "Sophie Lambert",
    origin: "France",
    rating: 5,
    text: "Nous étions 14 pour un anniversaire en famille : le Palais Riyad El Fassia a géré l'hébergement, les repas et même les activités sur place. Un professionnalisme remarquable du début à la fin.",
    service: "Palais Riyad El Fassia",
  },
  {
    name: "Ahmed Ben Youssef",
    origin: "Maroc",
    rating: 5,
    text: "En déplacement professionnel régulier à Marrakech, j'apprécie la réactivité de l'équipe et la constance du service à chaque séjour à l'appartement de Guéliz.",
    service: "Appartement Guéliz Loft",
  },
  {
    name: "Isabella Rossi",
    origin: "Italie",
    rating: 4,
    text: "Séjour entre amies très réussi à la Villa Atlas View. La vue sur l'Atlas au petit-déjeuner restera un souvenir marquant. Petit bémol sur le wifi, vite résolu par l'équipe sur place.",
    service: "Villa Atlas View",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Comment réserver un riad, un palais, une villa ou un appartement ?",
    answer:
      "Vous pouvez réserver directement via le formulaire de contact du site, par WhatsApp ou par téléphone. Nous confirmons la disponibilité sous 24h et vous envoyons un devis détaillé avant toute demande d'acompte.",
  },
  {
    question: "Les transferts aéroport sont-ils inclus ?",
    answer:
      "Le transfert aéroport est inclus pour la plupart de nos riads, palais et villas. Il peut être ajouté en option pour nos appartements sur simple demande.",
  },
  {
    question: "Quels sont les horaires d'arrivée et de départ ?",
    answer:
      "L'arrivée se fait généralement à partir de 15h et le départ avant midi. Des arrivées anticipées ou départs tardifs peuvent être organisés selon la disponibilité du logement.",
  },
  {
    question: "Le petit-déjeuner et le ménage sont-ils inclus ?",
    answer:
      "Cela dépend de l'hébergement : la plupart de nos riads et palais incluent le petit-déjeuner et un service de ménage quotidien. Consultez la fiche de chaque bien pour le détail exact des prestations incluses.",
  },
  {
    question: "Puis-je annuler ou modifier ma réservation ?",
    answer:
      "Les modifications sont possibles jusqu'à 48h avant la date prévue, sous réserve de disponibilité. Consultez nos conditions générales ou contactez notre équipe pour toute demande spécifique.",
  },
];
