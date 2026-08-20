"use client";

import { useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import type { Property, PropertyCategory } from "@/types";

const filters: { value: PropertyCategory | "tous"; label: string }[] = [
  { value: "tous", label: "Tous" },
  { value: "palais", label: "Palais" },
  { value: "riad", label: "Riads" },
  { value: "villa", label: "Villas" },
  { value: "appartement", label: "Appartements" },
];

const categoryValues = filters.map((f) => f.value);

export default function PropertyListing({
  properties,
  initialCategory,
}: {
  properties: Property[];
  initialCategory?: string;
}) {
  const [active, setActive] = useState<PropertyCategory | "tous">(
    categoryValues.includes(initialCategory as PropertyCategory)
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
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              active === f.value
                ? "border-clay-600 bg-clay-600 text-white"
                : "border-ink-100 bg-white text-ink-600 hover:border-clay-300"
            }`}
          >
            {f.label}
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
