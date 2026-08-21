"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import PropertyCard from "./PropertyCard";
import type { Property, PropertyCategory } from "@/types";

const filterValues: (PropertyCategory | "tous")[] = ["tous", "palais", "riad", "villa", "appartement"];

export default function PropertyListing({
  properties,
  initialCategory,
}: {
  properties: Property[];
  initialCategory?: string;
}) {
  const t = useTranslations("accommodationsPage.filters");
  const [active, setActive] = useState<PropertyCategory | "tous">(
    filterValues.includes(initialCategory as PropertyCategory)
      ? (initialCategory as PropertyCategory)
      : "tous"
  );

  const filtered = useMemo(
    () => (active === "tous" ? properties : properties.filter((p) => p.category === active)),
    [active, properties]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filterValues.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              active === value
                ? "border-clay-600 bg-clay-600 text-white"
                : "border-ink-100 bg-white text-ink-600 hover:border-clay-300"
            }`}
          >
            {t(value === "tous" ? "all" : value)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </div>
  );
}
