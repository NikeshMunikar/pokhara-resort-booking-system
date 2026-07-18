"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchFormFields } from "@/components/search/search-form-fields";
import { validateSearchDates } from "@/lib/availability";

export interface SearchCriteria {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
}

interface SearchResultsBarProps {
  initialCheckIn: string;
  initialCheckOut: string;
  initialGuests: string;
  initialRoomType: string;
  onSearch: (criteria: SearchCriteria) => void;
}

export function SearchResultsBar({
  initialCheckIn,
  initialCheckOut,
  initialGuests,
  initialRoomType,
  onSearch,
}: SearchResultsBarProps) {
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests || "2");
  const [roomType, setRoomType] = useState(initialRoomType || "any");
  const [error, setError] = useState<string | null>(null);

  function handleUpdate() {
    const validation = validateSearchDates(checkIn, checkOut);
    if (!validation.valid) {
      setError(validation.error ?? "Please check your dates.");
      return;
    }
    setError(null);
    onSearch({ checkIn, checkOut, guests, roomType });
  }

  return (
    <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
        <SearchFormFields
          idPrefix="results"
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          roomType={roomType}
          onCheckInChange={setCheckIn}
          onCheckOutChange={setCheckOut}
          onGuestsChange={setGuests}
          onRoomTypeChange={setRoomType}
        />

        <div className="flex items-end">
          <Button size="md" className="w-full lg:w-auto" onClick={handleUpdate}>
            Update Search
          </Button>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-danger">{error}</p>}
    </div>
  );
}
