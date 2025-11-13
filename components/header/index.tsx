import React from "react";
import Image from "next/image";
import LogoAparatus from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className={"flex items-center justify-between px-5 py-6"}>
      <Image
        src={LogoAparatus}
        alt={"Logo Aparatus"}
        width={100}
        height={26}
      />
      <Button variant={"outline"} size={"icon"}>
        <MenuIcon />
      </Button>
    </header>
  )
}