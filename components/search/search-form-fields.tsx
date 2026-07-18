import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { rooms } from "@/lib/data/rooms";

interface SearchFormFieldsProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onRoomTypeChange: (value: string) => void;
  /** Prefixes field ids so two instances (e.g. hero + results bar) never collide. */
  idPrefix?: string;
  /** Set false to omit the Room Type select — used by the Booking flow, which has its own explicit room picker. Defaults to true (unchanged behavior everywhere else). */
  showRoomType?: boolean;
}

export function SearchFormFields({
  checkIn,
  checkOut,
  guests,
  roomType,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onRoomTypeChange,
  idPrefix = "search",
  showRoomType = true,
}: SearchFormFieldsProps) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${idPrefix}-check-in`}>Check-in</Label>
        <Input
          id={`${idPrefix}-check-in`}
          type="date"
          value={checkIn}
          onChange={(e) => onCheckInChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${idPrefix}-check-out`}>Check-out</Label>
        <Input
          id={`${idPrefix}-check-out`}
          type="date"
          value={checkOut}
          onChange={(e) => onCheckOutChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${idPrefix}-guests`}>Guests</Label>
        <Select value={guests} onValueChange={onGuestsChange}>
          <SelectTrigger id={`${idPrefix}-guests`}>
            <SelectValue placeholder="Guests" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {showRoomType && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${idPrefix}-room-type`}>Room Type</Label>
          <Select value={roomType} onValueChange={onRoomTypeChange}>
            <SelectTrigger id={`${idPrefix}-room-type`}>
              <SelectValue placeholder="Any Room Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Room Type</SelectItem>
              {rooms.map((room) => (
                <SelectItem key={room.id} value={room.id}>
                  {room.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
}
