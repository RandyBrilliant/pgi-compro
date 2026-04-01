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
    image: "/images/business-units/property.jpg",
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
    image: "/images/business-units/contractor.jpg",
    icon: "HardHat",
  },
  {
    id: "pgi-machinery",
    name: "PGI Machinery",
    tagline: "Powering Your Projects",
    description:
      "PGI Machinery provides a comprehensive fleet of heavy equipment for rent. Our well-maintained machinery and experienced operators ensure your construction projects run smoothly and efficiently.",
    services: [
      "Heavy Equipment Rental",
      "Crane Services",
      "Excavator Rental",
      "Equipment Maintenance",
      "Operator Services",
    ],
    image: "/images/business-units/machinery.jpg",
    icon: "Cog",
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
    image: "/images/business-units/developer.jpg",
    icon: "Building",
  },
];

export function getBusinessUnit(id: string): BusinessUnit | undefined {
  return businessUnits.find((unit) => unit.id === id);
}
