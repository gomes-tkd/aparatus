"use client";
import { authClient } from "@/lib/auth-client";
import {
  CalendarDaysIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet";

export default function SidebarMenu() {
  const { data: session } = authClient.useSession();

  async function handleLogin() {
    await authClient.signIn.social({
      provider: "google"
    });
  }

  async function handleLogout() {
    await authClient.signOut();
  }

  return (
    <div className={"flex h-full flex-col gap-6 py-6"}>
      {/* section user */}
      <div className={"px-5"}>
        {session?.user ? (
          <div className={"flex items-center gap-3"}>
            <Avatar className={"size-12"}>
              <AvatarImage src={session.user.image! ?? ""} />
            </Avatar>
            <AvatarFallback>
              {session.user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>

            <div className={"flex flex-col leading-tight"}>
              <p className={"text-base font-semibold"}>{session.user.name}</p>
              <p className={"text-muted-foreground text-sm"}>{session.user.email}</p>
            </div>
          </div>
        ) : (
          <div className={"flex items-center justify-between"}>
            <div className={"flex h-12 items-center"}>
              <p className={"text-base font-semibold"}>Bem-vindo! Faça seu login!</p>
            </div>

            <Button onClick={handleLogin} className={"gap-3 rounded-full px-6 py-3"}>
              <span className={"tet-sm font-semibold"}>Login</span>
              <LogInIcon className={"size-4"} />
            </Button>
          </div>
        )}
      </div>

      {/*  Navigation Buttons*/}
      <div className="flex flex-col">
        <SheetClose asChild>
          <Link href={"/"}>
            <Button variant={"ghost"} className={"h-auto w-full justify-start gap-3 rounded-full px-5 py-3"}>
              <HomeIcon className={"size-5"} />
              <span className={"text-sm font-medium"}>Início</span>
            </Button>
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link href={"/bookings"}>
            <Button variant={"ghost"} className={"h-auto w-full justify-start gap-3 rounded-full px-5 py-3"}>
              <CalendarDaysIcon className={"size-4"} />
              <span className="text-sm font-medium">
                Agendamentos
              </span>
            </Button>
          </Link>
        </SheetClose>
      </div>

      <Separator />

      {/*Category Buttons*/}
      <div className={"flex flex-col gap-1"}>
        <Link
          href={"/barbershops?search=barba"}
          className={"h-10 w-full cursor-default justify-start rounded-full px-5 py-3 hover:bg-transparent"}
        >
          <span className="text-sm font-medium">Barba</span>
        </Link>

        <Link
          href={"/barbershops?search=cabelo"}
          className={"h-10 w-full cursor-default justify-start rounded-full px-5 py-3 hover:bg-transparent"}
        >
          <span className="text-sm font-medium">Cabelo</span>
        </Link>

        <Link
          href={"/barbershops?search=acabamento"}
          className={"h-10 w-full cursor-default justify-start rounded-full px-5 py-3 hover:bg-transparent"}
        >
          <span className="text-sm font-medium">Acabamento</span>
        </Link>

        <Link
          href={"/barbershops?search=sobrancelha"}
          className={"h-10 w-full cursor-default justify-start rounded-full px-5 py-3 hover:bg-transparent"}
        >
          <span className="text-sm font-medium">Sobrancelha</span>
        </Link>

        <Link
          href={"/barbershops?search=pézinho"}
          className={"h-10 w-full cursor-default justify-start rounded-full px-5 py-3 hover:bg-transparent"}
        >
          <span className="text-sm font-medium">Pézinho</span>
        </Link>

        <Link
          href={"/barbershops?search=progressiva"}
          className={"h-10 w-full cursor-default justify-start rounded-full px-5 py-3 hover:bg-transparent"}
        >
          <span className="text-sm font-medium">Progressiva</span>
        </Link>
      </div>

      <Separator />

      {/* Logout Button */}
      <SheetClose asChild>
        <Button
          onClick={handleLogout}
          variant={"ghost"}
          className={"w-full justify-start gap-3 rounded-full px-5 py-3"}
        >
          <LogOutIcon className={"size-4"} />
          <span className={"text-muted-foreground text-sm font-medium"}>Sair</span>
        </Button>
      </SheetClose>
    </div>
  );
}
