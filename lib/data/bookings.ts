export type BookingStatus = "Confirmed" | "Checked In" | "Checked Out" | "Cancelled";

export interface OperationsBooking {
  id: string;
  guestName: string;
  /** References Room.id in lib/data/rooms.ts */
  roomId: string;
  checkIn: string;
  checkOut: string;
  /** When the reservation was made — used to sort "Recent Bookings" */
  bookedOn: string;
  status: BookingStatus;
  reference: string;
  /**
   * Additive fields below — populated for reservations created through
   * the live booking flow (Phase 2A). Optional so all existing seed
   * bookings above remain valid without changes. Operations dashboard
   * components are unaffected since none of these are read there yet.
   */
  guests?: string;
  guestEmail?: string;
  guestPhone?: string;
  guestNationality?: string;
  arrivalTime?: string;
  specialRequests?: string;
  selectedExtraIds?: string[];
  paymentMethod?: string;
}

/** ISO date string (YYYY-MM-DD) for today + offsetDays. */
function iso(offsetDays: number): string {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

export const bookings: OperationsBooking[] = [
  {
    id: "b1",
    guestName: "Priya Sharma",
    roomId: "annapurna-view-room",
    checkIn: iso(-2),
    checkOut: iso(1),
    bookedOn: iso(-20),
    status: "Checked In",
    reference: "HC-482913",
  },
  {
    id: "b2",
    guestName: "Tom Whitfield",
    roomId: "lakeside-retreat",
    checkIn: iso(0),
    checkOut: iso(3),
    bookedOn: iso(-3),
    status: "Confirmed",
    reference: "HC-119284",
  },
  {
    id: "b3",
    guestName: "Aiko Tanaka",
    roomId: "sarangkot-suite",
    checkIn: iso(-1),
    checkOut: iso(0),
    bookedOn: iso(-15),
    status: "Checked In",
    reference: "HC-773654",
  },
  {
    id: "b4",
    guestName: "the Rasheed family",
    roomId: "fewa-family-cottage",
    checkIn: iso(-5),
    checkOut: iso(-2),
    bookedOn: iso(-25),
    status: "Checked Out",
    reference: "HC-330912",
  },
  {
    id: "b5",
    guestName: "Marco Belline",
    roomId: "machapuchare-executive-suite",
    checkIn: iso(0),
    checkOut: iso(4),
    bookedOn: iso(-1),
    status: "Confirmed",
    reference: "HC-908177",
  },
  {
    id: "b6",
    guestName: "Elena Petrova",
    roomId: "himalayan-horizon-villa",
    checkIn: iso(-3),
    checkOut: iso(2),
    bookedOn: iso(-18),
    status: "Checked In",
    reference: "HC-215540",
  },
  {
    id: "b7",
    guestName: "James Cole",
    roomId: "lakeside-retreat",
    checkIn: iso(2),
    checkOut: iso(5),
    bookedOn: iso(-5),
    status: "Confirmed",
    reference: "HC-664821",
  },
  {
    id: "b8",
    guestName: "Sara Kim",
    roomId: "annapurna-view-room",
    checkIn: iso(-1),
    checkOut: iso(0),
    bookedOn: iso(-10),
    status: "Checked In",
    reference: "HC-556098",
  },
  {
    id: "b9",
    guestName: "David Nguyen",
    roomId: "sarangkot-suite",
    checkIn: iso(0),
    checkOut: iso(2),
    bookedOn: iso(-2),
    status: "Confirmed",
    reference: "HC-742369",
  },
  {
    id: "b10",
    guestName: "Fatima Al-Sayed",
    roomId: "fewa-family-cottage",
    checkIn: iso(-4),
    checkOut: iso(1),
    bookedOn: iso(-22),
    status: "Checked In",
    reference: "HC-381027",
  },
  {
    id: "b11",
    guestName: "Lukas Becker",
    roomId: "machapuchare-executive-suite",
    checkIn: iso(1),
    checkOut: iso(3),
    bookedOn: iso(-4),
    status: "Confirmed",
    reference: "HC-859402",
  },
  {
    id: "b12",
    guestName: "Grace Mwangi",
    roomId: "himalayan-horizon-villa",
    checkIn: iso(-10),
    checkOut: iso(-7),
    bookedOn: iso(-40),
    status: "Checked Out",
    reference: "HC-627185",
  },
  {
    id: "b13",
    guestName: "Ravi Chandran",
    roomId: "lakeside-retreat",
    checkIn: iso(-1),
    checkOut: iso(2),
    bookedOn: iso(-12),
    status: "Checked In",
    reference: "HC-940756",
  },
  {
    id: "b14",
    guestName: "Noah Bennett",
    roomId: "annapurna-view-room",
    checkIn: iso(0),
    checkOut: iso(1),
    bookedOn: iso(-6),
    status: "Cancelled",
    reference: "HC-203849",
  },
];
