import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  return (
    <div className=" flex items-center gap-2">
      <Input
        type={"text"}
        className={"border-border rounded-full"}
        placeholder={"Search for services ou barbershops..."}
      />
      <Button className={"rounded-full"} variant={"default"} size={"icon"}>
        <SearchIcon />
      </Button>
    </div>
  );
}