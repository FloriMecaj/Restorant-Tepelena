"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./Header";

interface NavProps {
  underlineClassName: string;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Nav = ({ underlineClassName, handleScroll }: NavProps) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <nav className="w-full max-md:hidden max-w-xl xl:max-w-4xl justify-between items-center font-medium  mx-8 flex lg:text-lg">
      {navItems.map((item, idx) => (
        <div
          key={`nav-item-${idx}`}
          className="flex group text-center items-center flex-col w-20 lg:w-24"
        >
          <Link
            onClick={(e) => {
              setIsActive(idx);
              handleScroll(e, item.href);
            }}
            className="py-4 transition-all w-20 duration-200 lg:w-24"
            href={item.href}
          >
            {item.title}
          </Link>
          <hr
            className={clsx(
              "transition-all w-0 duration-200 border-b-2 border-primary group-hover:w-20",
              isActive === idx && "w-20",
              underlineClassName
            )}
          />
        </div>
      ))}
    </nav>
  );
};
