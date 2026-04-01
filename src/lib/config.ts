import type { NavItem, SiteConfig, StatItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "PT. Property Group Imperium",
  shortName: "PGI",
  tagline: "Building Excellence, Shaping the Future",
  description:
    "PT. Property Group Imperium is a leading property development and management company delivering excellence in real estate, construction, heavy machinery, and property development.",
  url: "https://pgigroup.com",
  contact: {
    email: "info@pgigroup.com",
    phone: "+62 21 xxxx xxxx",
    address: "Jl. Example Street No. 123",
    city: "Jakarta",
    country: "Indonesia",
  },
  social: {
    instagram: "https://instagram.com/pgigroup",
    linkedin: "https://linkedin.com/company/pgigroup",
    facebook: "https://facebook.com/pgigroup",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const stats: StatItem[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Professional Team" },
  { value: 100, suffix: "+", label: "Happy Clients" },
];
