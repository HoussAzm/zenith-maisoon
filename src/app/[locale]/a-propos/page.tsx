import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import ImageWithFallback from "@/components/ImageWithFallback";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AProposPage() {
  const t = await getTranslations("aboutPage");

  const values = [
    { title: t("values.authenticity.title"), text: t("values.authenticity.text") },
    { title: t("values.rigor.title"), text: t("values.rigor.text") },
    { title: t("values.availability.title"), text: t("values.availability.text") },
  ];

  return (
    <>
      <Hero
        compact
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/hero/hero-about.jpg"
        imageLabel={t("hero.imageLabel")}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-500">
              {t("story.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
              {t("story.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-600">
              {t("story.paragraph1", { siteName: siteConfig.name })}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              {t("story.paragraph2")}
            </p>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="/images/hero/about-team.jpg"
              alt={t("story.imageLabel")}
              label={t("story.imageLabel")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StatsBar />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading eyebrow={t("values.eyebrow")} title={t("values.title")} />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-ink-100 bg-white p-7">
              <h3 className="font-display text-lg text-ink-900">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <CTASection />
      </section>
    </>
  );
}
