import React from "react";
import { Barbershop } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Link
      href={`/barbershops/${barbershop.id}`}
      className={"relative min-h-[200px] min-w-[290px] rounded-xl"}
    >
      <div className={
          "absolute top-0 left-0 z-10 h-full w-full rounded-lg bg-linear-to-t from-black to-transparent"
        }
      />
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        fill
        className={"rounded-xl object-cover"}
      />
      <div className={"absolute bottom-0 left-0 right-0 z-20 p-4"}>
        <h3 className={"text-background text-lg font-bold"}>{barbershop.name}</h3>
        <p className={"text-background text-xs"}>{barbershop.address}</p>
      </div>
    </Link>
  )
}