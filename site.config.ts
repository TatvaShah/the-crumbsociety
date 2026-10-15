import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Crumb Society",
  tagline: "Desserts and catering in Brampton. Every bite feels exclusive.",
  category: "Home bakery and catering",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://the-crumbsociety.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#d6aabd" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton desserts and catering",
    headline: "Every bite feels exclusive",
    subhead:
      "Cupcakes, custom cakes, and catering made with care in Brampton. Proudly Black owned. Send a DM to order.",
    images: [
      { src: "/images/post-2.jpg", alt: "Custom edible image cake by The Crumb Society", width: 1080, height: 1440 },
      { src: "/images/post-4.jpg", alt: "Red velvet cupcakes", width: 720, height: 960 },
      { src: "/images/post-6.jpg", alt: "Thanksgiving dessert spread", width: 1080, height: 1329 },
    ],
    secondaryCta: { label: "See the sweets", href: "#gallery" },
  },

  highlights: [
    "Proudly Black owned",
    "Brampton, ON",
    "Desserts and catering",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Sweet treats, made with care",
    body: [
      "The Crumb Society is a Brampton home bakery baking desserts and catering for celebrations big and small. Every bite is meant to feel exclusive.",
      "From custom cakes with edible imaging to cupcakes and dessert trays, send a DM with your date and idea and we will take it from there.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Custom cake with edible photos and butterflies", width: 1080, height: 1440 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    intro: "Cupcakes, custom cakes, and dessert catering. Message for flavours, sizes, and current pricing.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date, size, and design.",
    groups: [
      {
        title: "Favourites",
        items: [
          { name: "Cupcakes", description: "Dozen and tray orders, including seasonal flavours." },
          { name: "Custom cakes", description: "Celebration cakes, including edible image designs." },
          { name: "Mini bundt cakes", description: "A sweet add on for your order." },
          { name: "Dessert catering", description: "Trays and treats for gatherings." },
        ],
      },
    ],
    footnote: "DM to order. Share your date, guest count, and flavour ideas.",
  },

  gallery: {
    title: "Fresh from the kitchen",
    items: [
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "Edible image birthday cake", caption: "Custom edible image cake", href: "https://www.instagram.com/p/DefgCXtjfxO/" },
      { src: "/images/post-4.jpg", width: 720, height: 960, alt: "Red velvet cupcakes in a gift box", caption: "Red velvet cupcakes", href: "https://www.instagram.com/p/DefC827HZyT/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Fall cupcake deal flyer", caption: "Fall cupcake deal", href: "https://www.instagram.com/p/DefdsRRMq0z/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1329, alt: "Thanksgiving desserts", caption: "Happy Thanksgiving from us", href: "https://www.instagram.com/p/Deadda8N5ns/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1920, alt: "Baking in progress", caption: "Just one crumb at a time", href: "https://www.instagram.com/p/DefCJnOu3o4/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1920, alt: "Baker progress reel still", caption: "How far we have come", href: "https://www.instagram.com/p/DefGY3ouRTg/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "the.crumbsociety",
    embeds: [
      "https://www.instagram.com/p/DefgCXtjfxO/",
      "https://www.instagram.com/p/DefC827HZyT/",
      "https://www.instagram.com/p/DefdsRRMq0z/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi The Crumb Society! I would like to order.\nDate needed:\nItem (cupcakes, cake, catering):\nQuantity or size:\nFlavour or design idea:\nPickup or delivery:\nNotes:",
    links: [],
    note: "DM to order. Share your date and what you need.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, what you want, quantity or size, and any flavour or design ideas." },
    { q: "Where are you based?", a: "The Crumb Society is based in Brampton, Ontario." },
    { q: "Do you do custom cakes?", a: "Yes. Custom cakes are available, including edible image designs. Share your idea in a DM for a quote." },
    { q: "Do you cater events?", a: "Yes. Desserts and catering for gatherings. Message with your guest count and date." },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "The Crumb Society | Desserts and catering in Brampton",
    description:
      "Home bakery in Brampton offering cupcakes, custom cakes, and dessert catering. Proudly Black owned. Order by Instagram DM.",
    keywords: [
      "Brampton bakery",
      "cupcakes Brampton",
      "custom cakes Brampton",
      "dessert catering Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
