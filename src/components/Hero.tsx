import { Link } from "@/i18n/navigation";
import ImageWithFallback from "./ImageWithFallback";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageLabel?: string;
  video?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  compact?: boolean;
}

export default function Hero({
  eyebrow,
  title,
  description,
  image,
  imageLabel,
  video,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative w-full overflow-hidden ${compact ? "h-[52vh] min-h-[420px]" : "h-[92vh] min-h-[620px]"}`}>
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={image}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <ImageWithFallback
          src={image}
          alt={title}
          label={imageLabel ?? title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/10" />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-clay-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {eyebrow}
        </span>
        <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-sand-50 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/85 sm:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-clay-600"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-sand-100/40 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:border-sand-100 hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
