export interface Dish {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  priceUnit?: "kg";
}

export interface MenuCategory {
  id: string;
  name: string;
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  priceUnit?: string; // NEW: Add an optional priceUnit property
}

export const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "LAMB/GOAT ON A SPIT",
    category: "main",
    description: "Cooked on a rotating spit for about 2 hours.",
    price: "3000.00",
    image: "/images/mish.jpeg",
    priceUnit: "kg",
  },
  {
    id: 3,
    name: "KUKUREC",
    category: "main",
    description: "Rolled lamb/goat offals with tripe, cooked on a spit.",
    price: "800.00",
    image: "/images/kukurec.jpeg",
  },
  {
    id: 11,
    name: "MEETBALLS",
    category: "main",
    description:
      "Grilled meatballs made with a blend of minced meat, herbs, and spices.",
    price: "400.00",
    image: "/images/qofte.jpeg",
  },
  {
    id: 19,
    name: "CORNBREAD",
    category: "sides",
    description: "Traditional Albanian cornbread toasted on a grill.",
    price: "150.00",
    image: "/images/buk.jpeg",
  },
  {
    id: 28,
    name: "LAMB/GOAT OFFALS",
    category: "main",
    description: "Grilled at a high temperature for 20 minutes.",
    price: "1000.00",
    image: "/images/tebrendshme.jpeg",
  },
  {
    id: 10,
    name: "ALBANIAN STYLE MEAT PIE",
    category: "main",
    description: "Traditional Albanian meat pie with a flaky crust.",
    price: "150.00",
    image: "/images/byrek.jpeg",
  },
];

export const menuCategories: MenuCategory[] = [
  { id: "main", name: "Main Courses" },
  { id: "salads", name: "Salads" },
  { id: "sides", name: "Sides & Breads" },
  { id: "drinks", name: "Drinks" },
];

