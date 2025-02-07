import React from "react";
import { Menu } from "@/components/Menu/Menu";
import { engMenuMetadata } from "@/components/Metadata/metadata";

export const metadata = engMenuMetadata;

const Page = () => {
  return (
    <div className="w-full h-full">
      <Menu />
    </div>
  );
};

export default Page;
