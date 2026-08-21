import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PropertyListing from "@/components/PropertyListing";
import { properties } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "accommodationsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function HebergementsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const t = await getTranslations("accommodationsPage");

  return (
    <>
      <Hero
        compact
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/hero/hero-hebergements.jpg"
        imageLabel={t("hero.imageLabel")}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          description={t("section.description")}
        />
        <div className="mt-14">
          <PropertyListing properties={properties} initialCategory={category} />
        </div>
      </section>
    </>
  );
}
