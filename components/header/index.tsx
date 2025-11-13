"use client";

import { useState } from "react";
import { SidebarMenu } from "@/components/sidebar-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      <SidebarMenu 
        isOpen={isSidebarOpen} 
        onOpenChange={setIsSidebarOpen} 
      />
    </>
  );
}