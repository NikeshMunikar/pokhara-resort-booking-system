import type { Room } from "@/lib/types/room";

export const rooms: Room[] = [
  {
    id: "lakeside-retreat",
    slug: "lakeside-retreat",
    name: "Lakeside Retreat",
    category: "Standard Room",
    tagline: "Ground-floor calm, steps from the water",
    description:
      "A warm, wood-toned room opening onto a private terrace facing Phewa Lake — the quietest way to start a Pokhara morning.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        alt: "Lakeside Retreat room with warm wood tones and terrace",
      },
      {
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80",
        alt: "Lakeside Retreat en-suite bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
        alt: "Private terrace at Lakeside Retreat facing the water",
      },
    ],
    pricePerNight: 18500,
    currency: "NPR",
    sizeSqm: 32,
    maxGuests: 2,
    bedType: "1 King Bed",
    amenities: ["Free WiFi", "Private Terrace", "Breakfast Included"],
  },
  {
    id: "annapurna-view-room",
    slug: "annapurna-view-room",
    name: "Annapurna View Room",
    category: "Deluxe Room",
    tagline: "Wake up facing the Annapurna range",
    description:
      "Floor-to-ceiling windows frame the Annapurna massif at sunrise. Deluxe finishes throughout, with a reading nook by the window.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
        alt: "Annapurna View Room with mountain-facing windows",
      },
      {
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        alt: "Annapurna View Room reading nook by the window",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        alt: "Rain shower bathroom in the Annapurna View Room",
      },
    ],
    pricePerNight: 24500,
    currency: "NPR",
    sizeSqm: 38,
    maxGuests: 2,
    bedType: "1 King Bed",
    amenities: ["Mountain View", "Free WiFi", "Rain Shower"],
    badge: "Most Booked",
  },
  {
    id: "sarangkot-suite",
    slug: "sarangkot-suite",
    name: "Sarangkot Suite",
    category: "Suite",
    tagline: "A separate living area named for the sunrise viewpoint",
    description:
      "A generous suite with a dedicated lounge area, soaking tub, and west-facing balcony that catches the golden hour over the lake.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        alt: "Sarangkot Suite living area and balcony",
      },
      {
        src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
        alt: "Sarangkot Suite bedroom with lake-facing window",
      },
      {
        src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
        alt: "Soaking tub in the Sarangkot Suite",
      },
    ],
    pricePerNight: 34000,
    currency: "NPR",
    sizeSqm: 54,
    maxGuests: 3,
    bedType: "1 King Bed + Day Bed",
    amenities: ["Lake View", "Soaking Tub", "Lounge Area", "Free WiFi"],
    badge: "Lake View",
  },
  {
    id: "fewa-family-cottage",
    slug: "fewa-family-cottage",
    name: "Fewa Family Cottage",
    category: "Family Room",
    tagline: "A standalone cottage built for two families",
    description:
      "Two connected bedrooms around a shared sitting room, with a garden-facing patio — designed for families traveling together.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        alt: "Fewa Family Cottage bedroom with garden patio",
      },
      {
        src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
        alt: "Second bedroom in the Fewa Family Cottage",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Shared sitting room in the Fewa Family Cottage",
      },
    ],
    pricePerNight: 29500,
    currency: "NPR",
    sizeSqm: 62,
    maxGuests: 4,
    bedType: "2 Queen Beds",
    amenities: ["Garden Patio", "Connecting Rooms", "Free WiFi", "Extra Beds Available"],
  },
  {
    id: "machapuchare-executive-suite",
    slug: "machapuchare-executive-suite",
    name: "Machapuchare Executive Suite",
    category: "Executive Suite",
    tagline: "Named for the fishtail peak on the horizon",
    description:
      "Our most refined suite — a corner unit with wraparound views of Machapuchare, a private plunge pool, and in-room dining setup.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        alt: "Machapuchare Executive Suite with private plunge pool",
      },
      {
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        alt: "In-room dining setup in the Machapuchare Executive Suite",
      },
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        alt: "Wraparound mountain-view windows in the Executive Suite",
      },
    ],
    pricePerNight: 48000,
    currency: "NPR",
    sizeSqm: 78,
    maxGuests: 3,
    bedType: "1 King Bed",
    amenities: ["Private Plunge Pool", "Mountain View", "Butler Service", "Free WiFi"],
    badge: "Signature",
  },
  {
    id: "himalayan-horizon-villa",
    slug: "himalayan-horizon-villa",
    name: "Himalayan Horizon Villa",
    category: "Villa",
    tagline: "A private villa at the edge of the property",
    description:
      "The resort's most secluded stay — a two-bedroom villa with its own infinity-edge plunge pool overlooking the lake and mountains beyond.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        alt: "Himalayan Horizon Villa exterior with infinity plunge pool",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        alt: "Full kitchen inside the Himalayan Horizon Villa",
      },
      {
        src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
        alt: "Primary bedroom of the Himalayan Horizon Villa",
      },
    ],
    pricePerNight: 72000,
    currency: "NPR",
    sizeSqm: 110,
    maxGuests: 4,
    bedType: "2 King Beds",
    amenities: ["Private Pool", "Full Kitchen", "Butler Service", "Lake & Mountain View"],
    badge: "Signature",
  },
];

export const featuredRooms = rooms.filter((room) =>
  ["annapurna-view-room", "sarangkot-suite", "machapuchare-executive-suite"].includes(room.id)
);
