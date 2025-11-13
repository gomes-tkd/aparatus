import React from "react";
import Image from "next/image";
import SearchInput from "@/components/search-input";
import BannerImage from "@/public/banner.png";
import QuickSearchButtons from "@/components/quick-search-buttons";
import { PageContainer, PageSection, PageSectionScroller, PageSectionTitle } from "@/components/page-container";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "@/components/barbershop-item";

export default async function Home() {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <main>
      <PageContainer>
        <SearchInput />

        <QuickSearchButtons />

        <Image
          src={BannerImage}
          alt={"Agende agora!"}
          sizes={"100vw"}
          className={"h-auto w-full"}
        />

        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
    </main>
  );
}
