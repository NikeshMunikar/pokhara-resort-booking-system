"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchFormFields } from "@/components/search/search-form-fields";
import { validateSearchDates } from "@/lib/availability";

export function SearchWidget() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("any");
  const [error, setError] = useState<string | null>(null);

  function handleSearch() {
    const validation = validateSearchDates(checkIn, checkOut);
    if (!validation.valid) {
      setError(validation.error ?? "Please check your dates.");
      return;
    }
    setError(null);
    const query = new URLSearchParams({ checkIn, checkOut, guests, roomType });
    router.push(`/search?${query.toString()}`);
  }

  return (
    <div className="rounded-xl border border-line bg-surface/95 p-5 shadow-glass backdrop-blur sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
        <SearchFormFields
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
          <Button size="md" className="w-full lg:w-auto" onClick={handleSearch}>
            Search Availability
          </Button>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-danger">{error}</p>}
    </div>
  );
}
