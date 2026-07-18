import { Card, CardContent } from "@/components/ui/card";
import { getOverviewStats } from "@/lib/operations";

export function OverviewCards() {
  const stats = getOverviewStats();

  const cards = [
    { label: "Total Rooms", value: stats.totalRooms },
    { label: "Rooms Booked", value: stats.roomsBooked },
    { label: "Rooms Available", value: stats.roomsAvailable },
    { label: "Occupancy Rate", value: `${stats.occupancyRate}%` },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-stone">
              {card.label}
            </p>
            <p className="mt-2 font-data text-3xl text-pine">{card.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
