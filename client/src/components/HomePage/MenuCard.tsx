// /components/MenuCard.tsx (Updated)

import Image from "next/image";
import { type Dish } from "@/lib/data";

interface MenuCardProps {
  dish: Dish;
}

export const MenuCard = ({ dish }: MenuCardProps) => {
  return (
    <div className="bg-cream rounded-2xl shadow-md overflow-hidden menu-transition">
      <div className="relative w-full h-48">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-6">
        <h3 className="font-playfair font-bold text-xl mb-2 text-woodBrown">
          {dish.name}
        </h3>
        <p className="font-dancing text-oliveGreen text-lg mb-3">
          {dish.category}
        </p>
        <p className="font-opensans text-woodBrown mb-4">{dish.description}</p>
        <p className="font-playfair font-semibold text-terracotta">
          {/* FIX: This line now conditionally adds the unit if it exists */}
          {dish.price} € {dish.priceUnit && `/ ${dish.priceUnit}`}
        </p>
      </div>
    </div>
  );
};
