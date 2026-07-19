"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InfoRow } from "@/components/ui/info-row";
import { extraServices } from "@/lib/data/extra-services";
import { paymentMethods } from "@/lib/data/payment-methods";
import { arrivalTimeLabels } from "@/lib/data/arrival-times";
import { calculateNights } from "@/lib/availability";
import type { Room } from "@/lib/types/room";
import type { GuestInfo } from "@/lib/booking-schema";

interface ReviewStepProps {
  room: Room;
  checkIn: string;
  checkOut: string;
  guests: string;
  guestInfo: GuestInfo;
  selectedExtraIds: string[];
  paymentMethod: string;
  onPaymentMethodChange: (value: string) => void;
  termsAccepted: boolean;
  onTermsChange: (value: boolean) => void;
  onBack: () => void;
  onConfirm: () => void;
}

export function ReviewStep({
  room,
  checkIn,
  checkOut,
  guests,
  guestInfo,
  selectedExtraIds,
  paymentMethod,
  onPaymentMethodChange,
  termsAccepted,
  onTermsChange,
  onBack,
  onConfirm,
}: ReviewStepProps) {
  const nights = calculateNights(checkIn, checkOut);
  const chosenExtras = extraServices.filter((extra) => selectedExtraIds.includes(extra.id));
  const canConfirm = termsAccepted && Boolean(paymentMethod);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-stone">Stay</p>
        <div className="mt-2">
          <InfoRow label="Room" value={room.name} />
          <InfoRow label="Check-in" value={checkIn} />
          <InfoRow label="Check-out" value={checkOut} />
          <InfoRow label="Nights" value={String(nights)} />
          <InfoRow label="Guests" value={guests} />
        </div>
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-stone">
          Guest Information
        </p>
        <div className="mt-2">
          <InfoRow label="Full Name" value={guestInfo.fullName} />
          <InfoRow label="Email" value={guestInfo.email} />
          <InfoRow label="Phone" value={guestInfo.phone} />
          <InfoRow label="Nationality" value={guestInfo.nationality} />
          <InfoRow
            label="Arrival"
            value={arrivalTimeLabels[guestInfo.arrivalTime] ?? guestInfo.arrivalTime}
          />
          {guestInfo.specialRequests && (
            <InfoRow label="Special Requests" value={guestInfo.specialRequests} />
          )}
        </div>
      </div>

      {chosenExtras.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-stone">
            Extra Services
          </p>
          <div className="mt-2">
            {chosenExtras.map((extra) => (
              <InfoRow
                key={extra.id}
                label={extra.label}
                value={`NPR ${extra.price.toLocaleString("en-US")}${
                  extra.priceType === "per-night" ? " / night" : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-stone">Payment</p>
        <div className="mt-3">
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <Select value={paymentMethod} onValueChange={onPaymentMethodChange}>
            <SelectTrigger id="paymentMethod" className="mt-1.5">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method.value} value={method.value}>
                  {method.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-1.5 text-xs text-stone-light">
            Simulated for this prototype — no real payment is processed.
          </p>
        </div>

        <label className="mt-4 flex items-start gap-2.5 text-sm text-stone">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => onTermsChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-pine"
          />
          I agree to the booking policies and terms of stay.
        </label>
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onConfirm} disabled={!canConfirm}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
