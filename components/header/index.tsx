"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "@/components/sidebar-menu";
import { Button } from "@/components/ui/button";
import { MenuIcon, MessageCircleIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogoSVG from "@/public/logo.svg";

export default function Header() {
  return (
    <header className={"flex items-center justify-between bg-white px-5 py-6"}>
      <Image src={LogoSVG} alt={"Aparatus Logo"} width={100} height={26.09} />
      <div className={"flex items-center gap-2"}>
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/chat"}>
            <MessageCircleIcon />
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className={"w-[370px] p-0"}>
            <SheetHeader className={"border-b px-5 py-6 text-left"}>
              <SheetTitle className={"text-lg font-bold"}>Menu</SheetTitle>
            </SheetHeader>
            <SidebarMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}