export const images2 = [
    {
      id: "01",
      src: "https://picsum.photos/seed/1/1500",
      alt: "Starry Night + Celestial Collection",
      title: "Starry Night",
      description: "An ethereal dance of twinkling lights against the velvet sky.",
    },
    {
      id: "02",
      src: "https://picsum.photos/seed/2/1500",
      alt: "Lost Oasis + Desert Mirage Collection",
      title: "Lost Oasis",
      description: "A hidden gem of water and palm trees amidst the endless sand dunes.",
    },
    {
      id: "03",
      src: "https://picsum.photos/seed/3/1500",
      alt: "Urban Pulse + Cityscapes Collection",
      title: "Urban Pulse",
      description: "The heart of the city, alive with neon lights and midnight stories.",
    },
    {
      id: "04",
      src: "https://picsum.photos/seed/4/1500",
      alt: "Whispering Woods + Nature's Secrets Collection",
      title: "Whispering Woods",
      description: "Ancient trees telling tales of the ages, only if you listen closely.",
    },
    {
      id: "05",
      src: "https://picsum.photos/seed/5/1500",
      alt: "Crimson Sails + Ocean's Adventure Collection",
      title: "Crimson Sails",
      description: "Bold sails catching the wind, heading towards horizons unknown.",
    },
    {
      id: "06",
      src: "https://picsum.photos/seed/6/1500",
      alt: "Golden Harvest + Seasons Collection",
      title: "Golden Harvest",
      description: "Fields of gold, ripe and ready for the season's bounty.",
    },
    {
      id: "07",
      src: "https://picsum.photos/seed/7/1500",
      alt: "Mountain's Echo + Majestic Heights Collection",
      title: "Mountain's Echo",
      description: "Majestic peaks standing tall, echoing the songs of ages.",
    },
    {
      id: "08",
      src: "https://picsum.photos/seed/8/1500",
      alt: "Frozen Serenity + Polar Wonders Collection",
      title: "Frozen Serenity",
      description: "The pristine beauty of icy realms, untouched and serene.",
    },
    {
      id: "09",
      src: "https://picsum.photos/seed/9/1500",
      alt: "Lunar Dance + Cosmic Wonders Collection",
      title: "Lunar Dance",
      description: "The silver orb in its celestial waltz, lighting up the night.",
    },
    {
      id: "10",
      src: "https://picsum.photos/seed/10/1500",
      alt: "Emerald Canopy + Rainforest Mysteries Collection",
      title: "Emerald Canopy",
      description: "The lush and vibrant roof of nature's grandest cathedral.",
    },
  ];
  
  
  export const products = [
    {
      id: "1",
      name: "Bamboo Tan",
      currency: "USD",
      price: 199,
      flag: "new",
      imageUrl: "https://picsum.photos/seed/11/1500",
      rating: 4,
      ratingCount: 1,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images2,
    },
    {
      id: "2",
      name: "Iconic Turquoise",
      currency: "USD",
      price: 199,
      salePrice: 179.99,
      flag: "on-sale",
      imageUrl: "https://picsum.photos/seed/12/1500",
      rating: 4,
      ratingCount: 12,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images2,
    },
    {
      id: "3",
      name: "Marble Leather",
      currency: "USD",
      price: 199,
      imageUrl: "https://picsum.photos/seed/13/1500",
      rating: 4,
      ratingCount: 12,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images2,
    },
    {
      id: "4",
      name: "Silve wolf",
      currency: "GBP",
      price: 199,
      imageUrl: "https://picsum.photos/seed/14/1500",
      rating: 5,
      ratingCount: 1,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images2,
    },
  ];
  
  export type ElementType<T extends ReadonlyArray<unknown>> =
    T extends ReadonlyArray<infer ElementType> ? ElementType : never;
  
  export type Product = ElementType<typeof products>;
  export type ProductImage = ElementType<typeof images2>;