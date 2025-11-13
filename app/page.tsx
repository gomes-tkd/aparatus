import React from "react";
import Image from "next/image";
import SearchInput from "@/components/search-input";
import BannerImage from "@/public/banner.png";
import { PageSection, PageSectionScroller, PageSectionTitle } from "@/components/page-container";
import BookingItem from "@/components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "@/components/barbershop-item";

export default async function Home() {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc"
    }
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  });

  return (
    <PageSection>
      <SearchInput />
      <Image
        src={BannerImage}
        alt={"Banner Aparatus"}
        sizes={"100vw"}
        className={"h-auto w-full"}
        priority={true}
      />
      <PageSectionTitle>
        Recommended Barbershops
      </PageSectionTitle>
      <PageSectionScroller>
        {recommendedBarbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </PageSectionScroller>
      <PageSectionTitle>
        Popular Barbershops
      </PageSectionTitle>
      <PageSectionScroller>
        {popularBarbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </PageSectionScroller>
    </PageSection>
  );
}
