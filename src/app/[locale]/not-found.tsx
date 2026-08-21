import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-6xl text-clay-500">{t("code")}</span>
      <h1 className="mt-4 font-display text-2xl text-ink-900">{t("title")}</h1>
      <p className="mt-3 text-sm text-ink-600">{t("text")}</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink-950 px-7 py-3 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
