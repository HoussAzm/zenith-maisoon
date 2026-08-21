import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import { properties } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "galleryPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function GaleriePage() {
  const t = await getTranslations("galleryPage");
  const accommodationsLabel = t("categories.accommodations");

  const galleryItems: GalleryItem[] = [
    ...properties.flatMap((p) =>
      p.images.map((src, i) => ({
        src,
        label: `${p.name}${i > 0 ? t("viewSuffix", { n: i + 1 }) : ""}`,
        category: accommodationsLabel,
      }))
    ),
    {
      src: "/images/gallery/marrakech-1.jpg",
      label: t("images.jemaaElFna"),
      category: t("categories.marrakech"),
    },
    {
      src: "/images/gallery/marrakech-2.jpg",
      label: t("images.medinaAlleys"),
      category: t("categories.marrakech"),
    },
    {
      src: "/images/gallery/marrakech-3.jpg",
      label: t("images.majorelleGardens"),
      category: t("categories.marrakech"),
    },
  ];

  return (
    <>
      <Hero
        compact
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/hero/hero-galerie.jpg"
        imageLabel={t("hero.imageLabel")}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          description={t("section.description")}
        />
        <div className="mt-14">
          <Gallery items={galleryItems} />
        </div>
      </section>
    </>
  );
}
