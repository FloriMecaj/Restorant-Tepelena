export const metadata = {
  title: "Restaurant Tepelena | Traditional Albanian Cuisine in Tirana",
  description:
    "Restaurant Tepelena, a staple in Tirana since 1998, serves authentic Albanian dishes in a warm, traditional setting. A must-visit restaurant for lovers of Albanian cuisine.",
  keywords:
    "traditional restaurant, restaurants in Tirana, Restaurant Tepelena, Albanian cuisine, best restaurants in Tirana, Tirana dining, authentic Albanian food, traditional food in Tirana, Tirana restaurants, restaurant in Albania",

  openGraph: {
    title: "Restaurant Tepelena | Traditional Albanian Cuisine in Tirana",
    description:
      "Experience authentic Albanian cuisine at Restaurant Tepelena, a renowned restaurant in Tirana since 1998.",
    images: [
      {
        url: "/images/restaurant-tepelena.jpg",
        width: 1200,
        height: 630,
        alt: "Traditional Albanian food at Restaurant Tepelena",
      },
    ],
    url: "https://restauranttepelena.com",
    siteName: "Restaurant Tepelena",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Restaurant Tepelena | Traditional Albanian Cuisine in Tirana",
    description:
      "Taste the finest traditional Albanian dishes at Restaurant Tepelena in Tirana, operating since 1998.",
    images: ["https://restauranttepelena.com/images/og-image.jpg"],
  },

  metadataBase: new URL("https://restauranttepelena.com"),

  alternates: {
    canonical: "/",
  },

  themeColor: "#1e1e1e",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// Metadata for menus
export const albMenuMetadata = {
  ...metadata,
  title: "Restaurant Tepelena | Menu Shqip",
};

export const engMenuMetadata = {
  ...metadata,
  title: "Restaurant Tepelena | English Menu",
};

export const viewport = {
  themeColor: "#1e1e1e",
  width: "device-width",
  initialScale: 1,
};
