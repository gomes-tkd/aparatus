import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BookingItemProps {
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  date: Date;
}

export default function BookingItem(
  { serviceName, barbershopName, barbershopImageUrl, date }: BookingItemProps
) {
  return (
    <Card
      className={"flex w-full min-w-full flex-row items-center justify-center p-0"}
    >
      <div className={"flex flex-1 flex-col gap-4 p-4"}>
        <Badge>Confirmed</Badge>
        <div className={"flex flex-col gap-2"}>
          <p className="font-bold">
            {serviceName}
          </p>
          <div className="flex items-center gap-2">
            <Avatar className={"h-6 w-6"}>
              <AvatarImage src={`${barbershopImageUrl}`} />
            </Avatar>
            <p className={"text-muted-foreground text-sm"}>{barbershopName}</p>
          </div>
        </div>
      </div>

      <div className={"flex flex-col items-center justify-center p-4 border-l py-3"}>
        <p className={"text-sm capitalize"}>
          {date.toLocaleDateString("pt-BR", { month: "long" })}
        </p>
        <p className={"text-2xl capitalize font-bold"}>
          {date.toLocaleDateString("pt-BR", { day: "2-digit" })}
        </p>
        <p className={"text-sm capitalize"}>
          {date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Card>
  );
}