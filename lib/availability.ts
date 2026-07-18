export type AvailabilityStatus = "available" | "limited" | "unavailable";

/**
 * Simple deterministic string hash (djb2-style). Not cryptographic —
 * just needs to produce a stable, well-distributed number per input so
 * the same room + same dates always yields the same simulated result.
 */
export function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Simulated availability for a room on a given date range.
 * Weighting: ~70% available, ~20% limited (1 room left), ~10% unavailable.
 * Deterministic — refreshing or revisiting the same search never flickers.
 */
export function getAvailabilityStatus(
  roomId: string,
  checkIn: string,
  checkOut: string
): AvailabilityStatus {
  const bucket = hashString(`${roomId}-${checkIn}-${checkOut}`) % 10;
  if (bucket < 7) return "available";
  if (bucket < 9) return "limited";
  return "unavailable";
}

/**
 * Whole-day difference between two ISO date strings.
 * Returns 0 (not negative) if the range is invalid — callers should
 * validate with validateSearchDates first.
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffMs = end.getTime() - start.getTime();
  const nights = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(nights, 0);
}

/**
 * Estimated stay total — nightly rate × nights. Explicitly an estimate:
 * excludes taxes, fees, and add-on services, which stay deferred to the
 * Booking Flow milestone.
 */
export function calculateEstimatedTotal(pricePerNight: number, nights: number): number {
  return pricePerNight * nights;
}

export interface DateValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validates a check-in/check-out pair. Used by both the homepage
 * SearchWidget (before navigating to /search) and the results-page
 * SearchResultsBar (before updating the URL).
 */
export function validateSearchDates(checkIn: string, checkOut: string): DateValidationResult {
  if (!checkIn || !checkOut) {
    return { valid: false, error: "Please select both check-in and check-out dates." };
  }

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return { valid: false, error: "Please enter valid dates." };
  }
  if (start < today) {
    return { valid: false, error: "Check-in date has already passed." };
  }
  if (end <= start) {
    return { valid: false, error: "Check-out date must be after check-in." };
  }

  return { valid: true };
}
