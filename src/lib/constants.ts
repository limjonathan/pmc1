import galleryConstruction from "../assets/images/gallery_construction.jpg";
import galleryLogistics from "../assets/images/gallery_logistics.jpg";
import galleryHealthcare from "../assets/images/gallery_healthcare.jpg";
import galleryManufacturing from "../assets/images/gallery_manufacturing.jpg";
import galleryRetail from "../assets/images/gallery_retail.jpg";
import galleryTrading from "../assets/images/gallery_trading.jpg";

export const COMPANY = {
  name: "Premier Management Consulting",
  shortName: "PMC",
  tagline: "35+ Years Engineering Financial Clarity",
  subtitle:
    "Management accounting, system design & advisory for Indonesia's growth sectors.",
  description:
    "Premier Management Consulting is an expert consulting firm based in Surabaya, specializing in management accounting with more than 35 years of experience.",
  founded: 1990,
  yearsExperience: 35,
  website: "https://pmcidn.com",
  logo: "/pmc-logo.png",
} as const;

export const CONTACT = {
  address: {
    line1: "Ruko Satelite Town Square Blok F-21",
    line2: "Jl. Raya Sukomanunggal Jaya 5",
    city: "Surabaya",
    postalCode: "60188",
    country: "Indonesia",
  },
  phone: "+(62) 31 732 2858",
  phoneHref: "tel:+62317322858",
  whatsapp: "+(62) 822 2525 7551",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=6282225257551&text=Hi,%20I%20want%20to%20consult%20about%20my%20company%20management%20and%20accounting%20system",
  email: "center.pmc@gmail.com",
  emailHref: "mailto:center.pmc@gmail.com?subject=Inquiry%20from%20pmcidn.com",
  mapsUrl: "https://maps.app.goo.gl/nd5rxQGVKKd77ncT8",
  hours: [
    { days: "Monday – Friday", time: "8:30 – 17:00" },
    { days: "Saturday", time: "8:30 – 12:00" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "Delivering quality service through reliability and integrity.",
    icon: "Shield" as const,
  },
  {
    title: "Trust",
    description: "Striving to achieve client trust and satisfaction.",
    icon: "Handshake" as const,
  },
  {
    title: "Diligence",
    description:
      "Ensuring that client businesses constantly grow and improve.",
    icon: "TrendingUp" as const,
  },
  {
    title: "Quality",
    description:
      "Supporting clients with professionalism and high-quality service.",
    icon: "Award" as const,
  },
] as const;

export const SERVICES = [
  {
    category: "Accounting Services",
    icon: "Calculator" as const,
    items: [
      "Outsourcing Accounting Service",
      "Monthly Accounting Supervisory",
      "Financial Statement Compilation",
      "Financial Statement Review",
      "Financial Statement Analysis",
    ],
  },
  {
    category: "Advisory Services",
    icon: "Lightbulb" as const,
    items: [
      "Accounting & Management Information System Design",
      "Accounting System Check Up",
    ],
  },
  {
    category: "Consulting Services",
    icon: "Users" as const,
    items: ["Management Consultation", "Business Planning"],
  },
] as const;

export const PROJECTS = [
  { 
    name: "Construction, Developer", 
    image: galleryConstruction
  },
  { 
    name: "Freight Forwarding, Expeditions & Logistics", 
    image: galleryLogistics
  },
  { 
    name: "Healthcare", 
    image: galleryHealthcare
  },
  { 
    name: "Manufacturing", 
    image: galleryManufacturing
  },
  { 
    name: "Retail, Wholesale & Distribution", 
    image: galleryRetail
  },
  { 
    name: "Trading", 
    image: galleryTrading
  },
] as const;

export const STATS = [
  { value: 291, suffix: "", label: "Happy Clients" },
  { value: 156, suffix: "", label: "Our Project" },
  { value: 0, suffix: "", label: "Team Members" },
  { value: 41, suffix: "", label: "Years of Experiences" },
] as const;
