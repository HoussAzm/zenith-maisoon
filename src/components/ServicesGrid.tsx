import Link from "next/link";

const categories = [
  {
    href: "/hebergements?category=palais",
    title: "Palais",
    description:
      "D'anciennes demeures royales restaurées, pour des séjours en grand groupe avec service de majordome et chef privé.",
    icon: (
      <path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6M9 10h.01M12 10h.01M15 10h.01" />
    ),
  },
  {
    href: "/hebergements?category=riad",
    title: "Riads",
    description:
      "Le charme intact de la médina traditionnelle : patios en zellige, terrasses et décoration artisanale.",
    icon: (
      <path d="M3 11.5L12 4l9 7.5M5 10v9.5a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
    ),
  },
  {
    href: "/hebergements?category=villa",
    title: "Villas",
    description:
      "De grands espaces contemporains avec piscine et jardin privé, idéaux pour les séjours en famille ou entre amis.",
    icon: (
      <path d="M4 21V9l8-5 8 5v12M8 21v-8h8v8M4 21h16" />
    ),
  },
  {
    href: "/hebergements?category=appartement",
    title: "Appartements",
    description:
      "Des adresses modernes à Guéliz ou dans la médina, parfaites pour un séjour en solo, en couple ou entre amis.",
    icon: (
      <path d="M4 21V4h16v17M9 21v-5h6v5M8 8h1M8 12h1M15 8h1M15 12h1" />
    ),
  },
];

export default function ServicesGrid() {
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
          <h3 className="mt-6 font-display text-xl text-ink-900">{category.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">{category.description}</p>
          <span className="mt-6 text-sm font-semibold text-clay-600">
            Découvrir →
          </span>
        </Link>
      ))}
    </div>
  );
}
