import { Badge } from "@/components/ui/badge";
import { getRecentBookings } from "@/lib/operations";
import type { BookingStatus } from "@/lib/data/bookings";

const statusVariant: Record<
  BookingStatus,
  "success" | "highlight" | "neutral" | "outline"
> = {
  "Checked In": "success",
  Confirmed: "highlight",
  "Checked Out": "neutral",
  Cancelled: "outline",
};

export function RecentBookingsTable() {
  const recentBookings = getRecentBookings(8);

  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-surface">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-xs uppercase tracking-widest text-stone">
            <th className="px-4 py-3 font-medium">Guest</th>
            <th className="px-4 py-3 font-medium">Room</th>
            <th className="px-4 py-3 font-medium">Check-in</th>
            <th className="px-4 py-3 font-medium">Check-out</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((booking) => (
            <tr key={booking.id} className="border-b border-line last:border-0">
              <td className="px-4 py-3 text-dusk">{booking.guestName}</td>
              <td className="px-4 py-3 text-stone">{booking.roomName}</td>
              <td className="px-4 py-3 font-data text-dusk">{booking.checkIn}</td>
              <td className="px-4 py-3 font-data text-dusk">{booking.checkOut}</td>
              <td className="px-4 py-3">
                <Badge
                  variant={statusVariant[booking.status]}
                  className={booking.status === "Cancelled" ? "text-danger" : undefined}
                >
                  {booking.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
