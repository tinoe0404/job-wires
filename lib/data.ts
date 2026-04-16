export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "diamond-fence",
    name: "Diamond Fence",
    description:
      "High-quality chain link diamond mesh fencing ideal for residential, commercial, and industrial perimeter security. Durable galvanized steel construction.",
    image: "/images/diamond-fence.png",
    features: ["Galvanized Steel", "Multiple Heights", "Corrosion Resistant"],
  },
  {
    id: "field-fence",
    name: "Field Fence",
    description:
      "Heavy-duty agricultural field fencing designed for livestock containment and farm boundary protection. Sturdy rectangular mesh pattern.",
    image: "/images/field-fence.png",
    features: ["Agricultural Grade", "Heavy Duty", "Long Lasting"],
  },
  {
    id: "game-fence",
    name: "Game Fence",
    description:
      "Tall, robust game fencing for wildlife reserves and game farms. Designed to contain and protect wildlife in natural habitats.",
    image: "/images/game-fence.png",
    features: ["Extra Height", "Wildlife Safe", "UV Resistant"],
  },
  {
    id: "barbed-wire",
    name: "Barbed Wire",
    description:
      "Premium barbed wire for enhanced security fencing. Available in single and double strand options with sharp, durable barbs.",
    image: "/images/barbed-wire.png",
    features: ["High Tensile", "Sharp Barbs", "Weather Proof"],
  },
  {
    id: "razor-wire",
    name: "Razor Wire",
    description:
      "High-security concertina razor wire for maximum perimeter protection. Ideal for industrial, military, and high-security applications.",
    image: "/images/razor-wire.png",
    features: ["Maximum Security", "Concertina Coils", "Stainless Steel"],
  },
  {
    id: "fencing-poles",
    name: "Fencing Poles",
    description:
      "Galvanized steel fencing poles and posts for all fence types. Available in various diameters and lengths to suit every project.",
    image: "/images/fencing-poles.png",
    features: ["Multiple Sizes", "Galvanized", "Heavy Gauge"],
  },
  {
    id: "fencing-droppers",
    name: "Fencing Droppers",
    description:
      "Steel fencing droppers and stays to maintain proper wire spacing. Essential components for professional fence installations.",
    image: "/images/fencing-droppers.png",
    features: ["Precise Spacing", "Steel Construction", "Easy Install"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Moyo",
    role: "Farm Owner, Mashonaland",
    content:
      "Joshwires supplied and installed our entire farm perimeter fencing. Exceptional quality and their team was professional throughout. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chikwanha",
    role: "Property Developer",
    content:
      "We've been using Joshwires for all our residential projects. Their diamond fence and poles are top-notch quality and competitively priced.",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Ndlovu",
    role: "Security Consultant",
    content:
      "For high-security installations, Joshwires razor wire is unmatched. Reliable supplier with consistent product quality and timely delivery.",
    rating: 5,
  },
];

export const stats: Stat[] = [
  { id: "1", value: 500, suffix: "+", label: "Projects Completed" },
  { id: "2", value: 15, suffix: "+", label: "Years Experience" },
  { id: "3", value: 200, suffix: "+", label: "Happy Clients" },
  { id: "4", value: 7, suffix: "", label: "Product Categories" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery-1.png",
    alt: "Commercial fence installation",
    category: "Commercial",
  },
  {
    id: "2",
    src: "/images/gallery-2.png",
    alt: "Residential fencing project",
    category: "Residential",
  },
  {
    id: "3",
    src: "/images/gallery-3.png",
    alt: "High security perimeter fence",
    category: "Security",
  },
  {
    id: "4",
    src: "/images/gallery-4.png",
    alt: "Agricultural fence installation",
    category: "Agricultural",
  },
  {
    id: "5",
    src: "/images/gallery-5.png",
    alt: "Fence installation team at work",
    category: "Installation",
  },
  {
    id: "6",
    src: "/images/gallery-6.png",
    alt: "Sports complex fencing",
    category: "Sports",
  },
  {
    id: "7",
    src: "/images/diamond-fence.png",
    alt: "Diamond mesh fence close-up",
    category: "Products",
  },
  {
    id: "8",
    src: "/images/razor-wire.png",
    alt: "Razor wire security installation",
    category: "Security",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const companyInfo = {
  name: "Joshwires",
  tagline: "For All Your Fencing Solutions",
  phone1: "+263779975775",
  phone2: "+263773161258",
  email: "info@joshwires.co.zw",
  address: "Harare, Zimbabwe",
  whatsapp: "263779975775",
};
