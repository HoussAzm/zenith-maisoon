type CellValue = true | false | string;

const rows: { label: string; us: CellValue; diy: CellValue; hotel: CellValue }[] = [
  {
    label: "Sélection de palais, riads, villas et appartements vérifiés",
    us: true,
    diy: "Qualité variable, difficile à vérifier",
    hotel: false,
  },
  {
    label: "Interlocuteur unique du début à la fin du séjour",
    us: true,
    diy: false,
    hotel: "Seulement pour l'hôtel",
  },
  {
    label: "Transfert aéroport inclus",
    us: true,
    diy: false,
    hotel: "Souvent en supplément",
  },
  {
    label: "Conciergerie et service de ménage inclus",
    us: true,
    diy: false,
    hotel: true,
  },
  {
    label: "Assistance locale 24/7, en français & anglais",
    us: true,
    diy: false,
    hotel: "Variable selon l'établissement",
  },
  {
    label: "Prix transparent, sans frais cachés",
    us: true,
    diy: "Frais de service variables",
    hotel: "Taxes souvent en supplément",
  },
];

function Cell({ value }: { value: true | string | false }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-palm-500/15 text-palm-600">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-3.5 w-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5l3.5 3.5L16 5.5" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-ink-400">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-3.5 w-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5l10 10M15 5L5 15" />
        </svg>
      </span>
    );
  }
  return <span className="text-xs leading-snug text-ink-400">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <div>
      <p className="mb-3 flex items-center gap-1.5 text-xs text-ink-400 sm:hidden">
        Faites glisser pour comparer
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12m0 0l-4-4m4 4l-4 4" />
        </svg>
      </p>
      <div className="relative overflow-hidden rounded-2xl border border-ink-100 shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink-100">
                <th className="sticky left-0 z-10 w-[42%] bg-white px-4 py-4 text-sm font-medium text-ink-400 sm:w-2/5 sm:px-6 sm:py-5">
                  &nbsp;
                </th>
                <th className="bg-clay-500/5 px-4 py-4 sm:px-6 sm:py-5">
                  <span className="font-display text-sm font-bold text-clay-600 sm:text-base">
                    Zénith Maison
                  </span>
                </th>
                <th className="px-4 py-4 text-xs font-semibold text-ink-600 sm:px-6 sm:py-5 sm:text-sm">
                  Vous-même (plusieurs sites)
                </th>
                <th className="px-4 py-4 text-xs font-semibold text-ink-600 sm:px-6 sm:py-5 sm:text-sm">
                  Hôtel classique
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-ink-100 last:border-0">
                  <td className="sticky left-0 z-10 bg-white px-4 py-4 text-sm text-ink-800 sm:px-6">
                    {row.label}
                  </td>
                  <td className="bg-clay-500/5 px-4 py-4 sm:px-6">
                    <Cell value={row.us} />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <Cell value={row.diy} />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <Cell value={row.hotel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
      </div>
    </div>
  );
}
