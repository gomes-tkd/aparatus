import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  PageContainer,
  PageSection,
  PageSectionTitle,
} from "@/components/page-container";
import BookingItem from "@/components/booking-item";

export default async function Bookings() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/");
  }

  const bookings = await prisma.booking.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      service: true,
      barbershop: true,
    },
    orderBy: {
      date: "desc",
    }
  });

  const now = new Date();
  const confirmedBookings = bookings.filter(
    (booking) => !booking.cancelled && new Date(booking.date) >= now,
  );
  const finishedBookings = bookings.filter(
    (booking) => booking.cancelled || new Date(booking.date) < now,
  );

  return (
    <main className={"flex h-screen min-h-screen flex-col"}>
      <div className={"flex-1"}>
        <PageContainer>
          <h1 className={"text-foreground text-xl font-bold"}>Agendamentos</h1>

          {confirmedBookings.length > 0 && (
            <PageSection>
              <PageSectionTitle>Confirmados</PageSectionTitle>
              <div className={"space-y-3"}>
                {confirmedBookings.map((booking) => (
                  <BookingItem key={booking.id} booking={booking} />
                ))}
              </div>
            </PageSection>
          )}

          {finishedBookings.length > 0 && (
            <PageSection>
              <PageSectionTitle>Finalizados</PageSectionTitle>
              <div className="space-y-3">
                {finishedBookings.map((booking) => (
                  <BookingItem key={booking.id} booking={booking} />
                ))}
              </div>
            </PageSection>
          )}

          {bookings.length === 0 && (
            <p className="text-muted-foreground text-center text-sm">
              Você ainda não tem agendamentos.
            </p>
          )}
        </PageContainer>
      </div>
    </main>
  );
}