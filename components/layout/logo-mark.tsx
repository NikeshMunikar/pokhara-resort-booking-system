import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  tone?: "dark" | "light";
}

/**
 * Mountain peak reflected into a rippled waterline — the brand's core
 * visual signature, echoed later in the contour-divider motif.
 */
export function LogoMark({ className, tone = "dark" }: LogoMarkProps) {
  const stroke = tone === "dark" ? "#10263D" : "#F5F6F1";
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 24 L14 10 L20 18 L26 8 L36 24"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M4 29 Q 10 25, 16 29 T 28 29 T 36 29"
        stroke="#C2872F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 33.5 Q 10 30.5, 16 33.5 T 28 33.5 T 36 33.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function Wordmark({ className, tone = "dark" }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "font-display text-lg tracking-tight",
        tone === "dark" ? "text-dusk" : "text-mist",
        className
      )}
    >
      Himāla Cove
    </span>
  );
}
