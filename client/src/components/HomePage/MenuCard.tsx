import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityMenuItem } from "@/lib/data";

interface MenuCardProps {
  dish: SanityMenuItem;
}

export const MenuCard = ({ dish }: MenuCardProps) => {
  return (
    <div className="bg-cream rounded-2xl shadow-md overflow-hidden menu-transition h-full">
      <div className="relative w-full h-48">
        {dish.image ? (
          <Image
            src={urlFor(dish.image).url()}
            alt={dish.name}
            fill
            className="object-cover rounded-t-2xl"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-playfair font-bold text-xl mb-2 text-woodBrown">
          {dish.name}
        </h3>
        <p className="font-dancing text-oliveGreen text-lg mb-3">
          {dish.category}
        </p>
        <p className="font-opensans text-woodBrown mb-4 line-clamp-2">
          {dish.description}
        </p>
        <p className="font-playfair font-semibold text-terracotta">
          {dish.price} ALL {dish.priceUnit && `/ ${dish.priceUnit}`}
        </p>
      </div>
    </div>
  );
};
