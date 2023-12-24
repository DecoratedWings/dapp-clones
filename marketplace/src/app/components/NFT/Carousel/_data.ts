export const images = [
    {
      id: "01",
      src: "https://picsum.photos/seed/16/1500",
      alt: "Mystic Nebula Collection",
      title: "Mystic Nebula",
      description: "A swirl of colors reminiscent of distant galaxies.",
    },
    {
      id: "02",
      src: "https://picsum.photos/seed/17/1500",
      alt: "Solar Serenades Collection",
      title: "Solar Serenades",
      description: "Harmonious tunes from the very heart of the universe.",
    },
    {
      id: "03",
      src: "https://picsum.photos/seed/18/1500",
      alt: "Lunar Lullaby Collection",
      title: "Lunar Lullaby",
      description: "The serene dance of the moon amidst the stars.",
    },
    {
      id: "04",
      src: "https://picsum.photos/seed/19/1500",
      alt: "Galactic Glitter Collection",
      title: "Galactic Glitter",
      description: "The dazzling sparkle from faraway constellations.",
    },
    {
      id: "05",
      src: "https://picsum.photos/seed/20/1500",
      alt: "Stellar Stories Collection",
      title: "Stellar Stories",
      description: "Narratives from the vast expanse of the cosmos.",
    },
    {
      id: "06",
      src: "https://picsum.photos/seed/21/1500",
      alt: "Celestial Symphony Collection",
      title: "Celestial Symphony",
      description: "Melodies whispered by the winds of space.",
    },
    {
      id: "07",
      src: "https://picsum.photos/seed/22/1500",
      alt: "Orbiting Odes Collection",
      title: "Orbiting Odes",
      description: "Poems inspired by the revolutions of the planets.",
    },
  ];
  
  
  export const products = [
    {
      id: "1",
      name: "Bamboo Tan",
      currency: "USD",
      price: 199,
      flag: "new",
      imageUrl: "https://picsum.photos/seed/23/1500",
      rating: 4,
      ratingCount: 1,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images,
    },
    {
      id: "2",
      name: "Iconic Turquoise",
      currency: "USD",
      price: 199,
      salePrice: 179.99,
      flag: "on-sale",
      imageUrl: "https://picsum.photos/seed/24/1500",
      rating: 4,
      ratingCount: 12,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images,
    },
    {
      id: "3",
      name: "Marble Leather",
      currency: "USD",
      price: 199,
      imageUrl: "https://picsum.photos/seed/25/1500",
      rating: 4,
      ratingCount: 12,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images,
    },
    {
      id: "4",
      name: "Silve wolf",
      currency: "GBP",
      price: 199,
      imageUrl: "https://picsum.photos/seed/26/1500",
      rating: 5,
      ratingCount: 1,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
      images,
    },
  ];
  
  export type ElementType<T extends ReadonlyArray<unknown>> =
    T extends ReadonlyArray<infer ElementType> ? ElementType : never;
  
  export type Product = ElementType<typeof products>;
  export type ProductImage = ElementType<typeof images>;