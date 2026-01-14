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
    {
      name: "menuOrder",
      title: "Menu Order Number",
      type: "number",
      description:
        "Use 10, 20, 30... (10 shows first). This allows you to put new items in between later (like 15).",
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
      order: "menuOrder",
      lang: "language",
      media: "image",
    },
    prepare(selection: {
      title?: string;
      order?: number;
      lang?: string;
      media?: unknown;
    }) {
      const { title, order, lang, media } = selection;

      return {
        title: `${order !== undefined ? order : "??"} - ${title || "Untitled"}`,
        subtitle:
          typeof lang === "string"
            ? `[${lang.toUpperCase()}]`
            : "No Language Set",

        media: media,
      };
    },
  },
};
