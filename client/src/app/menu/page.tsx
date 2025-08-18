import React from "react";
import { engMenuMetadata } from "@/components/Metadata/metadata";
import { MenuPage } from "@/components/MenuPage/MenuPage";

export const metadata = engMenuMetadata;

const Page = () => {
  return (
    <div className="w-full h-full">
      <MenuPage />
    </div>
  );
};

export default Page;
