export type PropertyCategory = "palais" | "riad" | "villa" | "appartement";

export interface Property {
  slug: string;
  name: string;
  category: PropertyCategory;
  pricePerNight: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  images: string[];
}

export type ReviewPlatform = "airbnb" | "booking" | "agoda";

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  service: string;
  platform: ReviewPlatform;
  /** Booking.com-style score out of 10 (e.g. 9.6). Only used when platform is "booking". */
  score?: number;
}

export interface FAQ {
  id: string;
}
