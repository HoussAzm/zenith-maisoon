interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left mx-0"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-clay-500">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl ${
          light ? "text-sand-50" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-sand-100/75" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
