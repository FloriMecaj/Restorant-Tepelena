import React from "react";
import { Menu } from "@/components/alb-menu/Menu";
import { albMenuMetadata } from "@/components/Metadata/metadata";

export const metadata = albMenuMetadata;

const Page = () => {
  return (
    <div className="w-full h-full">
      <Menu />
    </div>
  );
};

export default Page;
