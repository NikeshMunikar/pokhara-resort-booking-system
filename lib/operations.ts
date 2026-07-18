import { rooms } from "@/lib/data/rooms";
import { roomInventory } from "@/lib/data/room-inventory";
import { bookings, type OperationsBooking, type BookingStatus } from "@/lib/data/bookings";

function todayIso(): string {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.toISOString().slice(0, 10);
}

function resolveRoomName(roomId: string): string {
  return rooms.find((r) => r.id === roomId)?.name ?? roomId;
}

/** A room is occupied "tonight" if today falls within [checkIn, checkOut) and it hasn't been cancelled. */
export function isBookingActiveToday(booking: OperationsBooking): boolean {
  const today = todayIso();
  return booking.status !== "Cancelled" && booking.checkIn <= today && today < booking.checkOut;
}

export interface OverviewStats {
  totalRooms: number;
  roomsBooked: number;
  roomsAvailable: number;
  /** 0–100, rounded */
  occupancyRate: number;
}

export function getOverviewStats(): OverviewStats {
  const totalRooms = roomInventory.reduce((sum, inv) => sum + inv.unitCount, 0);
  const roomsBooked = bookings.filter(isBookingActiveToday).length;
  const roomsAvailable = Math.max(totalRooms - roomsBooked, 0);
  const occupancyRate = totalRooms > 0 ? Math.round((roomsBooked / totalRooms) * 100) : 0;

  return { totalRooms, roomsBooked, roomsAvailable, occupancyRate };
}

export interface RoomTypeSummaryRow {
  roomId: string;
  roomName: string;
  category: string;
  totalUnits: number;
  booked: number;
  available: number;
}

export function getRoomTypeSummary(): RoomTypeSummaryRow[] {
  return roomInventory.map((inv) => {
    const room = rooms.find((r) => r.id === inv.roomId);
    const booked = bookings.filter(
      (b) => b.roomId === inv.roomId && isBookingActiveToday(b)
    ).length;

    return {
      roomId: inv.roomId,
      roomName: room?.name ?? inv.roomId,
      category: room?.category ?? "—",
      totalUnits: inv.unitCount,
      booked,
      available: Math.max(inv.unitCount - booked, 0),
    };
  });
}

export interface DailyBookingRow {
  id: string;
  guestName: string;
  roomName: string;
  date: string;
}

export function getTodaysArrivals(): DailyBookingRow[] {
  const today = todayIso();
  return bookings
    .filter((b) => b.checkIn === today && b.status !== "Cancelled")
    .map((b) => ({
      id: b.id,
      guestName: b.guestName,
      roomName: resolveRoomName(b.roomId),
      date: b.checkIn,
    }));
}

export function getTodaysDepartures(): DailyBookingRow[] {
  const today = todayIso();
  return bookings
    .filter((b) => b.checkOut === today && b.status !== "Cancelled")
    .map((b) => ({
      id: b.id,
      guestName: b.guestName,
      roomName: resolveRoomName(b.roomId),
      date: b.checkOut,
    }));
}

export interface RecentBookingRow {
  id: string;
  guestName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
  reference: string;
}

export function getRecentBookings(limit = 8): RecentBookingRow[] {
  return [...bookings]
    .sort((a, b) => (a.bookedOn < b.bookedOn ? 1 : -1))
    .slice(0, limit)
    .map((b) => ({
      id: b.id,
      guestName: b.guestName,
      roomName: resolveRoomName(b.roomId),
      checkIn: b.checkIn,
      checkOut: b.checkOut,
      status: b.status,
      reference: b.reference,
    }));
}
