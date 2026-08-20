import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import { properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie photos",
  description: "Découvrez en images nos palais, riads, villas et appartements à Marrakech.",
};

const galleryItems: GalleryItem[] = [
  ...properties.flatMap((p) =>
    p.images.map((src, i) => ({
      src,
      label: `${p.name}${i > 0 ? ` — vue ${i + 1}` : ""}`,
      category: "Hébergements",
    }))
  ),
  { src: "/images/gallery/marrakech-1.jpg", label: "Place Jemaa el-Fna", category: "Marrakech" },
  { src: "/images/gallery/marrakech-2.jpg", label: "Ruelles de la médina", category: "Marrakech" },
  { src: "/images/gallery/marrakech-3.jpg", label: "Jardins Majorelle", category: "Marrakech" },
];

export default function GaleriePage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Galerie"
        title="Marrakech en images"
        description="Un aperçu de nos palais, riads, villas et appartements."
        image="/images/hero/hero-galerie.jpg"
        imageLabel="Zellige et architecture marocaine"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Explorez notre univers"
          description="Cliquez sur une photo pour l'agrandir. Filtrez par catégorie pour parcourir nos hébergements."
        />
        <div className="mt-14">
          <Gallery items={galleryItems} />
        </div>
      </section>
    </>
  );
}
