import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ImageWithFallback from "./ImageWithFallback";
import { formatPrice } from "@/lib/format";
import type { Property } from "@/types";

export default function PropertyCard({ property }: { property: Property }) {
  const locale = useLocale();
  const t = useTranslations(`properties.${property.slug}`);
  const tCommon = useTranslations("common");

  return (
    <Link
      href={`/hebergements/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <ImageWithFallback
          src={property.images[0]}
          alt={property.name}
          label={property.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-gold-300 backdrop-blur-sm">
          {t("categoryLabel")}
        </span>
        {property.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-ink-950">
            {tCommon("featured")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-ink-900">{property.name}</h3>
          <div className="flex shrink-0 items-center gap-1 text-sm text-ink-600">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold-500">
              <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
            </svg>
            {property.rating}
          </div>
        </div>
        <p className="mt-1 text-sm text-ink-400">{t("location")}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-600">
          {t("shortDescription")}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-ink-400">
          <span>
            {property.capacity} {tCommon("guestsShort")}
          </span>
          <span>
            {property.bedrooms} {tCommon("bedroomsShort")}
          </span>
          <span>
            {property.bathrooms} {tCommon("bathroomsShort")}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
          <div>
            <span className="font-display text-xl text-ink-900">
              {formatPrice(property.pricePerNight, locale)} MAD
            </span>
            <span className="text-sm text-ink-400"> {tCommon("perNight")}</span>
          </div>
          <span className="text-sm font-semibold text-clay-600 transition group-hover:text-clay-700">
            {tCommon("viewDetail")}
          </span>
        </div>
      </div>
    </Link>
  );
}
