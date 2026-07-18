"use client";

import { cn } from "@/lib/utils";

export type PriceBand = "any" | "under25" | "25to45" | "above45";

const bands: { id: PriceBand; label: string }[] = [
  { id: "any", label: "Any Price" },
  { id: "under25", label: "Under NPR 25,000" },
  { id: "25to45", label: "NPR 25,000–45,000" },
  { id: "above45", label: "NPR 45,000+" },
];

interface PriceRangeFilterProps {
  value: PriceBand;
  onChange: (value: PriceBand) => void;
}

export function PriceRangeFilter({ value, onChange }: PriceRangeFilterProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-dusk">Price Range</span>
      <div className="flex flex-wrap gap-2">
        {bands.map((band) => {
          const active = value === band.id;
          return (
            <button
              key={band.id}
              type="button"
              onClick={() => onChange(band.id)}
              aria-pressed={active}
              className={cn(
                "rounded-sm border px-3 py-2 text-xs font-medium transition-colors",
                active
                  ? "border-pine bg-pine text-white"
                  : "border-line bg-surface text-stone hover:border-pine/40 hover:text-dusk"
              )}
            >
              {band.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
