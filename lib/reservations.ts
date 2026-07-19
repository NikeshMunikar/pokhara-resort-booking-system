import { bookings, type OperationsBooking, type BookingStatus } from "@/lib/data/bookings";
import { generateBookingReference } from "@/lib/booking";
import type { GuestInfo } from "@/lib/booking-schema";

/**
 * Input needed to build a reservation record from the booking flow.
 * Mirrors the fields already collected by the wizard — no new data
 * is requested from the guest.
 */
export interface CreateReservationInput {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  guestInfo: GuestInfo;
  selectedExtraIds: string[];
  paymentMethod: string;
}

/** Today as an ISO date string (YYYY-MM-DD), matching lib/data/bookings.ts's convention. */
function todayIso(): string {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.toISOString().slice(0, 10);
}

/**
 * Builds a complete OperationsBooking record from booking-flow input.
 * Pure function — does not push into the `bookings` array itself, so it
 * can be unit-tested or reused independently of where the write happens.
 */
export function buildReservationRecord(input: CreateReservationInput): OperationsBooking {
  const status: BookingStatus = "Confirmed";

  return {
    id: `res-${Date.now()}`,
    guestName: input.guestInfo.fullName,
    roomId: input.roomId,
    checkIn: input.checkIn,
    checkOut: input.checkOut,
    bookedOn: todayIso(),
    status,
    reference: generateBookingReference(input.guestInfo.fullName, input.checkIn),
    guests: input.guests,
    guestEmail: input.guestInfo.email,
    guestPhone: input.guestInfo.phone,
    guestNationality: input.guestInfo.nationality,
    arrivalTime: input.guestInfo.arrivalTime,
    specialRequests: input.guestInfo.specialRequests,
    selectedExtraIds: input.selectedExtraIds,
    paymentMethod: input.paymentMethod,
  };
}

/**
 * Looks up a reservation by its booking reference (e.g. "HC-482913").
 * Used by the confirmation page in Phase 2A milestone 3 — not called
 * anywhere yet in this milestone.
 */
export function findReservationByReference(reference: string): OperationsBooking | undefined {
  return bookings.find((booking) => booking.reference === reference);
}
