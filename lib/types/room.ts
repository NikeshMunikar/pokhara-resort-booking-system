export interface RoomImage {
  src: string;
  alt: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  images: RoomImage[];
  pricePerNight: number;
  currency: "NPR";
  sizeSqm: number;
  maxGuests: number;
  bedType: string;
  amenities: string[];
  badge?: string;
}
