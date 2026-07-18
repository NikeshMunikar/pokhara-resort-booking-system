import { Card, CardContent } from "@/components/ui/card";
import { extraServices } from "@/lib/data/extra-services";
import { calculateNights, calculateEstimatedTotal } from "@/lib/availability";
import type { Room } from "@/lib/types/room";

interface BookingSummaryPanelProps {
  room: Room | null;
  checkIn: string;
  checkOut: string;
  guests: string;
  selectedExtras: string[];
}

export function BookingSummaryPanel({
  room,
  checkIn,
  checkOut,
  guests,
  selectedExtras,
}: BookingSummaryPanelProps) {
  const hasDates = Boolean(checkIn && checkOut);
  const nights = hasDates ? calculateNights(checkIn, checkOut) : 0;
  const roomTotal = room && nights > 0 ? calculateEstimatedTotal(room.pricePerNight, nights) : 0;

  const chosenExtras = extraServices.filter((extra) => selectedExtras.includes(extra.id));
  const extrasTotal = chosenExtras.reduce(
    (sum, extra) => sum + (extra.priceType === "per-night" ? extra.price * nights : extra.price),
    0
  );
  const grandTotal = roomTotal + extrasTotal;

  return (
    <Card className="lg:sticky lg:top-24">
      <CardContent className="p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-stone">
          Booking Summary
        </p>

        {room ? (
          <div className="mt-4">
            <p className="font-display text-lg text-dusk">{room.name}</p>
            <p className="text-sm text-stone">{room.category}</p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-stone">Select a room to continue</p>
        )}

        <div className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
          <div className="flex justify-between text-stone">
            <span>Check-in</span>
            <span className="font-data text-dusk">{checkIn || "—"}</span>
          </div>
          <div className="flex justify-between text-stone">
            <span>Check-out</span>
            <span className="font-data text-dusk">{checkOut || "—"}</span>
          </div>
          <div className="flex justify-between text-stone">
            <span>Guests</span>
            <span className="font-data text-dusk">{guests || "—"}</span>
          </div>
          <div className="flex justify-between text-stone">
            <span>Nights</span>
            <span className="font-data text-dusk">{nights || "—"}</span>
          </div>
        </div>

        {room && nights > 0 && (
          <div className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
            <div className="flex justify-between text-stone">
              <span>
                Room ({nights} {nights === 1 ? "night" : "nights"})
              </span>
              <span className="font-data text-dusk">
                NPR {roomTotal.toLocaleString("en-US")}
              </span>
            </div>
            {chosenExtras.map((extra) => (
              <div key={extra.id} className="flex justify-between text-stone">
                <span>{extra.label}</span>
                <span className="font-data text-dusk">
                  NPR{" "}
                  {(extra.priceType === "per-night"
                    ? extra.price * nights
                    : extra.price
                  ).toLocaleString("en-US")}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <span className="text-sm font-medium text-dusk">Estimated Total</span>
          <span className="font-data text-xl text-pine">
            NPR {grandTotal.toLocaleString("en-US")}
          </span>
        </div>
        <p className="mt-1 text-xs text-stone-light">Excludes taxes and fees</p>
      </CardContent>
    </Card>
  );
}
