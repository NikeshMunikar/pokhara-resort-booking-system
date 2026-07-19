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
import { createReservation } from "@/lib/actions/create-reservation";

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

  async function handleConfirm() {
    if (!room) return;

    const { reference } = await createReservation({
      roomId: room.id,
      checkIn,
      checkOut,
      guests,
      guestInfo,
      selectedExtraIds,
      paymentMethod,
    });

    const query = new URLSearchParams({ ref: reference });
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
