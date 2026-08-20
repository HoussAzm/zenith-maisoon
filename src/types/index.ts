export type PropertyCategory = "palais" | "riad" | "villa" | "appartement";

export interface Property {
  slug: string;
  name: string;
  category: PropertyCategory;
  categoryLabel: string;
  location: string;
  pricePerNight: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  shortDescription: string;
  description: string;
  amenities: string[];
  images: string[];
}

export interface Testimonial {
  name: string;
  origin: string;
  rating: number;
  text: string;
  service: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
