import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");
  const tCommon = await getTranslations("common");

  const contactPoints = [
    {
      title: t("coords.phone"),
      value: siteConfig.phoneDisplay,
      href: whatsappLink(),
    },
    {
      title: t("coords.email"),
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      title: t("coords.address"),
      value: siteConfig.address,
    },
    {
      title: t("coords.availability"),
      value: tCommon("hours"),
    },
  ];

  return (
    <>
      <Hero
        compact
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/hero/hero-contact.jpg"
        imageLabel={t("hero.imageLabel")}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow={t("form.eyebrow")}
              title={t("form.title")}
              description={t("form.description")}
            />
            <div className="mt-10">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-7">
              <h3 className="font-display text-lg text-ink-900">{t("coords.title")}</h3>
              <ul className="mt-5 space-y-5">
                {contactPoints.map((c) => (
                  <li key={c.title}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-clay-500">
                      {c.title}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink-800 hover:text-clay-600"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm text-ink-800">{c.value}</div>
                    )}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(tCommon("whatsappStay"))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block rounded-full bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                {t("coords.whatsappCta")}
              </a>
            </div>

            <div className="mt-6 h-72 w-full overflow-hidden rounded-2xl border border-ink-100">
              <iframe
                title={t("coords.mapTitle")}
                src="https://www.google.com/maps?q=Marrakech,Morocco&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-sand-100 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
          <div className="mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
