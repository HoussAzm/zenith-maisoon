import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const rtlLocales: Locale[] = [];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
  localePrefix: "as-needed",
});
