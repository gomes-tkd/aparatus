"use client";
import React from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = React.useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    router.push(`/barbershops?search=${encodeURIComponent(search)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        type={"text"}
        className={"border-border rounded-full"}
        placeholder={"Pesquise serviços ou barbearias"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        type={"submit"}
        variant={"default"}
        size={"icon"}
        className={"rounded-full"}
      >
        <SearchIcon />
      </Button>
    </form>
  );
}
