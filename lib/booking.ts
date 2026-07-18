import { hashString } from "@/lib/availability";

/**
 * Generates a simulated booking reference, e.g. "HC-482913".
 * Uses the current timestamp as part of the seed so repeated bookings
 * (even with identical guest name + dates) get distinct references —
 * unlike availability status, uniqueness matters more than determinism here.
 */
export function generateBookingReference(fullName: string, checkIn: string): string {
  const seed = hashString(`${fullName}-${checkIn}-${Date.now()}`);
  const code = (seed % 900000) + 100000;
  return `HC-${code}`;
}
