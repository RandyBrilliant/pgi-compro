import type { BusinessUnit } from "@/types";

export const businessUnits: BusinessUnit[] = [
  {
    id: "pgi-property",
    name: "PGI Property",
    tagline: "Excellence in Property Management",
    description:
      "PGI Property specializes in comprehensive property management services, ensuring your assets are maintained to the highest standards. We handle everything from tenant relations to maintenance, maximizing your property's value and returns.",
    services: [
      "Property Management",
      "Tenant Relations",
      "Maintenance Services",
      "Asset Management",
      "Lease Administration",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", // REPLACE: Property management building
    icon: "Building2",
  },
  {
    id: "pgi-contractor",
    name: "PGI Contractor",
    tagline: "Building Your Vision",
    description:
      "PGI Contractor delivers exceptional construction services with a focus on quality, safety, and timely delivery. From commercial buildings to residential complexes, we bring your architectural visions to life.",
    services: [
      "Commercial Construction",
      "Residential Construction",
      "Renovation & Remodeling",
      "Project Management",
      "Design-Build Services",
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop", // REPLACE: Construction site
    icon: "HardHat",
  },
  {
    id: "pgi-developer",
    name: "PGI Developer",
    tagline: "Shaping Tomorrow's Landscape",
    description:
      "PGI Developer creates innovative real estate projects that blend modern design with functional excellence. We develop premium residential and commercial properties that set new standards in luxury living.",
    services: [
      "Residential Development",
      "Commercial Development",
      "Mixed-Use Projects",
      "Land Acquisition",
      "Investment Analysis",
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", // REPLACE: Modern development/luxury building
    icon: "Building",
  },
];

export function getBusinessUnit(id: string): BusinessUnit | undefined {
  return businessUnits.find((unit) => unit.id === id);
}
