import React from "react";
import Image from "next/image";
import SearchInput from "@/components/search-input";
import BannerImage from "@/public/banner.png";

export default function Home() {
  return (
    <div>
      <SearchInput />
      <Image
        src={BannerImage}
        alt={"Banner Aparatus"}
        sizes={"100vw"}
        className={"h-auto w-full"}
        priority={true}
      />
    </div>
  );
}
