import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PropertyListing from "@/components/PropertyListing";
import { properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Riads, Villas & Appartements à Marrakech",
  description:
    "Découvrez notre sélection de riads, villas et appartements de standing à louer à Marrakech, avec piscine, conciergerie et service haut de gamme.",
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function HebergementsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  return (
    <>
      <Hero
        compact
        eyebrow="Hébergements"
        title="Riads, Villas & Appartements"
        description="Une sélection exclusive d'adresses à Marrakech, de la médina traditionnelle aux villas contemporaines de la Palmeraie."
        image="/images/hero/hero-hebergements.jpg"
        imageLabel="Piscine de villa à Marrakech"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Nos adresses"
          title="Choisissez votre séjour idéal"
          description="Filtrez par type d'hébergement pour trouver le riad, la villa ou l'appartement qui correspond à votre séjour."
        />
        <div className="mt-14">
          <PropertyListing properties={properties} initialCategory={category} />
        </div>
      </section>
    </>
  );
}
