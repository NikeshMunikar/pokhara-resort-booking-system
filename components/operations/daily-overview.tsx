import { Card, CardContent } from "@/components/ui/card";
import { getTodaysArrivals, getTodaysDepartures, type DailyBookingRow } from "@/lib/operations";

function DailyList({ title, items }: { title: string; items: DailyBookingRow[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-stone">{title}</p>
        {items.length === 0 ? (
          <p className="mt-3 text-sm text-stone">None scheduled for today.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 border-b border-line pb-3 text-sm last:border-0 last:pb-0"
              >
                <span className="text-dusk">{item.guestName}</span>
                <span className="text-stone">{item.roomName}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function DailyOverview() {
  const arrivals = getTodaysArrivals();
  const departures = getTodaysDepartures();

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <DailyList title="Today's Arrivals" items={arrivals} />
      <DailyList title="Today's Departures" items={departures} />
    </div>
  );
}
