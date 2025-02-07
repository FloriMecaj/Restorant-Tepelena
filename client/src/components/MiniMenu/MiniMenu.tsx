import Link from "next/link";
import React from "react";

export const MiniMenu = () => {
  const menuItems = [
    {
      title: "LAMB/GOAT ON A SPIT",
      price: 2800,
      description: "Cooked on a rotating spit for about 2 hours.",
    },
    {
      title: "LAMB/GOAT CHOPS",
      price: 2800,
      description: "Grilled at a high temperature for 20 minutes.",
    },
    {
      title: "KUKUREC",
      price: 800,
      description: "Rolled lamb/goat offals with tripe, cooked on a spit.",
    },
    {
      title: "LAMB/GOAT OFFALS",
      price: 1000,
      description: "Grilled at a high temperature for 20 minutes.",
    },
    {
      title: "LAMB/GOAT HEAD",
      price: 700,
      description: "Lamb/Goat head cooked on a spit for 2 hours.",
    },
    {
      title: "ARAPASH",
      price: 500,
      description: "Traditional dish with lamb/goat offal, corn flour, etc.",
    },
    {
      title: "BEEF STEAK",
      price: 3000,
      description: "Juicy grilled beef steak, with a touch of salt.",
    },
    {
      title: "MEATBALLS",
      price: 400,
      description: "Grilled meatballs, with spices and herbs.",
    },
    {
      title: "CHICKEN BREAST",
      price: 800,
      description:
        "Grilled chicken breast, lightly seasoned for a perfect smoky flavor.",
    },
    {
      title: "ALBANIAN MEAT PIE",
      price: 150,
      description: "Traditional meat pie with a flaky crust.",
    },
  ];

  return (
    <div
      id="menu"
      className="w-full mx-auto flex flex-col gap-4 bg-gradient-to-b from-black to-transparent relative"
    >
      <div className="w-full bg-transparent px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl flex text-primary justify-start md:text-2xl">
            Menu
          </h2>
          <h3 className="text-4xl flex justify-start text-left font-bold text-primary mt-6 md:text-5xl">
            Have you tried our menus prepared by the masters of meat?
          </h3>
          <p className="text-lg flex justify-start text-secondary text-left mt-6 md:text-2xl">
            Our menu is crafted with the freshest ingredients and the most
            delicious recipes, ensuring every dish satisfies your cravings.
          </p>
          <div className="w-full py-16">
            <div className="block md:hidden">
              {menuItems.slice(0, 10).map((item, index) => (
                <div key={index} className="mb-6 text-left">
                  <div className="flex justify-between items-center">
                    <h4 className="text-primary font-bold text-xl">
                      {item.title}
                    </h4>
                    <span className="text-secondary text-xl">
                      ALL {item.price}
                    </span>
                  </div>
                  <p className="text-secondary text-sm">{item.description}</p>
                  <div className="border-t border-secondary my-2 opacity-50"></div>
                </div>
              ))}
            </div>
            <div className="hidden md:flex md:justify-between md:gap-14">
              <div className="w-1/2">
                {menuItems.slice(0, 5).map((item, index) => (
                  <div key={index} className="mb-6 text-left">
                    <div className="flex justify-between items-center">
                      <h4 className="text-primary font-bold text-xl">
                        {item.title}
                      </h4>
                      <span className="text-secondary text-xl">
                        ALL {item.price}
                      </span>
                    </div>
                    <p className="text-secondary text-sm">{item.description}</p>
                    <div className="border-t border-secondary my-2 opacity-50"></div>
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                {menuItems.slice(5, 10).map((item, index) => (
                  <div key={index} className="mb-6 text-left">
                    <div className="flex justify-between items-center">
                      <h4 className="text-primary font-bold text-xl">
                        {item.title}
                      </h4>
                      <span className="text-secondary text-xl">
                        ALL {item.price}
                      </span>
                    </div>
                    <p className="text-secondary text-sm">{item.description}</p>
                    <div className="border-t border-secondary my-2 opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-10 sm:gap-16">
              <div>
                <Link
                  className="border border-primary text-primary font-bold sm:py-2 sm:px-4 py-1 px-3 rounded transition-all duration-300 hover:bg-primary hover:text-black"
                  href="/alb-menu"
                >
                  ALB Menu
                </Link>
              </div>
              <div>
                <Link
                  className="border border-primary text-primary font-bold sm:py-2 sm:px-4 py-1 px-3 rounded transition-all duration-300 hover:bg-primary hover:text-black"
                  href="/eng-menu"
                >
                  ENG Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"></div>
    </div>
  );
};
