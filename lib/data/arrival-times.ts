export interface ArrivalTimeOption {
  value: string;
  label: string;
}

export const arrivalTimes: ArrivalTimeOption[] = [
  { value: "morning", label: "Morning (8 AM – 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM – 4 PM)" },
  { value: "evening", label: "Evening (4 PM – 8 PM)" },
  { value: "late-night", label: "Late Night (After 8 PM)" },
];

/** Derived lookup map — stays in sync with `arrivalTimes` automatically. */
export const arrivalTimeLabels: Record<string, string> = arrivalTimes.reduce(
  (acc, time) => {
    acc[time.value] = time.label;
    return acc;
  },
  {} as Record<string, string>
);
