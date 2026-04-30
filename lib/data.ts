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
  {
    id: "custom-gates",
    name: "Custom Metal Gates",
    description:
      "Durable and secure custom metal gate frames fabricated to your exact specifications. Perfect for farm, residential, or commercial entrances.",
    image: "/images/new-gallery-3.jpg",
    features: ["Custom Sizing", "Heavy Duty Frame", "Quality Welding"],
  },
  {
    id: "decorative-doors",
    name: "Decorative Metal Doors",
    description:
      "Beautifully crafted decorative metal door panels that combine aesthetic appeal with robust security for your property.",
    image: "/images/new-gallery-4.jpg",
    features: ["Aesthetic Design", "High Security", "Durable Finish"],
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
    src: "/images/zimbabwe_fence.png",
    alt: "Commercial fence installation in Zimbabwe",
    category: "Commercial",
  },
  {
    id: "2",
    src: "/images/zimbabwe_residential.png",
    alt: "Residential fencing project in Zimbabwe",
    category: "Residential",
  },
  {
    id: "3",
    src: "/images/zimbabwe_security.png",
    alt: "High security perimeter fence in Zimbabwe",
    category: "Security",
  },
  {
    id: "4",
    src: "/images/zimbabwe_agricultural.png",
    alt: "Agricultural fence installation in Zimbabwe",
    category: "Agricultural",
  },
  {
    id: "5",
    src: "/images/zimbabwe_team.png",
    alt: "Fence installation team at work in Zimbabwe",
    category: "Installation",
  },
  {
    id: "6",
    src: "/images/zimbabwe_sports.png",
    alt: "Sports complex fencing in Zimbabwe",
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
  {
    id: "9",
    src: "/images/new-gallery-1.jpg",
    alt: "Chain link fence rolls in stock",
    category: "Products",
  },
  {
    id: "10",
    src: "/images/new-gallery-2.jpg",
    alt: "Chain link fence installation in progress",
    category: "Installation",
  },
  {
    id: "11",
    src: "/images/new-gallery-3.jpg",
    alt: "Custom metal gate frame",
    category: "Products",
  },
  {
    id: "12",
    src: "/images/new-gallery-4.jpg",
    alt: "Decorative metal door panel",
    category: "Products",
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
  emails: ["info@joshwires.co.zw", "joshuamabunu@icloud.com"],
  address: "434 Miles Road Industrial Side, Victoria Falls, Zimbabwe",
  whatsapp: "263779975775",
};
