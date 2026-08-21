import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ImageWithFallback from "@/components/ImageWithFallback";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";
import { routing } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    properties.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};
  const t = await getTranslations({ locale, namespace: `properties.${slug}` });
  return {
    title: property.name,
    description: t("shortDescription"),
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const t = await getTranslations(`properties.${slug}`);
  const tDetail = await getTranslations("propertyDetail");
  const tCommon = await getTranslations("common");

  const related = properties
    .filter((p) => p.slug !== property.slug && p.category === property.category)
    .slice(0, 3);

  const location = t("location");
  const amenities = t.raw("amenities") as string[];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <nav className="mb-6 text-sm text-ink-400">
        <Link href="/hebergements" className="hover:text-clay-600">
          {tDetail("breadcrumb")}
        </Link>{" "}
        / <span className="text-ink-600">{property.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-2 overflow-hidden rounded-2xl sm:h-[520px] sm:grid-cols-3 sm:grid-rows-2">
        <div className="relative h-72 sm:col-span-2 sm:row-span-2 sm:h-full">
          <ImageWithFallback
            src={property.images[0]}
            alt={property.name}
            label={tDetail("mainPhotoLabel", { name: property.name })}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-40 sm:h-full">
          <ImageWithFallback
            src={property.images[1] ?? property.images[0]}
            alt={tDetail("photoLabel", { name: property.name, n: 2 })}
            label={tDetail("photoLabel", { name: property.name, n: 2 })}
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-40 sm:h-full">
          <ImageWithFallback
            src={property.images[2] ?? property.images[0]}
            alt={tDetail("photoLabel", { name: property.name, n: 3 })}
            label={tDetail("photoLabel", { name: property.name, n: 3 })}
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-500">
            {t("categoryLabel")}
          </span>
          <h1 className="mt-2 font-display text-3xl text-ink-900 sm:text-4xl">
            {property.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-400">
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold-500">
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
              </svg>
              {property.rating} ({property.reviews} {tCommon("reviews")})
            </span>
            <span>{location}</span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-ink-100 bg-white p-6 text-center sm:w-fit sm:grid-cols-3 sm:gap-10">
            <div>
              <div className="font-display text-xl text-ink-900">{property.capacity}</div>
              <div className="text-xs text-ink-400">{tDetail("travelers")}</div>
            </div>
            <div>
              <div className="font-display text-xl text-ink-900">{property.bedrooms}</div>
              <div className="text-xs text-ink-400">{tDetail("bedrooms")}</div>
            </div>
            <div>
              <div className="font-display text-xl text-ink-900">{property.bathrooms}</div>
              <div className="text-xs text-ink-400">{tDetail("bathrooms")}</div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl text-ink-900">{tDetail("descriptionTitle")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{t("description")}</p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl text-ink-900">{tDetail("amenitiesTitle")}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-ink-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-palm-500/10 text-palm-600">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl text-ink-900">
                {formatPrice(property.pricePerNight, locale)} MAD
              </span>
              <span className="text-sm text-ink-400">{tCommon("perNight")}</span>
            </div>
            <p className="mt-2 text-xs text-ink-400">{tDetail("priceNote")}</p>
            <a
              href={whatsappLink(tDetail("whatsappMessage", { name: property.name, location }))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-gold-500 px-6 py-3.5 text-center text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
            >
              {tDetail("bookWhatsapp")}
            </a>
            <Link
              href="/contact"
              className="mt-3 block rounded-full border border-ink-900 px-6 py-3.5 text-center text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-sand-50"
            >
              {tDetail("requestQuote")}
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-ink-900">{tDetail("alsoLike")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
