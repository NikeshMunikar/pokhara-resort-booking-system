"use server";

import { bookings } from "@/lib/data/bookings";
import { buildReservationRecord, type CreateReservationInput } from "@/lib/reservations";

/**
 * Creates a reservation from booking-flow input and returns its reference.
 *
 * This is the single write seam for reservation creation — the only place
 * in the app that pushes into the `bookings` array. Keeping the write
 * isolated here means a future database migration only needs to replace
 * the body of this function (e.g. `bookings.push(...)` becomes
 * `await prisma.booking.create(...)`), with the same input/output
 * contract, so callers like booking-flow.tsx don't need to change.
 */
export async function createReservation(
  input: CreateReservationInput
): Promise<{ reference: string }> {
  const reservation = buildReservationRecord(input);
  bookings.push(reservation);
  return { reference: reservation.reference };
}
