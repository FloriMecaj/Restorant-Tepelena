export const menuItem = {
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    { name: "language", type: "string", readOnly: true, hidden: true },
    { name: "name", title: "Name", type: "string" },
    { name: "price", title: "Price", type: "string" },
    { name: "priceUnit", title: "Price Unit (e.g., kg, L)", type: "string" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Main Courses", value: "main" },
          { title: "Salads", value: "salads" },
          { title: "Sides & Breads", value: "sides" },
          { title: "Drinks", value: "drinks" },
        ],
      },
    },
    { name: "description", title: "Description", type: "text" },
    {
      name: "image",
      title: "Dish Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "isFeatured",
      title: "Show on Homepage?",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "language",
      media: "image",
    },
    prepare(selection: { title?: string; subtitle?: string; media?: unknown }) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        // We add a check to make sure subtitle is a string before calling toUpperCase
        subtitle:
          typeof subtitle === "string"
            ? `[${subtitle.toUpperCase()}]`
            : "No Language Set",
        media: media,
      };
    },
  },
};
