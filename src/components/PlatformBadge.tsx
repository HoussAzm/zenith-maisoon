import type { ReviewPlatform } from "@/types";
import AirbnbLogo from "./AirbnbLogo";
import AgodaLogo from "./AgodaLogo";

const platforms: Record<ReviewPlatform, { label: string; letter: string; bg: string; fg: string }> = {
  airbnb: { label: "Airbnb", letter: "a", bg: "#FF5A5F", fg: "#ffffff" },
  booking: { label: "Booking.com", letter: "B", bg: "#003580", fg: "#ffffff" },
  agoda: { label: "Agoda", letter: "A", bg: "#5C0F32", fg: "#ffffff" },
};

export default function PlatformBadge({ platform }: { platform: ReviewPlatform }) {
  const p = platforms[platform];

  if (platform === "agoda") {
    return (
      <span
        title={`Avis publié sur ${p.label}`}
        className="inline-flex items-center rounded-full border border-ink-100 bg-white/90 px-2.5 py-1 shadow-sm"
      >
        <AgodaLogo className="h-3.5 w-auto" />
      </span>
    );
  }

  return (
    <span
      title={`Avis publié sur ${p.label}`}
      className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-white/90 py-1 pl-1 pr-2.5 shadow-sm"
    >
      {platform === "airbnb" ? (
        <AirbnbLogo className="h-4 w-4" style={{ color: p.bg }} />
      ) : (
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold leading-none"
          style={{ backgroundColor: p.bg, color: p.fg }}
        >
          {p.letter}
        </span>
      )}
      <span className="text-[10px] font-semibold text-ink-600">{p.label}</span>
    </span>
  );
}
