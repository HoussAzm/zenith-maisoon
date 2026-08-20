"use client";

import { useEffect, useRef, useState } from "react";

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDisplay(d: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

function buildMonthGrid(viewMonth: Date) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  // Monday-first offset (0 = Monday ... 6 = Sunday)
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function DatePicker({
  label,
  name,
  minDate,
  defaultValue,
}: {
  label: string;
  name: string;
  minDate?: Date;
  defaultValue?: Date;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(defaultValue ?? null);
  const [viewMonth, setViewMonth] = useState(() => startOfDay(defaultValue ?? new Date()));
  const containerRef = useRef<HTMLDivElement>(null);

  const floor = minDate ? startOfDay(minDate) : startOfDay(new Date());

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const cells = buildMonthGrid(viewMonth);
  const monthLabel = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(
    viewMonth
  );

  return (
    <div ref={containerRef} className="relative text-left">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-400">
        {label}
      </span>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-ink-100 bg-sand-50 px-3.5 py-2.5 text-left text-sm text-ink-900 outline-none transition focus:border-clay-500 focus:ring-1 focus:ring-clay-500"
      >
        <span className={selected ? "text-ink-900" : "text-ink-400"}>
          {selected ? formatDisplay(selected) : "jj/mm/aaaa"}
        </span>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4 shrink-0 text-ink-400">
          <rect x="3" y="4" width="14" height="13" rx="2" />
          <path strokeLinecap="round" d="M3 8h14M7 2.5v3M13 2.5v3" />
        </svg>
      </button>
      <input type="hidden" name={name} value={selected ? toISODate(selected) : ""} />

      {open && (
        <div
          role="dialog"
          className="absolute left-0 top-full z-20 mt-2 w-72 rounded-2xl border border-ink-100 bg-white p-4 shadow-card"
        >
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              aria-label="Mois précédent"
              onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-600 transition hover:bg-sand-100"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l-6 6 6 6" />
              </svg>
            </button>
            <span className="font-display text-sm font-bold capitalize text-ink-900">{monthLabel}</span>
            <button
              type="button"
              aria-label="Mois suivant"
              onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-600 transition hover:bg-sand-100"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-ink-400">
            {WEEKDAYS.map((d, i) => (
              <span key={`${d}-${i}`}>{d}</span>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <span key={i} />;
              const disabled = day < floor;
              const isSelected = selected && toISODate(day) === toISODate(selected);
              const isToday = toISODate(day) === toISODate(new Date());
              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    setSelected(day);
                    setOpen(false);
                  }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs transition ${
                    isSelected
                      ? "bg-clay-500 font-semibold text-white"
                      : disabled
                        ? "cursor-not-allowed text-ink-100"
                        : isToday
                          ? "font-semibold text-clay-600 hover:bg-clay-500/10"
                          : "text-ink-800 hover:bg-sand-100"
                  }`}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
