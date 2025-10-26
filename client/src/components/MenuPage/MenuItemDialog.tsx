import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";
import { MenuItem } from "@/lib/data";

export function MenuItemDialog({ item }: { item: MenuItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:bg-lightBrown transition-colors duration-300 ease-out cursor-pointer rounded-sm py-2 px-3">
          <div className="flex justify-between">
            <div>
              <h3 className="font-playfair font-bold text-lg text-woodBrown">
                {item.name}
              </h3>
              <p className="font-opensans text-woodBrown opacity-80">
                {item.description}
              </p>
            </div>
            <p className="font-playfair font-semibold text-terracotta whitespace-nowrap">
              {item.price} € {item.priceUnit && `/ ${item.priceUnit}`}
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="rounded-lg max-w-[300px] sm:max-w-[500px]">
        <DialogHeader>
          <img className="w-full h-64 object-cover my-6" src={item.image} alt="" />
          <DialogTitle className="text-xl font-playfair font-bold text-woodBrown">
            {item.name}
          </DialogTitle>
          <DialogDescription className="text-base pb-2 font-opensans text-woodBrown opacity-90">
            {item.description}
          </DialogDescription>
          <p className="text-xl font-playfair font-semibold text-terracotta">
            {item.price} € {item.priceUnit && `/ ${item.priceUnit}`}
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}