export const menuItems: MenuItem[] = [
  // --- Main Courses ---
  {
    id: 1,
    name: "LAMB/GOAT ON A SPIT",
    category: "main",
    description: "Cooked on a rotating spit for about 2 hours.",
    price: "3000.00",
    priceUnit: "kg", // ADDED
  },
  {
    id: 36,
    name: "LAMB/GOAT ON A SPIT",
    category: "main",
    description: "Cooked on a rotating spit for about 2 hours.",
    price: "1500.00",
    priceUnit: "1/2 kg", // ADDED
  },
  {
    id: 37,
    name: "LAMB/GOAT ON A SPIT",
    category: "main",
    description: "Cooked on a rotating spit for about 2 hours.",
    price: "1000.00",
  },
  {
    id: 2,
    name: "LAMB/GOAT CHOPS",
    category: "main",
    description: "Grilled at a high temperature for 20 minutes.",
    price: "3000.00",
    priceUnit: "kg", // ADDED
  },
  {
    id: 38,
    name: "LAMB/GOAT CHOPS",
    category: "main",
    description: "Grilled at a high temperature for 20 minutes.",
    price: "1500.00",
    priceUnit: "1/2 kg", // ADDED
  },
  {
    id: 39,
    name: "LAMB/GOAT CHOPS",
    category: "main",
    description: "Grilled at a high temperature for 20 minutes.",
    price: "1000.00",
  },
  {
    id: 3,
    name: "KUKUREC",
    category: "main",
    description: "Rolled lamb/goat offals with tripe, cooked on a spit.",
    price: "800.00",
  },
  {
    id: 4,
    name: "LAMB/GOAT OFFALS",
    category: "main",
    description: "Grilled at a high temperature for 20 minutes.",
    price: "1000.00",
  },
  {
    id: 5,
    name: "LAMB/GOAT HEAD",
    category: "main",
    description: "Lamb/Goat head cooked on a spit for 2 hours.",
    price: "700.00",
  },
  {
    id: 40,
    name: "PEELED LAMB/GOAT HEAD",
    category: "main",
    description: "Lamb/Goat head cooked on a spit for 2 hours.",
    price: "800.00",
  },
  {
    id: 6,
    name: "ARAPASH",
    category: "main",
    description:
      "Traditional dish with lamb/goat offal, corn flour, butter, etc.",
    price: "500.00",
  },
  {
    id: 7,
    name: "BEEF STEAK",
    category: "main",
    description: "Juicy grilled beef steak, with a touch of salt.",
    price: "3000.00",
    priceUnit: "kg", // ADDED
  },
  {
    id: 41,
    name: "BEEF STEAK",
    category: "main",
    description: "Juicy grilled beef steak, with a touch of salt.",
    price: "1500.00",
  },
  {
    id: 8,
    name: "MEATBALLS",
    category: "main",
    description: "Grilled meatballs, with spices and herbs.",
    price: "400.00",
  },
  {
    id: 9,
    name: "CHICKEN BREAST",
    category: "main",
    description:
      "Grilled chicken breast, lightly seasoned for a perfect smoky flavor.",
    price: "800.00",
  },
  {
    id: 10,
    name: "ALBANIAN STYLE MEAT PIE",
    category: "main",
    description: "Traditional meat pie with a flaky crust.",
    price: "150.00",
  },

  // Salads
  {
    id: 11,
    name: "VILLAGE SALAD",
    category: "salads",
    description:
      "Tomatoes, cucumbers, onions, peppers, olives, green salad, feta cheese.",
    price: "400.00",
  },
  {
    id: 12,
    name: "GREEN SALAD",
    category: "salads",
    description: "Green salad, onions, olives, lemon.",
    price: "350.00",
  },
  {
    id: 13,
    name: "ARUGULA SALAD",
    category: "salads",
    description: "Arugula, pomodorini, kashkaval cheese.",
    price: "400.00",
  },
  {
    id: 14,
    name: "CABBAGE SALAD",
    category: "salads",
    description:
      "White cabbage, red cabbage, green salad, onion, carrot, lemon.",
    price: "400.00",
  },
  {
    id: 15,
    name: "BOILED VEGETABLES",
    category: "salads",
    description: "Cauliflower, carrots, potato, beet, spinach.",
    price: "4000.00",
  },
  {
    id: 16,
    name: "GRILLED VEGETABLES",
    category: "salads",
    description: "Red pepper, zucchini, eggplant.",
    price: "4000.00",
  },
  {
    id: 17,
    name: "PICKLED VEGETABLES",
    category: "salads",
    description: "Pickled tomatoes, cabbage, peppers, onions.",
    price: "350.00",
  },
  {
    id: 18,
    name: "OLIVES SALAD",
    category: "salads",
    description: "Olives, onion, lemon.",
    price: "350.00",
  },

  // Sides & Breads
  {
    id: 19,
    name: "CORNBREAD",
    category: "sides",
    description: "Traditional Albanian cornbread toasted on a grill.",
    price: "150.00",
  },
  {
    id: 20,
    name: "CORNBREAD WITH BRINE",
    category: "sides",
    description:
      "Traditional Albanian cornbread with brine toasted on a grill.",
    price: "200.00",
  },
  {
    id: 21,
    name: "FRENCH FRIES",
    category: "sides",
    description: "Hand-cut fried potatoes.",
    price: "300.00",
  },
  {
    id: 22,
    name: "FETTA CHEESE",
    category: "sides",
    description: "Feta cheese with olives, olive oil and oregano.",
    price: "4000.00",
  },
  {
    id: 23,
    name: "GRILLED FETTA CHEESE",
    category: "sides",
    description: "Grilled feta cheese.",
    price: "450.00",
  },
  {
    id: 24,
    name: "KASHKAVAL CHEESE",
    category: "sides",
    description: "Fresh block of kashkaval cheese.",
    price: "400.00",
  },
  {
    id: 25,
    name: "GRILLED KASHKAVAL CHEESE",
    category: "sides",
    description: "Grilled kashkaval cheese.",
    price: "450.00",
  },
  {
    id: 26,
    name: "YOGURT SAUCE",
    category: "sides",
    description: "Traditional Albanian yogurt sauce.",
    price: "400.00",
  },
  {
    id: 44,
    name: "CREAMY PEPPER",
    category: "sides",
    description: "Traditional Albanian creamy pepper.",
    price: "350.00",
  },

  // Drinks
  {
    id: 27,
    name: "RED WINE OF THE HOUSE",
    category: "drinks",
    description: "Traditional Albanian red wine.",
    price: "1200.00",
    priceUnit: "L",
  },
  {
    id: 43,
    name: "GLASS OF RED WINE",
    category: "drinks",
    description: "Traditional Albanian red wine.",
    price: "300.00",
  },
  {
    id: 28,
    name: "RAKI",
    category: "drinks",
    description: "Traditional Albanian grape brandy.",
    price: "100.00",
  },
  {
    id: 29,
    name: "BUTTERMILK",
    category: "drinks",
    description: "Traditional Albanian buttermilk.",
    price: "150.00",
  },
  {
    id: 30,
    name: "WATER",
    category: "drinks",
    description: "Fresh spring water.",
    price: "100.00",
  },
  {
    id: 31,
    name: "BOTTLED WATER",
    category: "drinks",
    description: "Fresh spring water.",
    price: "250.00",
  },
  {
    id: 32,
    name: "REFRESHING DRINK",
    category: "drinks",
    description: "Refreshing drinks (Pepsi, Fanta, Coca Cola, etc).",
    price: "200.00",
  },
  {
    id: 33,
    name: "BOTTLE OF BEER",
    category: "drinks",
    description: "Cold bottle of beer.",
    price: "250.00",
  },
  {
    id: 34,
    name: "BIG DRAFT BEER",
    category: "drinks",
    description: "Big pint of beer.",
    price: "350.00",
  },
  {
    id: 35,
    name: "SMALL DRAFT BEER",
    category: "drinks",
    description: "Small pint of beer.",
    price: "150.00",
  },
];
