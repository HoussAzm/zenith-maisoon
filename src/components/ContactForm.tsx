"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const serviceOptions = [
  "Riad",
  "Palais",
  "Villa",
  "Appartement",
  "Je ne sais pas encore",
];

const serviceParamMap: Record<string, string> = {
  hebergement: serviceOptions[0],
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const prefilledService = serviceParamMap[searchParams.get("service") ?? ""] ?? serviceOptions[0];
  const prefilledDates = searchParams.get("dates") ?? "";
  const prefilledGuests = searchParams.get("guests");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }
    setError("");

    const subject = `Demande de réservation — ${data.get("service")}`;
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${data.get("phone") ?? "-"}`,
      `Service souhaité : ${data.get("service")}`,
      `Dates envisagées : ${data.get("dates") ?? "-"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-800">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-800">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder="vous@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-800">
            Téléphone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder="+212 ..."
          />
        </div>
        <div>
          <label htmlFor="dates" className="mb-1.5 block text-sm font-medium text-ink-800">
            Dates envisagées
          </label>
          <input
            id="dates"
            name="dates"
            type="text"
            defaultValue={prefilledDates}
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder="Ex : 12 au 18 septembre"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-800">
          Service souhaité
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
          defaultValue={prefilledService}
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={prefilledGuests ? `Nombre de personnes : ${prefilledGuests}\n` : undefined}
          className="w-full resize-none rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
          placeholder="Décrivez votre projet de séjour, le nombre de personnes, vos envies d'activités..."
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {submitted && (
        <p className="rounded-xl bg-palm-500/10 px-4 py-3 text-sm text-palm-700">
          Merci ! Votre client de messagerie va s&apos;ouvrir pour envoyer votre demande.
          Vous pouvez aussi nous écrire directement sur WhatsApp pour une réponse plus rapide.
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600 sm:w-auto"
      >
        Envoyer la demande
      </button>
    </form>
  );
}
