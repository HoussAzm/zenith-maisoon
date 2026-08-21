function scoreLabel(score: number) {
  if (score >= 10) return "Exceptionnel";
  if (score >= 9) return "Superbe";
  if (score >= 8) return "Très bien";
  if (score >= 7) return "Bien";
  return "Sympa";
}

export default function BookingScore({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#003580] text-sm font-bold text-white">
        {score.toFixed(1).replace(/\.0$/, "")}
      </span>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-ink-900">{scoreLabel(score)}</div>
        <div className="text-[10px] text-ink-400">Note du séjour</div>
      </div>
    </div>
  );
}
