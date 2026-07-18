import {
  Wifi,
  MountainSnow,
  Waves,
  Bath,
  UtensilsCrossed,
  Sofa,
  Flower,
  DoorOpen,
  BedDouble,
  Crown,
  ChefHat,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const keywordIconMap: [keywords: string[], icon: LucideIcon][] = [
  [["wifi"], Wifi],
  [["mountain"], MountainSnow],
  [["lake", "pool", "plunge"], Waves],
  [["tub", "bath"], Bath],
  [["breakfast", "dining"], UtensilsCrossed],
  [["lounge"], Sofa],
  [["garden", "patio"], Flower],
  [["connecting", "terrace"], DoorOpen],
  [["bed"], BedDouble],
  [["butler"], Crown],
  [["kitchen"], ChefHat],
];

function resolveIcon(label: string): LucideIcon {
  const lower = label.toLowerCase();
  for (const [keywords, icon] of keywordIconMap) {
    if (keywords.some((keyword) => lower.includes(keyword))) {
      return icon;
    }
  }
  return Sparkles;
}

interface RoomAmenityListProps {
  amenities: string[];
}

export function RoomAmenityList({ amenities }: RoomAmenityListProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {amenities.map((amenity) => {
        const Icon = resolveIcon(amenity);
        return (
          <div
            key={amenity}
            className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-pine/10 text-pine">
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-sm text-dusk">{amenity}</span>
          </div>
        );
      })}
    </div>
  );
}
