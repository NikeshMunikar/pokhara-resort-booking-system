import Link from "next/link";
import { CheckCircle2, Mail, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InfoRow } from "@/components/ui/info-row";
import { rooms } from "@/lib/data/rooms";
import { extraServices } from "@/lib/data/extra-services";
import { paymentMethodLabels } from "@/lib/data/payment-methods";
import { arrivalTimeLabels } from "@/lib/data/arrival-times";
import { calculateNights, calculateEstimatedTotal } from "@/lib/availability";
import type { OperationsBooking } from "@/lib/data/bookings";

interface ConfirmationContentProps {
  /** Resolved via findReservationByReference in app/booking/confirmation/page.tsx. */
  reservation?: OperationsBooking;
}

export function ConfirmationContent({ reservation }: ConfirmationContentProps) {
  const ref = reservation?.reference;
  const roomId = reservation?.roomId;
  const checkIn = reservation?.checkIn ?? "";
  const checkOut = reservation?.checkOut ?? "";
  const guests = reservation?.guests ?? "";
  const fullName = reservation?.guestName ?? "";
  const email = reservation?.guestEmail ?? "";
  const phone = reservation?.guestPhone ?? "";
  const nationality = reservation?.guestNationality ?? "";
  const arrivalTime = reservation?.arrivalTime ?? "";
  const specialRequests = reservation?.specialRequests ?? "";
  const paymentMethod = reservation?.paymentMethod ?? "";
  const selectedExtraIds = reservation?.selectedExtraIds ?? [];

  const room = rooms.find((r) => r.id === roomId);

  if (!ref || !room) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-section-sm text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-amber">
          No Booking Found
        </p>
        <h1 className="mt-3 text-3xl text-dusk sm:text-4xl">
          We couldn&apos;t find that reservation
        </h1>
        <p className="mt-4 max-w-md text-base text-stone">
          This confirmation link looks incomplete or has expired. Start a
          new booking from any room&apos;s page to reserve your stay.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/rooms">Browse All Rooms</Link>
        </Button>
      </main>
    );
  }

  const nights = calculateNights(checkIn, checkOut);
  const roomTotal = calculateEstimatedTotal(room.pricePerNight, nights);
  const chosenExtras = extraServices.filter((extra) =>
    selectedExtraIds.includes(extra.id)
  );
  const extrasTotal = chosenExtras.reduce(
    (sum, extra) =>
      sum + (extra.priceType === "per-night" ? extra.price * nights : extra.price),
    0
  );
  const grandTotal = roomTotal + extrasTotal;

  return (
    <main className="mx-auto max-w-3xl px-6 py-section-sm">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pine/10 text-pine">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-amber">
          Booking Confirmed
        </p>
        <h1 className="mt-2 text-4xl text-dusk sm:text-5xl">
          Thank you{fullName ? `, ${fullName.split(" ")[0]}` : ""}
        </h1>
        <p className="mt-3 max-w-md text-base text-stone">
          Your stay at Himāla Cove is reserved.
          {email && ` A confirmation has been sent to ${email}.`}
        </p>

        <div className="mt-6 rounded-lg border border-line bg-mist-dim px-6 py-4">
          <p className="text-xs uppercase tracking-widest text-stone">
            Booking Reference
          </p>
          <p className="mt-1 font-data text-2xl text-pine">{ref}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-stone">
              Reservation
            </p>
            <div className="mt-3">
              <InfoRow label="Room" value={room.name} />
              <InfoRow label="Check-in" value={checkIn || "—"} />
              <InfoRow label="Check-out" value={checkOut || "—"} />
              <InfoRow label="Nights" value={String(nights)} />
              <InfoRow label="Guests" value={guests || "—"} />
              {chosenExtras.map((extra) => (
                <InfoRow
                  key={extra.id}
                  label={extra.label}
                  value={`NPR ${extra.price.toLocaleString("en-US")}${
                    extra.priceType === "per-night" ? " / night" : ""
                  }`}
                />
              ))}
              {paymentMethod && (
                <InfoRow
                  label="Payment Method"
                  value={paymentMethodLabels[paymentMethod] ?? paymentMethod}
                />
              )}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <span className="text-sm font-medium text-dusk">Estimated Total</span>
              <span className="font-data text-xl text-pine">
                NPR {grandTotal.toLocaleString("en-US")}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-stone">
              Guest Information
            </p>
            <div className="mt-3">
              <InfoRow label="Full Name" value={fullName || "—"} />
              <InfoRow label="Email" value={email || "—"} />
              <InfoRow label="Phone" value={phone || "—"} />
              <InfoRow label="Nationality" value={nationality || "—"} />
              <InfoRow
                label="Arrival"
                value={arrivalTimeLabels[arrivalTime] ?? arrivalTime ?? "—"}
              />
              {specialRequests && (
                <InfoRow label="Special Requests" value={specialRequests} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 rounded-lg border border-line bg-surface p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-stone">
          Next Steps
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
            <p className="text-sm text-stone">
              A confirmation email with your itinerary is on its way to{" "}
              {email || "your inbox"}.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
            <p className="text-sm text-stone">
              Check-in is from 2:00 PM and check-out is by 11:00 AM. Let us
              know in advance if you&apos;d like to arrange early check-in.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
            <p className="text-sm text-stone">
              Questions before you arrive? Reach the front desk any time —
              contact details are included in your confirmation email.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="secondary" size="lg">
          <Link href="/">Return to Home</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/rooms">Browse Rooms</Link>
        </Button>
      </div>
    </main>
  );
}
