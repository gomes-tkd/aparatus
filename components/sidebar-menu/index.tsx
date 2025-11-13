"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Home, Calendar, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

interface SidebarMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SidebarMenu({ isOpen, onOpenChange }: SidebarMenuProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    onOpenChange(false);
  };

  const handleNavigateHome = () => {
    router.push("/");
    onOpenChange(false);
  };

  const handleNavigateBookings = () => {
    router.push("/bookings");
    onOpenChange(false);
  };

  // Interface quando usuário está deslogado
  if (!session?.user) {
    return (
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-[300px] p-0">
          <SheetHeader className="border-b border-solid p-5 text-left">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-2 p-5">
            <div className="flex items-center gap-2 rounded-lg border border-solid p-3">
              <User className="h-8 w-8 text-muted-foreground" />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Olá, faça seu login!</p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="justify-start gap-2"
              onClick={handleNavigateHome}
            >
              <Home className="h-5 w-5" />
              Início
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Interface quando usuário está logado
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="border-b border-solid p-5 text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 p-5">
          {/* User Info */}
          <div className="flex items-center gap-3 rounded-lg border border-solid p-3">
            <Avatar>
              <AvatarImage src={session.user.image || ""} />
              <AvatarFallback>
                {session.user.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{session.user.name}</p>
              <p className="text-xs text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </div>

          <Separator className="my-2" />

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={handleNavigateHome}
          >
            <Home className="h-5 w-5" />
            Início
          </Button>

          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={handleNavigateBookings}
          >
            <Calendar className="h-5 w-5" />
            Agendamentos
          </Button>

          <Separator className="my-2" />

          {/* Category Buttons (não fazem nada por enquanto) */}
          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold uppercase text-muted-foreground">
              Categorias
            </p>
            <Button variant="ghost" className="w-full justify-start" disabled>
              Cabelo
            </Button>
            <Button variant="ghost" className="w-full justify-start" disabled>
              Barba
            </Button>
            <Button variant="ghost" className="w-full justify-start" disabled>
              Acabamento
            </Button>
            <Button variant="ghost" className="w-full justify-start" disabled>
              Massagem
            </Button>
            <Button variant="ghost" className="w-full justify-start" disabled>
              Sobrancelha
            </Button>
          </div>

          <Separator className="my-2" />

          {/* Logout Button */}
          <Button
            variant="ghost"
            className="justify-start gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Sair
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}