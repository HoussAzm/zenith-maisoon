"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import DatePicker from "./DatePicker";

export default function AvailabilityWidget() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.set("service", "hebergement");

    const checkin = String(data.get("checkin") ?? "");
    const checkout = String(data.get("checkout") ?? "");
    if (checkin && checkout) params.set("dates", `${checkin} au ${checkout}`);
    params.set("guests", String(data.get("guests") ?? ""));

    router.push(`/contact?${params.toString()}`);
  }

  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-4xl px-5 sm:-mt-20 sm:px-8">
      <div className="rounded-2xl bg-white p-4 shadow-card sm:p-5">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 items-end gap-3 sm:grid-cols-[repeat(3,1fr)_auto] sm:gap-4"
        >
          <DatePicker label="Arrivée" name="checkin" />
          <DatePicker label="Départ" name="checkout" />
          <Field label="Voyageurs" name="guests" type="number" min={1} defaultValue={2} />

          <button
            type="submit"
            className="rounded-xl bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay-600"
          >
            Vérifier la disponibilité
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  min,
  defaultValue,
}: {
  label: string;
  name: string;
  type: "number";
  min?: number;
  defaultValue?: number;
}) {
  return (
    <label className="block text-left">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-400">
        {label}
      </span>
      <input
        name={name}
        type={type}
        min={min}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-ink-100 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
      />
    </label>
  );
}
