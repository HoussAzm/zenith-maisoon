export function reviewScoreLabel(score: number) {
  if (score >= 10) return "Exceptionnel";
  if (score >= 9) return "Superbe";
  if (score >= 8) return "Très bien";
  if (score >= 7) return "Bien";
  return "Sympa";
}

export function formatReviewScore(score: number) {
  return score.toFixed(1).replace(/\.0$/, "");
}
