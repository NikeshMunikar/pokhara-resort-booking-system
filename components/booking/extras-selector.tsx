"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { extraServices } from "@/lib/data/extra-services";
import { cn } from "@/lib/utils";

interface ExtrasSelectorProps {
  selected: string[];
  onToggle: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export function ExtrasSelector({
  selected,
  onToggle,
  onBack,
  onContinue,
}: ExtrasSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {extraServices.map((extra) => {
          const active = selected.includes(extra.id);
          return (
            <button
              key={extra.id}
              type="button"
              onClick={() => onToggle(extra.id)}
              aria-pressed={active}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4 text-left transition-colors",
                active
                  ? "border-pine bg-pine/5"
                  : "border-line bg-surface hover:border-pine/40"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border",
                  active ? "border-pine bg-pine text-white" : "border-line"
                )}
              >
                {active && <Check className="h-3.5 w-3.5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-dusk">{extra.label}</p>
                  <p className="font-data text-xs text-pine">
                    NPR {extra.price.toLocaleString("en-US")}
                    {extra.priceType === "per-night" && (
                      <span className="text-stone"> /night</span>
                    )}
                  </p>
                </div>
                <p className="mt-1 text-xs text-stone">{extra.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  );
}
