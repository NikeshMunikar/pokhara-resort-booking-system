import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Room & Dates", "Guest Info", "Extras", "Review"];

interface BookingStepperProps {
  currentStep: number;
}

export function BookingStepper({ currentStep }: BookingStepperProps) {
  return (
    <ol className="flex items-center">
      {steps.map((label, i) => {
        const stepNumber = i + 1;
        const completed = stepNumber < currentStep;
        const active = stepNumber === currentStep;
        const isLast = stepNumber === steps.length;

        return (
          <li key={label} className={cn("flex items-center", !isLast && "flex-1")}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                  completed
                    ? "border-pine bg-pine text-white"
                    : active
                      ? "border-pine text-pine"
                      : "border-line text-stone-light"
                )}
              >
                {completed ? <Check className="h-4 w-4" /> : stepNumber}
              </div>
              <span
                className={cn(
                  "hidden text-sm sm:inline",
                  active ? "font-medium text-dusk" : "text-stone"
                )}
              >
                {label}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "mx-3 h-px flex-1",
                  completed ? "bg-pine" : "bg-line"
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
