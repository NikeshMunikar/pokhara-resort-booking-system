"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SearchFormFields } from "@/components/search/search-form-fields";
import { BookingRoomSummary } from "@/components/booking/booking-room-summary";
import { validateSearchDates } from "@/lib/availability";
import { rooms } from "@/lib/data/rooms";
import type { Room } from "@/lib/types/room";

interface RoomDatesStepProps {
  room: Room | null;
  onRoomChange: (room: Room) => void;
  checkIn: string;
  checkOut: string;
  guests: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onContinue: () => void;
}

export function RoomDatesStep({
  room,
  onRoomChange,
  checkIn,
  checkOut,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onContinue,
}: RoomDatesStepProps) {
  const [error, setError] = useState<string | null>(null);

  function handleContinue() {
    if (!room) {
      setError("Please select a room to continue.");
      return;
    }
    const validation = validateSearchDates(checkIn, checkOut);
    if (!validation.valid) {
      setError(validation.error ?? "Please check your dates.");
      return;
    }
    setError(null);
    onContinue();
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="booking-room">Room</Label>
        <Select
          value={room?.id ?? ""}
          onValueChange={(id) => {
            const selected = rooms.find((r) => r.id === id);
            if (selected) onRoomChange(selected);
          }}
        >
          <SelectTrigger id="booking-room" className="mt-1.5">
            <SelectValue placeholder="Select a room" />
          </SelectTrigger>
          <SelectContent>
            {rooms.map((r) => (
              <SelectItem key={r.id} value={r.id}>
                {r.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {room && <BookingRoomSummary room={room} />}

      <div className="grid gap-4 sm:grid-cols-3">
        <SearchFormFields
          idPrefix="booking"
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          roomType="any"
          onCheckInChange={onCheckInChange}
          onCheckOutChange={onCheckOutChange}
          onGuestsChange={onGuestsChange}
          onRoomTypeChange={() => {}}
          showRoomType={false}
        />
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <div className="flex justify-end">
        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </div>
  );
}
