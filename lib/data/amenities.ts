export interface Amenity {
  id: string;
  icon:
    | "waves"
    | "leaf"
    | "utensils-crossed"
    | "wifi"
    | "plane-landing"
    | "dumbbell"
    | "flame"
    | "wind"
    | "paw-print"
    | "car"
    | "sunrise"
    | "moon-star";
  label: string;
  description: string;
}

export const amenities: Amenity[] = [
  { id: "pool", icon: "waves", label: "Infinity Pool", description: "Heated, lake-facing" },
  { id: "spa", icon: "leaf", label: "Lakeside Spa", description: "Himalayan herbal treatments" },
  { id: "dining", icon: "utensils-crossed", label: "Fine Dining", description: "Nepali & continental" },
  { id: "wifi", icon: "wifi", label: "Free WiFi", description: "Throughout the property" },
  { id: "pickup", icon: "plane-landing", label: "Airport Pickup", description: "Complimentary, on request" },
  { id: "gym", icon: "dumbbell", label: "Fitness Studio", description: "Open 24 hours" },
  { id: "bonfire", icon: "flame", label: "Bonfire Lounge", description: "Evenings, lakeside" },
  { id: "paragliding", icon: "wind", label: "Paragliding Desk", description: "Sarangkot launch bookings" },
  { id: "petfriendly", icon: "paw-print", label: "Pet Friendly", description: "Select rooms" },
  { id: "parking", icon: "car", label: "Private Parking", description: "On-site, secured" },
  { id: "yoga", icon: "sunrise", label: "Sunrise Yoga", description: "Daily, on the lawn" },
  { id: "nightconcierge", icon: "moon-star", label: "24-Hour Concierge", description: "Always at the desk" },
];
