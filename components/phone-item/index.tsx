"use client";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

export default function PhoneItem({ phone }: PhoneItemProps) {
  function handleCopyPhone() {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone Copiado!");
  }

  return (
    <div className={"flex w-full items-center justify-between"}>
      <div className={"flex items-center gap-3"}>
        <Smartphone className={"size-5"} />
        <p className={"text-sm text-foreground"}>{phone}</p>
      </div>

      <Button
        onClick={handleCopyPhone}
        variant={"outline"}
        size={"sm"}
        className={"rounded-full"}
      >
        Copiar
      </Button>
    </div>
  )
}