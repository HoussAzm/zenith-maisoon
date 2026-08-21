import type { Testimonial } from "@/types";
import PlatformBadge from "./PlatformBadge";
import BookingScore from "./BookingScore";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
      <div className="flex items-center justify-between gap-2">
        {testimonial.platform === "booking" && testimonial.score !== undefined ? (
          <BookingScore score={testimonial.score} />
        ) : (
          <div className="flex items-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill={i < testimonial.rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={1}
                className="h-4 w-4"
              >
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
              </svg>
            ))}
          </div>
        )}
        <PlatformBadge platform={testimonial.platform} />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-500/10 font-display text-sm text-clay-600">
          {initials(testimonial.name)}
        </span>
        <div>
          <div className="text-sm font-semibold text-ink-900">{testimonial.name}</div>
          <div className="text-xs text-ink-400">{testimonial.origin}</div>
          <div className="text-xs text-clay-600">{testimonial.service}</div>
        </div>
      </div>
    </div>
  );
}
