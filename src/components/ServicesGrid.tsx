import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const categories = [
  {
    href: "/hebergements?category=palais",
    key: "palais",
    icon: <path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6M9 10h.01M12 10h.01M15 10h.01" />,
  },
  {
    href: "/hebergements?category=riad",
    key: "riad",
    icon: <path d="M3 11.5L12 4l9 7.5M5 10v9.5a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />,
  },
  {
    href: "/hebergements?category=villa",
    key: "villa",
    icon: <path d="M4 21V9l8-5 8 5v12M8 21v-8h8v8M4 21h16" />,
  },
  {
    href: "/hebergements?category=appartement",
    key: "appartement",
    icon: <path d="M4 21V4h16v17M9 21v-5h6v5M8 8h1M8 12h1M15 8h1M15 12h1" />,
  },
] as const;

export default function ServicesGrid() {
  const t = useTranslations("servicesGrid");
  const tCommon = useTranslations("common");

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.href}
          href={category.href}
          className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-clay-400/40 hover:shadow-card"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-500/10 text-clay-600 transition group-hover:bg-clay-500 group-hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7">
              {category.icon}
            </svg>
          </span>
          <h3 className="mt-6 font-display text-xl text-ink-900">{t(`${category.key}.title`)}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {t(`${category.key}.description`)}
          </p>
          <span className="mt-6 text-sm font-semibold text-clay-600">{tCommon("discover")}</span>
        </Link>
      ))}
    </div>
  );
}
