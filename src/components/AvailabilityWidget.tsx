"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import { useRouter } from "@/i18n/navigation";
import DatePicker from "./DatePicker";

const MAX_GUESTS = 15;

export default function AvailabilityWidget() {
  const t = useTranslations("availabilityWidget");
  const router = useRouter();
  const [guests, setGuests] = useState(2);
  const guestsError = guests > MAX_GUESTS;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (guestsError) return;

    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.set("service", "hebergement");

    const checkin = String(data.get("checkin") ?? "");
    const checkout = String(data.get("checkout") ?? "");
    if (checkin && checkout) params.set("dates", `${checkin}${t("dateRangeJoin")}${checkout}`);
    params.set("guests", String(guests));

    router.push(`/contact?${params.toString()}`);
  }

  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-4xl px-5 sm:-mt-20 sm:px-8">
      <div className="rounded-2xl bg-white p-4 shadow-card sm:p-5">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 items-end gap-3 sm:grid-cols-[repeat(3,1fr)_auto] sm:gap-4"
        >
          <DatePicker label={t("arrival")} name="checkin" />
          <DatePicker label={t("departure")} name="checkout" />
          <div>
            <label className="block text-left">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-400">
                {t("travelers")}
              </span>
              <input
                name="guests"
                type="number"
                min={1}
                max={MAX_GUESTS}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                aria-invalid={guestsError}
                className={`w-full rounded-xl border bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition focus:ring-1 ${
                  guestsError
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                    : "border-ink-100 focus:border-clay-500 focus:ring-clay-500"
                }`}
              />
            </label>
            {guestsError && (
              <p className="mt-1 text-xs font-medium text-red-600">{t("maxGuestsError")}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-xl bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={guestsError}
          >
            {t("checkAvailability")}
          </button>
        </form>
      </div>
    </div>
  );
}
