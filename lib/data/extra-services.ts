export interface ExtraService {
  id: string;
  label: string;
  description: string;
  price: number;
  priceType: "flat" | "per-night";
}

export const extraServices: ExtraService[] = [
  {
    id: "airport-pickup",
    label: "Airport Pickup",
    description: "Round-trip car service from Pokhara Airport",
    price: 1500,
    priceType: "flat",
  },
  {
    id: "breakfast",
    label: "Daily Breakfast",
    description: "Full breakfast each morning of your stay",
    price: 800,
    priceType: "per-night",
  },
  {
    id: "spa",
    label: "Spa Treatment",
    description: "60-minute Himalayan herbal massage for two",
    price: 4500,
    priceType: "flat",
  },
  {
    id: "adventure",
    label: "Adventure Package",
    description: "Guided paragliding or boating excursion",
    price: 6500,
    priceType: "flat",
  },
  {
    id: "early-checkin",
    label: "Early Check-in",
    description: "Guaranteed check-in from 10:00 AM",
    price: 1200,
    priceType: "flat",
  },
  {
    id: "late-checkout",
    label: "Late Check-out",
    description: "Checkout extended to 3:00 PM",
    price: 1200,
    priceType: "flat",
  },
];
