const shirts = [
  {
    id: "shirt-soft-cotton",
    name: "Shirt Soft Cotton",
    subtitle: "Lightweight jersey",
    price: "$49.00",
    badge: "New",
    image:
      "https://activoskateshop.com.co/wp-content/uploads/2025/07/IMG-20250726-WA0004.jpg",
    alt: "Soft cotton shirt",
  },
  {
    id: "zip-up-knit",
    name: "Zip Up Neck Shirt",
    subtitle: "Clean knit",
    price: "$64.00",
    badge: "Best",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuM4z4E_xyklN3ENOT2r4AoDJIbphrz4C3LA&s",
    alt: "Zip up neck shirt",
  },
  {
    id: "classic-long-sleeve",
    name: "Classic Long Sleeve",
    subtitle: "Soft combed cotton",
    price: "$58.00",
    badge: "Soft",
    image:
      "https://static.rfstat.com/mockup-maker/mockups/3968/ae35e4bc475d1c1fafa0a93645d6d872.webp",
    alt: "Classic long sleeve shirt",
  },
  {
    id: "minimal-polo-2",
    name: "Minimal Polo",
    subtitle: "Structured collar",
    price: "$54.00",
    badge: "New",
    image:
      "https://static.rfstat.com/mockup-maker/mockups/3971/1c3098c50f633c47f9f2a5f00521cf36.webp",
    alt: "Minimal polo shirt",
  },
  {
    id: "relaxed-crew-2",
    name: "Relaxed Crew",
    subtitle: "Everyday essential",
    price: "$44.00",
    badge: "Edit",
    image:
      "https://viniciuz.com.co/cdn/shop/files/3_87f996fb-c465-405e-bdb4-59390944c9a1.png?v=1750870274",
    alt: "Relaxed crew shirt",
  },
  {
    id: "slim-shirt-2",
    name: "Slim Shirt",
    subtitle: "Tailored fit",
    price: "$62.00",
    badge: "Trend",
    image:
      "https://viniciuz.com.co/cdn/shop/files/fc63ec62-4383-4853-a830-4f0252b76033.jpg?v=1750870492",
    alt: "Slim fit shirt",
  },
  {
    id: "minimal-polo",
    name: "Minimal Polo",
    subtitle: "Structured collar",
    price: "$54.00",
    badge: "New",
    image:
      "https://static.rfstat.com/mockup-maker/mockups/3971/1c3098c50f633c47f9f2a5f00521cf36.webp",
    alt: "Minimal polo shirt",
  },
  {
    id: "relaxed-crew",
    name: "Relaxed Crew",
    subtitle: "Everyday essential",
    price: "$44.00",
    badge: "Edit",
    image:
      "https://viniciuz.com.co/cdn/shop/files/3_87f996fb-c465-405e-bdb4-59390944c9a1.png?v=1750870274",
    alt: "Relaxed crew shirt",
  },
  {
    id: "slim-shirt",
    name: "Slim Shirt",
    subtitle: "Tailored fit",
    price: "$62.00",
    badge: "Trend",
    image:
      "https://viniciuz.com.co/cdn/shop/files/fc63ec62-4383-4853-a830-4f0252b76033.jpg?v=1750870492",
    alt: "Slim fit shirt",
  },
];

const shoes = [
  {
    id: "urban-sneakers",
    name: "Urban Sneakers",
    subtitle: "Street style",
    price: "$89.00",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    alt: "Urban sneakers shoes",
  },
  {
    id: "classic-white",
    name: "Classic White",
    subtitle: "Minimal design",
    price: "$79.00",
    badge: "Best",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    alt: "Classic white sneakers",
  },
  {
    id: "sport-runner",
    name: "Sport Runner",
    subtitle: "Breathable mesh",
    price: "$95.00",
    badge: "Sport",
    image:
      "https://images.unsplash.com/photo-1600180758895-7b7e1b6c1f93?w=800&q=80",
    alt: "Running shoes",
  },
];

const outfits = [
  {
    id: "street-set",
    name: "Street Set",
    subtitle: "Hoodie + jogger",
    price: "$120.00",
    badge: "Trend",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800&q=80",
    alt: "Streetwear outfit set",
  },
  {
    id: "summer-set",
    name: "Summer Set",
    subtitle: "Light fabric",
    price: "$98.00",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1520975922284-9f1c1b1dcb7c?w=800&q=80",
    alt: "Summer outfit set",
  },
  {
    id: "minimal-set",
    name: "Minimal Set",
    subtitle: "Clean style",
    price: "$110.00",
    badge: "Edit",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
    alt: "Minimal clothing set",
  },
];

const clothes = [
  {
    id: "oversize-tee",
    name: "Oversize Tee",
    subtitle: "Heavy cotton",
    price: "$39.00",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    alt: "Oversize t-shirt",
  },
  {
    id: "hoodie-basic",
    name: "Basic Hoodie",
    subtitle: "Soft fleece",
    price: "$69.00",
    badge: "Best",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    alt: "Basic hoodie",
  },
  {
    id: "crewneck",
    name: "Crewneck",
    subtitle: "Everyday wear",
    price: "$59.00",
    badge: "Soft",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    alt: "Crewneck sweatshirt",
  },
];

const glasses = [
  {
    id: "classic-sunglasses",
    name: "Classic Shades",
    subtitle: "UV protection",
    price: "$29.00",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    alt: "Classic sunglasses",
  },
  {
    id: "square-frame",
    name: "Square Frame",
    subtitle: "Modern look",
    price: "$35.00",
    badge: "Trend",
    image:
      "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=800&q=80",
    alt: "Square sunglasses",
  },
  {
    id: "black-matte",
    name: "Black Matte",
    subtitle: "Minimal style",
    price: "$32.00",
    badge: "Edit",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    alt: "Black matte sunglasses",
  },
];

const pants = [
  {
    id: "cargo-pants",
    name: "Cargo Pants",
    subtitle: "Utility fit",
    price: "$74.00",
    badge: "Trend",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
    alt: "Cargo pants",
  },
  {
    id: "slim-jeans",
    name: "Slim Jeans",
    subtitle: "Stretch denim",
    price: "$68.00",
    badge: "Best",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    alt: "Slim fit jeans",
  },
  {
    id: "jogger-pants",
    name: "Jogger Pants",
    subtitle: "Comfort wear",
    price: "$59.00",
    badge: "Edit",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80",
    alt: "Jogger pants",
  },
];

const caps = [
  {
    id: "classic-cap",
    name: "Classic Cap",
    subtitle: "Everyday style",
    price: "$25.00",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
    alt: "Classic baseball cap",
  },
  {
    id: "snapback-cap",
    name: "Snapback",
    subtitle: "Urban fit",
    price: "$29.00",
    badge: "Trend",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80",
    alt: "Snapback cap",
  },
  {
    id: "minimal-cap",
    name: "Minimal Cap",
    subtitle: "Clean design",
    price: "$27.00",
    badge: "Edit",
    image:
      "https://images.unsplash.com/photo-1593032465171-fbd7f3c82e6c?w=800&q=80",
    alt: "Minimal black cap",
  },
];

export const products = {
  shirts,
  shoes,
  outfits,
  clothes,
  glasses,
  pants,
  caps,
};
