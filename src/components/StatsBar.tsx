"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { formatStat } from "@/lib/format";

const stats = [
  { key: "experience", target: 12, decimals: 0, suffix: "+" },
  { key: "rating", target: 4.9, decimals: 1, suffix: "/5" },
  { key: "stays", target: 3000, decimals: 0, suffix: "+" },
  { key: "support", target: 24, decimals: 0, suffix: "/7" },
] as const;

const DURATION = 1800;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function StatsBar() {
  const t = useTranslations("statsBar");
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValues(stats.map((s) => s.target));
      return;
    }

    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = easeOutExpo(progress);
      setValues(stats.map((s) => s.target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={stat.key} className="text-center">
          <div className="font-display text-3xl font-extrabold tabular-nums text-clay-500 sm:text-4xl">
            {formatStat(values[i], locale, stat.decimals)}
            {stat.suffix}
          </div>
          <div className="mt-2 text-xs uppercase tracking-wide text-ink-400 sm:text-sm">
            {t(stat.key)}
          </div>
        </div>
      ))}
    </div>
  );
}
