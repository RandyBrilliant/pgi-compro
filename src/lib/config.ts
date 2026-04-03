import type { NavItem, SiteConfig, StatItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "PT. Property Group Imperium",
  shortName: "PGI",
  tagline: "We Build with Pride & Integrity",
  description:
    "Founded in 2006, PT. Property Group Imperium is a leading property developer in Medan building quality residential and commercial properties with innovative concepts.",
  url: "https://pgigroup.com",
  contact: {
    email: "ptpgi2009@gmail.com",
    phone: "+62 812 6127 0707",
    address: "Jl. Abdul Hakim No. 97, Kel. Padang Bulan Selayang I, Kec. Medan Selayang",
    city: "Kota Medan 20155",
    country: "Indonesia",
  },
  // social: {
  //   instagram: "https://instagram.com/pgigroup",
  //   linkedin: "https://linkedin.com/company/pgigroup", 
  //   facebook: "https://facebook.com/pgigroup",
  // },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const stats: StatItem[] = [
  { value: 18, suffix: "+", label: "Years of Experience" }, // Founded 2006
  { value: 16, suffix: "+", label: "Projects Completed" },
  { value: 13, suffix: "+", label: "Partnerships" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
];
