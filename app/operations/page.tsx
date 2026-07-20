import { OverviewCards } from "@/components/operations/overview-cards";
import { RoomTypeSummaryTable } from "@/components/operations/room-type-summary-table";
import { DailyOverview } from "@/components/operations/daily-overview";
import { RecentBookingsTable } from "@/components/operations/recent-bookings-table";

/**
 * Reads the shared in-memory `bookings` array (via lib/operations.ts),
 * which is mutated by the reservation Server Action. Dynamic rendering
 * guarantees this dashboard is never statically optimized and always
 * reflects the current bookings on each request.
 */
export const dynamic = "force-dynamic";

export default function OperationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-section-sm">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-amber">
          Staff Only — Prototype
        </p>
        <h1 className="mt-2 text-3xl text-dusk sm:text-4xl">
          Hotel Operations Dashboard
        </h1>
        <p className="mt-2 max-w-xl text-sm text-stone">
          A read-only snapshot of occupancy and bookings for demonstration
          purposes. Not connected to a live reservation system.
        </p>
      </div>

      <div className="mt-8">
        <OverviewCards />
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl text-dusk">Room Type Summary</h2>
        <div className="mt-4">
          <RoomTypeSummaryTable />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl text-dusk">Daily Overview</h2>
        <div className="mt-4">
          <DailyOverview />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl text-dusk">Recent Bookings</h2>
        <div className="mt-4">
          <RecentBookingsTable />
        </div>
      </div>
    </main>
  );
}
