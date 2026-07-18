import { Badge } from "@/components/ui/badge";
import type { AvailabilityStatus } from "@/lib/availability";

const statusConfig: Record<
  AvailabilityStatus,
  { label: string; variant: "success" | "highlight" | "neutral" }
> = {
  available: { label: "Available", variant: "success" },
  limited: { label: "Only 1 Room Left", variant: "highlight" },
  unavailable: { label: "Not Available for These Dates", variant: "neutral" },
};

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
}

export function AvailabilityBadge({ status }: AvailabilityBadgeProps) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
