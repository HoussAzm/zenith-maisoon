import { useTranslations } from "next-intl";
import { formatReviewScore, reviewScoreLabelKey } from "@/lib/reviewScore";

export default function BookingScore({ score }: { score: number }) {
  const t = useTranslations("reviewScore");

  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#003580] text-sm font-bold text-white">
        {formatReviewScore(score)}
      </span>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-ink-900">{t(reviewScoreLabelKey(score))}</div>
        <div className="text-[10px] text-ink-400">{t("noteLabel")}</div>
      </div>
    </div>
  );
}
