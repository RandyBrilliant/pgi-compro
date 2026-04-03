export interface BusinessUnit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  services: string[];
  image: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  businessUnit: string;
  description: string;
  location: string;
  images: string[];
  year: number;
  status: "completed" | "ongoing";
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  level: 1 | 2 | 3;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contact: ContactInfo;
  social?: SocialLinks; // Made optional since company may not have social media yet
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}
