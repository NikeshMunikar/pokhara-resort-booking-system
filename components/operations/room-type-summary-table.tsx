import { getRoomTypeSummary } from "@/lib/operations";

export function RoomTypeSummaryTable() {
  const rows = getRoomTypeSummary();

  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-surface">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-xs uppercase tracking-widest text-stone">
            <th className="px-4 py-3 font-medium">Room Type</th>
            <th className="px-4 py-3 font-medium">Total Rooms</th>
            <th className="px-4 py-3 font-medium">Booked</th>
            <th className="px-4 py-3 font-medium">Available</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.roomId} className="border-b border-line last:border-0">
              <td className="px-4 py-3">
                <p className="text-dusk">{row.roomName}</p>
                <p className="text-xs text-stone">{row.category}</p>
              </td>
              <td className="px-4 py-3 font-data text-dusk">{row.totalUnits}</td>
              <td className="px-4 py-3 font-data text-dusk">{row.booked}</td>
              <td className="px-4 py-3 font-data text-dusk">{row.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
