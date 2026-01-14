export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "language", type: "string", readOnly: true, hidden: true },
    { name: "heroTitle", title: "Hero Title", type: "string" },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle (Dancing Script)",
      type: "string",
    },
    { name: "heroDescription", title: "Hero Description", type: "text" },

    { name: "aboutTitle", title: "About Us Title", type: "string" },
    { name: "aboutText1", title: "About Us Paragraph 1", type: "text" },
    { name: "aboutText2", title: "About Us Paragraph 2", type: "text" },
    {
      name: "founderRole",
      title: "Founder Role Label (e.g. Founder & Head Chef)",
      type: "string",
    },

    {
      name: "featuredTitle",
      title: "Featured Dishes Section Title",
      type: "string",
    },
    {
      name: "featuredDescription",
      title: "Featured Dishes Section Description",
      type: "text",
    },

    { name: "specialityTitle", title: "Speciality Title", type: "string" },
    {
      name: "specialityContent",
      title: "Speciality Description",
      type: "text",
    },

    { name: "mapsTitle", title: "Maps Section Title", type: "string" },
    { name: "mapsDescription", title: "Maps Description", type: "text" },

    { name: "footerDescription", title: "Footer Description", type: "text" },
  ],
};
