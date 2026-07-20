import { ConfirmationContent } from "@/components/booking/confirmation-content";
import { findReservationByReference } from "@/lib/reservations";

/**
 * Reservations are created in-memory via a Server Action (see
 * lib/actions/create-reservation.ts). Without this, Next.js could
 * statically optimize this route and never see newly created
 * reservations — dynamic rendering guarantees each request re-reads
 * the current in-memory bookings list.
 */
export const dynamic = "force-dynamic";

interface ConfirmationPageProps {
  searchParams: Promise<{ ref?: string }>;
}

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { ref } = await searchParams;
  const reservation = ref ? findReservationByReference(ref) : undefined;

  return <ConfirmationContent reservation={reservation} />;
}
