"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const serviceOptions = [
    { value: t("serviceOptions.riad"), label: t("serviceOptions.riad") },
    { value: t("serviceOptions.palais"), label: t("serviceOptions.palais") },
    { value: t("serviceOptions.villa"), label: t("serviceOptions.villa") },
    { value: t("serviceOptions.appartement"), label: t("serviceOptions.appartement") },
    { value: t("serviceOptions.unknown"), label: t("serviceOptions.unknown") },
  ];

  const prefilledService =
    searchParams.get("service") === "hebergement"
      ? serviceOptions[0].value
      : serviceOptions[0].value;
  const prefilledDates = searchParams.get("dates") ?? "";
  const prefilledGuests = searchParams.get("guests");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError(t("errorRequired"));
      return;
    }
    setError("");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: data.get("phone"),
          service: data.get("service"),
          dates: data.get("dates"),
          message,
        }),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => null);
        throw new Error(result?.error ?? t("errorSend"));
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(t("errorSend"));
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-800">
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder={t("namePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-800">
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder={t("emailPlaceholder")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-800">
            {t("phoneLabel")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder={t("phonePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="dates" className="mb-1.5 block text-sm font-medium text-ink-800">
            {t("datesLabel")}
          </label>
          <input
            id="dates"
            name="dates"
            type="text"
            defaultValue={prefilledDates}
            className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
            placeholder={t("datesPlaceholder")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-800">
          {t("serviceLabel")}
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
          defaultValue={prefilledService}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={
            prefilledGuests ? `${t("guestsCountPrefix")}${prefilledGuests}\n` : undefined
          }
          className="w-full resize-none rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {submitted && (
        <p className="rounded-xl bg-palm-500/10 px-4 py-3 text-sm text-palm-700">
          {t("successMessage")}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
