import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "grand-residence-tower",
    title: "Grand Residence Tower",
    businessUnit: "pgi-developer",
    description:
      "A 35-story luxury residential tower featuring premium apartments with panoramic city views. The project includes world-class amenities such as infinity pools, fitness centers, and landscaped gardens.",
    location: "Jakarta, Indonesia",
    images: [
      "/images/projects/grand-residence-1.jpg",
      "/images/projects/grand-residence-2.jpg",
      "/images/projects/grand-residence-3.jpg",
    ],
    year: 2024,
    status: "completed",
    featured: true,
  },
  {
    id: "2",
    slug: "imperium-business-park",
    title: "Imperium Business Park",
    businessUnit: "pgi-developer",
    description:
      "A modern commercial complex spanning 5 hectares, designed to accommodate multinational corporations with Grade-A office spaces, retail areas, and convention facilities.",
    location: "Jakarta, Indonesia",
    images: [
      "/images/projects/business-park-1.jpg",
      "/images/projects/business-park-2.jpg",
    ],
    year: 2023,
    status: "completed",
    featured: true,
  },
  {
    id: "3",
    slug: "marina-bay-residences",
    title: "Marina Bay Residences",
    businessUnit: "pgi-developer",
    description:
      "Waterfront luxury living with exclusive yacht facilities. This prestigious development offers premium condominiums with direct marina access and breathtaking ocean views.",
    location: "Bali, Indonesia",
    images: [
      "/images/projects/marina-bay-1.jpg",
      "/images/projects/marina-bay-2.jpg",
    ],
    year: 2024,
    status: "ongoing",
    featured: true,
  },
  {
    id: "4",
    slug: "central-mall-renovation",
    title: "Central Mall Renovation",
    businessUnit: "pgi-contractor",
    description:
      "Complete renovation of a 50,000 sqm shopping mall, including structural upgrades, modern facade installation, and interior redesign to create a contemporary retail experience.",
    location: "Surabaya, Indonesia",
    images: ["/images/projects/central-mall-1.jpg"],
    year: 2023,
    status: "completed",
    featured: false,
  },
  {
    id: "5",
    slug: "highland-villa-estate",
    title: "Highland Villa Estate",
    businessUnit: "pgi-developer",
    description:
      "An exclusive hillside residential development featuring 25 luxury villas with private pools, surrounded by lush tropical gardens and offering stunning mountain views.",
    location: "Bandung, Indonesia",
    images: [
      "/images/projects/highland-villa-1.jpg",
      "/images/projects/highland-villa-2.jpg",
    ],
    year: 2024,
    status: "ongoing",
    featured: false,
  },
  {
    id: "6",
    slug: "industrial-complex-phase-2",
    title: "Industrial Complex Phase 2",
    businessUnit: "pgi-contractor",
    description:
      "Construction of a modern industrial complex with warehousing facilities, manufacturing plants, and logistics infrastructure spanning over 20 hectares.",
    location: "Cikarang, Indonesia",
    images: ["/images/projects/industrial-1.jpg"],
    year: 2023,
    status: "completed",
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByBusinessUnit(businessUnitId: string): Project[] {
  return projects.filter((project) => project.businessUnit === businessUnitId);
}
