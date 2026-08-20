"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-base text-ink-900">{faq.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className={`h-5 w-5 shrink-0 text-clay-500 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-ink-600">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
