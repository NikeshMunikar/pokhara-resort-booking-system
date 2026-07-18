"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PriceRangeFilter, type PriceBand } from "@/components/rooms/price-range-filter";
import { cn } from "@/lib/utils";

export type SortOption = "recommended" | "price-asc" | "price-desc" | "size-desc";

interface RoomFilterBarProps {
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
  guests: string;
  onGuestsChange: (value: string) => void;
  priceBand: PriceBand;
  onPriceBandChange: (value: PriceBand) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
  onClear: () => void;
}

export function RoomFilterBar({
  categories,
  category,
  onCategoryChange,
  guests,
  onGuestsChange,
  priceBand,
  onPriceBandChange,
  sort,
  onSortChange,
  resultCount,
  onClear,
}: RoomFilterBarProps) {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-line bg-surface p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-stone">
          <span className="font-data text-dusk">{resultCount}</span>{" "}
          {resultCount === 1 ? "room" : "rooms"}
        </p>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-sm text-stone">Sort by</span>
            <Select value={sort} onValueChange={(v) => onSortChange(v as SortOption)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="size-desc">Room Size: Largest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            aria-expanded={panelOpen}
            className="inline-flex items-center gap-2 rounded-sm border border-line px-3 py-2 text-sm font-medium text-dusk md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                panelOpen && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>

      {/* Sort select, mobile-only copy (desktop version lives in the row above) */}
      <div className="sm:hidden">
        <span className="text-sm text-stone">Sort by</span>
        <Select value={sort} onValueChange={(v) => onSortChange(v as SortOption)}>
          <SelectTrigger className="mt-1.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="size-desc">Room Size: Largest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className={cn(
          "flex-col gap-4 border-t border-line pt-4 md:flex md:flex-row md:items-end md:justify-between md:border-t-0 md:pt-0",
          panelOpen ? "flex" : "hidden md:flex"
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-dusk">Room Type</span>
            <Select value={category} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Room Type</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-dusk">Guests</span>
            <Select value={guests} onValueChange={onGuestsChange}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="2">2+ Guests</SelectItem>
                <SelectItem value="3">3+ Guests</SelectItem>
                <SelectItem value="4">4+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <PriceRangeFilter value={priceBand} onChange={onPriceBandChange} />
        </div>

        <Button variant="ghost" size="sm" onClick={onClear} className="self-start md:self-end">
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
