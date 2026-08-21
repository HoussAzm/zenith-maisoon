import { useTranslations } from "next-intl";
import { formatReviewScore, reviewScoreLabelKey } from "@/lib/reviewScore";

export default function AgodaScore({ score }: { score: number }) {
  const t = useTranslations("reviewScore");

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-2xl font-bold leading-none text-[#1565C0]">
        {formatReviewScore(score)}
      </span>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-ink-900">{t(reviewScoreLabelKey(score))}</div>
        <div className="text-[10px] text-ink-400">{t("noteLabel")}</div>
      </div>
    </div>
  );
}
