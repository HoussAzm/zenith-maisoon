export function reviewScoreLabelKey(score: number) {
  if (score >= 10) return "exceptional";
  if (score >= 9) return "superb";
  if (score >= 8) return "veryGood";
  if (score >= 7) return "good";
  return "nice";
}

export function formatReviewScore(score: number) {
  return score.toFixed(1).replace(/\.0$/, "");
}
