"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/home/section-heading";
import { BookingStepper } from "@/components/booking/booking-stepper";
import { RoomDatesStep } from "@/components/booking/room-dates-step";
import { GuestInfoForm } from "@/components/booking/guest-info-form";
import { ExtrasSelector } from "@/components/booking/extras-selector";
import { ReviewStep } from "@/components/booking/review-step";
import { BookingSummaryPanel } from "@/components/booking/booking-summary-panel";
import { rooms } from "@/lib/data/rooms";
import type { Room } from "@/lib/types/room";
import { defaultGuestInfo, type GuestInfo } from "@/lib/booking-schema";
import { generateBookingReference } from "@/lib/booking";

export function BookingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialRoom = rooms.find((r) => r.id === searchParams.get("room")) ?? null;

  const [step, setStep] = useState(1);
  const [room, setRoom] = useState<Room | null>(initialRoom);
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") ?? "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") ?? "");
  const [guests, setGuests] = useState(searchParams.get("guests") ?? "2");
  const [guestInfo, setGuestInfo] = useState<GuestInfo>(defaultGuestInfo);
  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  function toggleExtra(id: string) {
    setSelectedExtraIds((prev) =>
      prev.includes(id) ? prev.filter((extraId) => extraId !== id) : [...prev, id]
    );
  }

  function handleConfirm() {
    if (!room) return;
    const reference = generateBookingReference(guestInfo.fullName, checkIn);

    const query = new URLSearchParams({
      ref: reference,
      room: room.id,
      checkIn,
      checkOut,
      guests,
      fullName: guestInfo.fullName,
      email: guestInfo.email,
      phone: guestInfo.phone,
      nationality: guestInfo.nationality,
      arrivalTime: guestInfo.arrivalTime,
      paymentMethod,
    });
    if (guestInfo.specialRequests) {
      query.set("specialRequests", guestInfo.specialRequests);
    }
    if (selectedExtraIds.length > 0) {
      query.set("extras", selectedExtraIds.join(","));
    }

    router.push(`/booking/confirmation?${query.toString()}`);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-section-sm">
      <SectionHeading
        eyebrow="Reserve Your Stay"
        title="Complete Your Booking"
        align="left"
      />

      <div className="mt-8">
        <BookingStepper currentStep={step} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
          {step === 1 && (
            <RoomDatesStep
              room={room}
              onRoomChange={setRoom}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              onCheckInChange={setCheckIn}
              onCheckOutChange={setCheckOut}
              onGuestsChange={setGuests}
              onContinue={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <GuestInfoForm
              defaultValues={guestInfo}
              onBack={() => setStep(1)}
              onContinue={(data) => {
                setGuestInfo(data);
                setStep(3);
              }}
            />
          )}

          {step === 3 && (
            <ExtrasSelector
              selected={selectedExtraIds}
              onToggle={toggleExtra}
              onBack={() => setStep(2)}
              onContinue={() => setStep(4)}
            />
          )}

          {step === 4 && room && (
            <ReviewStep
              room={room}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              guestInfo={guestInfo}
              selectedExtraIds={selectedExtraIds}
              paymentMethod={paymentMethod}
              onPaymentMethodChange={setPaymentMethod}
              termsAccepted={termsAccepted}
              onTermsChange={setTermsAccepted}
              onBack={() => setStep(3)}
              onConfirm={handleConfirm}
            />
          )}
        </div>

        <BookingSummaryPanel
          room={room}
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          selectedExtras={selectedExtraIds}
        />
      </div>
    </main>
  );
}
