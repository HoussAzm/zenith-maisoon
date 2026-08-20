const stats = [
  { value: "12+", label: "Ans d'expérience à Marrakech" },
  { value: "4.9/5", label: "Note moyenne clients" },
  { value: "3 000+", label: "Séjours & sorties organisés" },
  { value: "24/7", label: "Assistance disponible" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-display text-3xl font-extrabold text-clay-500 sm:text-4xl">
            {stat.value}
          </div>
          <div className="mt-2 text-xs uppercase tracking-wide text-ink-400 sm:text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
