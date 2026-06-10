export interface SizeType {
  label: string;
  inStock: boolean;
}

export interface ProductType {
  id: string;
  name: string;
  craftType: string;          // e.g. "Phulkari Embroidery"
  price: number;
  originalPrice?: number;
  images: string[];           // first is default, second on hover
  badge?: "NEW" | "BESTSELLER" | "LIMITED";
  rating: number;             // 0–5, one decimal
  reviewCount: number;
  sizes: SizeType[];
  description: string;
  artisan: string;
  region: string;
  category: "women" | "men";
  type: "Kurta" | "Jacket" | "Dupatta" | "Coord" | "Shirt" | "Accessory";
}

export const PRODUCTS: ProductType[] = [
  // WOMEN'S PRODUCTS (8)
  {
    id: "w1",
    name: "Aditi Phulkari Kurta",
    craftType: "Phulkari Embroidery",
    price: 4800,
    originalPrice: 6000,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "NEW",
    rating: 4.8,
    reviewCount: 42,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: false },
      { label: "XL", inStock: true }
    ],
    description: "An elegant warm ivory cotton kurta embellished with geometric Phulkari stitches hand-woven by female artisans in Punjab. Ideal for hot summers and lightweight comfort.",
    artisan: "Mehar Kaur",
    region: "Punjab",
    category: "women",
    type: "Kurta"
  },
  {
    id: "w2",
    name: "Maya Kantha Blazer",
    craftType: "Kantha Running Stitch",
    price: 7200,
    originalPrice: 9000,
    images: [
      "https://images.unsplash.com/photo-1595959183075-c1d0a17b999d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "BESTSELLER",
    rating: 4.6,
    reviewCount: 38,
    sizes: [
      { label: "XS", inStock: false },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A tailored cotton blazer featuring the rhythmic running stitch of Bengal. Sourced from vintage fabrics, it offers structured luxury with a deeply personal history.",
    artisan: "Debjani Sen",
    region: "West Bengal",
    category: "women",
    type: "Jacket"
  },
  {
    id: "w3",
    name: "Zoya Bandhani Dupatta",
    craftType: "Bandhani Tie-Dye",
    price: 2400,
    originalPrice: 3200,
    images: [
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "LIMITED",
    rating: 4.2,
    reviewCount: 15,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A gorgeous silk-georgette dupatta crafted using the tie-and-dye knot technique of Rajasthan. Adds a vibrant drop of terracotta and gold to any contemporary look.",
    artisan: "Rasoolan Bibi",
    region: "Rajasthan",
    category: "women",
    type: "Dupatta"
  },
  {
    id: "w4",
    name: "Mira Chikankari Coord Set",
    craftType: "Chikankari Shadow Work",
    price: 6400,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1583391265517-35bbdad01209?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.9,
    reviewCount: 54,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: false },
      { label: "XL", inStock: false }
    ],
    description: "A matching short kurta and straight-leg trousers, intricately detailed with Lucknawi shadow work. Made of fine linen in a soft ivory shade.",
    artisan: "Salma Begum",
    region: "Uttar Pradesh",
    category: "women",
    type: "Coord"
  },
  {
    id: "w5",
    name: "Sia Kashmiri Sozni Trench",
    craftType: "Kashmiri Sozni",
    price: 12500,
    originalPrice: 15000,
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "LIMITED",
    rating: 4.7,
    reviewCount: 22,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: false }
    ],
    description: "A luxury woolen trench coat featuring exquisite, ultra-fine Sozni embroidery on the collar and lapels. A masterpiece representing months of meticulous handcrafting in Srinagar.",
    artisan: "Ghulam Nabi",
    region: "Kashmir",
    category: "women",
    type: "Jacket"
  },
  {
    id: "w6",
    name: "Rhea Kantha Midi Dress",
    craftType: "Kantha Running Stitch",
    price: 5800,
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.4,
    reviewCount: 30,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "An airy midi-dress in organic cotton, featuring contrast running Kantha stitch patterns that give it a beautiful textured feel.",
    artisan: "Uma Bauri",
    region: "West Bengal",
    category: "women",
    type: "Coord"
  },
  {
    id: "w7",
    name: "Ishita Phulkari Jacket",
    craftType: "Phulkari Embroidery",
    price: 8900,
    images: [
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "BESTSELLER",
    rating: 4.5,
    reviewCount: 19,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: false },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A vibrant short jacket displaying full-surface floral Phulkari stitches. Elevates simple trousers and shirts with dramatic artisanal heritage.",
    artisan: "Jaspreet Kaur",
    region: "Punjab",
    category: "women",
    type: "Jacket"
  },
  {
    id: "w8",
    name: "Diya Bandhani Coord Set",
    craftType: "Bandhani Tie-Dye",
    price: 7500,
    originalPrice: 10000,
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.3,
    reviewCount: 28,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A tailored premium silk coord set with miniature Bandhani tie-dye spots. Lightweight, luxurious, and rooted in Gujrati craft traditions.",
    artisan: "Zainab Khatri",
    region: "Gujarat",
    category: "women",
    type: "Coord"
  },

  // MEN'S PRODUCTS (8)
  {
    id: "m1",
    name: "Kabir Phulkari Shirt",
    craftType: "Phulkari Embroidery",
    price: 3600,
    originalPrice: 4800,
    images: [
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "NEW",
    rating: 4.3,
    reviewCount: 31,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: false }
    ],
    description: "A tailored modern shirt in structured linen, highlighted by geometric hand-embroidered Phulkari motifs near the chest pockets.",
    artisan: "Harpreet Singh",
    region: "Punjab",
    category: "men",
    type: "Shirt"
  },
  {
    id: "m2",
    name: "Arjun Kantha Jacket",
    craftType: "Kantha Running Stitch",
    price: 8500,
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "BESTSELLER",
    rating: 4.7,
    reviewCount: 45,
    sizes: [
      { label: "XS", inStock: false },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "An unstructured chore jacket styled in heavy khadi, covered in running Kantha stitches that form subtle waves. A classic piece for layering.",
    artisan: "Bikram Halder",
    region: "West Bengal",
    category: "men",
    type: "Jacket"
  },
  {
    id: "m3",
    name: "Dev Chikankari Kurta",
    craftType: "Chikankari Shadow Work",
    price: 4200,
    originalPrice: 5250,
    images: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "BESTSELLER",
    rating: 4.8,
    reviewCount: 52,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A traditional Lucknawi cotton kurta with intricate white shadow work embroidery. Offers maximum breathability and timeless heritage.",
    artisan: "Asif Hussain",
    region: "Uttar Pradesh",
    category: "men",
    type: "Kurta"
  },
  {
    id: "m4",
    name: "Rohan Bandhani Casual Shirt",
    craftType: "Bandhani Tie-Dye",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.1,
    reviewCount: 16,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A lightweight casual shirt dyed in shades of deep indigo and terracotta using classic Rajasthani Bandhani resistance techniques.",
    artisan: "Mohammad Yusuf",
    region: "Rajasthan",
    category: "men",
    type: "Shirt"
  },
  {
    id: "m5",
    name: "Ranveer Kashmiri Sozni Blazer",
    craftType: "Kashmiri Sozni",
    price: 11000,
    originalPrice: 13750,
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "LIMITED",
    rating: 4.9,
    reviewCount: 10,
    sizes: [
      { label: "XS", inStock: false },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: false }
    ],
    description: "A structured luxury blazer detailing beautiful hand-needlework Kashmiri Sozni borders. Takes over 120 hours of delicate needlework.",
    artisan: "Manzoor Ahmad",
    region: "Kashmir",
    category: "men",
    type: "Jacket"
  },
  {
    id: "m6",
    name: "Vihaan Kantha Shacket",
    craftType: "Kantha Running Stitch",
    price: 6200,
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.4,
    reviewCount: 23,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A versatile shirt-jacket (shacket) styled in handspun cotton with linear Kantha stitching throughout, adding character and warmth.",
    artisan: "Kalpana Das",
    region: "West Bengal",
    category: "men",
    type: "Jacket"
  },
  {
    id: "m7",
    name: "Aarav Chikankari Bandhgala",
    craftType: "Chikankari Shadow Work",
    price: 9500,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "BESTSELLER",
    rating: 4.7,
    reviewCount: 34,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A high-collared formal bandhgala featuring tonal white shadow Chikankari embroidery. Blends formal Indian heritage with structured tailoring.",
    artisan: "Firoz Khan",
    region: "Uttar Pradesh",
    category: "men",
    type: "Kurta"
  },
  {
    id: "m8",
    name: "Karan Bandhani Silk Scarf",
    craftType: "Bandhani Tie-Dye",
    price: 1800,
    originalPrice: 2400,
    images: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "NEW",
    rating: 4.2,
    reviewCount: 18,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A pure silk scarf dyed in traditional Rajasthani Bandhai patterns. Extremely soft and adds a subtle luxury statement to any coat or shirt.",
    artisan: "Siddharth Khatri",
    region: "Rajasthan",
    category: "men",
    type: "Accessory"
  }
];
