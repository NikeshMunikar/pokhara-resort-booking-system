export interface RoomInventory {
  /** References Room.id in lib/data/rooms.ts */
  roomId: string;
  unitCount: number;
}

export const roomInventory: RoomInventory[] = [
  { roomId: "lakeside-retreat", unitCount: 10 },
  { roomId: "annapurna-view-room", unitCount: 8 },
  { roomId: "sarangkot-suite", unitCount: 6 },
  { roomId: "fewa-family-cottage", unitCount: 8 },
  { roomId: "machapuchare-executive-suite", unitCount: 6 },
  { roomId: "himalayan-horizon-villa", unitCount: 4 },
];
