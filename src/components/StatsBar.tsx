import { useTranslations } from "next-intl";

const stats = [
  { value: "12+", key: "experience" },
  { value: "4.9/5", key: "rating" },
  { value: "3 000+", key: "stays" },
  { value: "24/7", key: "support" },
] as const;

export default function StatsBar() {
  const t = useTranslations("statsBar");

  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.key} className="text-center">
          <div className="font-display text-3xl font-extrabold text-clay-500 sm:text-4xl">
            {stat.value}
          </div>
          <div className="mt-2 text-xs uppercase tracking-wide text-ink-400 sm:text-sm">
            {t(stat.key)}
          </div>
        </div>
      ))}
    </div>
  );
}
