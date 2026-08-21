import { formatReviewScore, reviewScoreLabel } from "@/lib/reviewScore";

export default function AgodaScore({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-2xl font-bold leading-none text-[#1565C0]">
        {formatReviewScore(score)}
      </span>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-ink-900">{reviewScoreLabel(score)}</div>
        <div className="text-[10px] text-ink-400">Note du séjour</div>
      </div>
    </div>
  );
}
