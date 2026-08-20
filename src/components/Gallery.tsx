"use client";

import { useMemo, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

export interface GalleryItem {
  src: string;
  label: string;
  category: string;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("Tous");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "Tous" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              active === cat
                ? "border-clay-600 bg-clay-600 text-white"
                : "border-ink-100 bg-white text-ink-600 hover:border-clay-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setLightbox(item)}
            className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft ${
              i % 5 === 0 ? "sm:aspect-square lg:row-span-2 lg:aspect-[4/5]" : ""
            }`}
          >
            <ImageWithFallback
              src={item.src}
              alt={item.label}
              label={item.label}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent px-4 py-3 text-left text-xs font-medium text-sand-50 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-sand-100/30 text-sand-50"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={lightbox.src}
              alt={lightbox.label}
              label={lightbox.label}
              fill
              sizes="90vw"
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
