import type { Project } from "@/types";

export const projects: Project[] = [
  // Featured Projects (Most Recent)
  {
    id: "1",
    slug: "skyview-residence-phase-1",
    title: "Skyview Residence Phase I",
    businessUnit: "pgi-developer",
    description:
      "A modern apartment complex with integrated living facilities, offering panoramic city views and contemporary lifestyle amenities for urban professionals and families.",
    location: "Medan, Indonesia",
    images: [
      "/images/projects/skyview-residence-1.jpg", // Main hero image
      "/images/projects/skyview-residence-2.jpg", // Gallery image 1
      "/images/projects/skyview-residence-3.jpg", // Gallery image 2
    ],
    year: 2018,
    status: "completed",
    featured: true,
  },
  {
    id: "2",
    slug: "mega-warehouse",
    title: "Mega Warehouse",
    businessUnit: "pgi-developer",
    description:
      "A state-of-the-art business warehouse facility designed for modern logistics and commercial operations, featuring efficient layouts and premium industrial specifications.",
    location: "Medan, Indonesia",
    images: [
      "/images/projects/mega-warehouse-1.jpg", // Main hero image
      "/images/projects/mega-warehouse-2.jpg", // Gallery image 1
    ],
    year: 2013,
    status: "completed",
    featured: true,
  },
  {
    id: "3",
    slug: "mega-setiabudi-village",
    title: "Mega Setiabudi Village",
    businessUnit: "pgi-developer",
    description:
      "An integrated residential and commercial development combining villa-style living with convenient shophouse units, creating a vibrant community environment.",
    location: "Medan, Indonesia",
    images: [
      "/images/projects/mega-setiabudi-1.jpg", // Main hero image  
      "/images/projects/mega-setiabudi-2.jpg", // Gallery image 1
    ],
    year: 2013,
    status: "completed",
    featured: true,
  },
  
  // Other Completed Projects
  {
    id: "4",
    slug: "millenium-light",
    title: "Millenium Light",
    businessUnit: "pgi-developer",
    description:
      "A contemporary villa residence and shophouse development featuring modern architectural design with efficient layouts for both residential and commercial use.",
    location: "Medan, Indonesia",
    images: ["/images/projects/millenium-light-1.jpg"],
    year: 2012,
    status: "completed",
    featured: false,
  },
  {
    id: "5",
    slug: "mega-townhouse-2",
    title: "Mega Townhouse II",
    businessUnit: "pgi-developer",
    description:
      "The second phase of our successful townhouse development, featuring enhanced designs and modern amenities for comfortable family living and business operations.",
    location: "Medan, Indonesia",
    images: ["/images/projects/mega-townhouse-2-1.jpg"],
    year: 2012,
    status: "completed",
    featured: false,
  },
  {
    id: "6",
    slug: "graha-millenium",
    title: "Graha Millenium",
    businessUnit: "pgi-developer",
    description:
      "A premium mixed-use development combining elegant villa residences with strategic shophouse units, designed for sophisticated urban living.",
    location: "Medan, Indonesia",
    images: ["/images/projects/graha-millenium-1.jpg"],
    year: 2011,
    status: "completed",
    featured: false,
  },
  {
    id: "7",
    slug: "millenium-business-center",
    title: "Millenium Business Center",
    businessUnit: "pgi-developer",
    description:
      "A comprehensive business and residential complex featuring villa residences integrated with commercial shophouse units for optimal mixed-use functionality.",
    location: "Medan, Indonesia",
    images: ["/images/projects/millenium-business-center-1.jpg"],
    year: 2011,
    status: "completed",
    featured: false,
  },
  {
    id: "8",
    slug: "graha-anggrek",
    title: "Graha Anggrek",
    businessUnit: "pgi-developer",
    description:
      "An elegant residential and commercial development featuring villa-style homes with complementary shophouse units, creating a harmonious living and business environment.",
    location: "Medan, Indonesia",
    images: ["/images/projects/graha-anggrek-1.jpg"],
    year: 2010,
    status: "completed",
    featured: false,
  },
  {
    id: "9",
    slug: "mega-townhouse-1",
    title: "Mega Townhouse I",
    businessUnit: "pgi-developer",
    description:
      "Our flagship townhouse development combining residential villas with strategic shophouse units, setting the standard for integrated community living.",
    location: "Medan, Indonesia",
    images: ["/images/projects/mega-townhouse-1-1.jpg"],
    year: 2009,
    status: "completed",
    featured: false,
  },
  {
    id: "10",
    slug: "millenium-anggrek",
    title: "Millenium Anggrek",
    businessUnit: "pgi-developer",
    description:
      "A well-planned residential and commercial development featuring comfortable villa residences with integrated shophouse facilities for modern urban living.",
    location: "Medan, Indonesia",
    images: ["/images/projects/millenium-anggrek-1.jpg"],
    year: 2008,
    status: "completed",
    featured: false,
  },
  {
    id: "11",
    slug: "millenium-garden",
    title: "Millenium Garden",
    businessUnit: "pgi-developer",
    description:
      "A beautiful villa residence development emphasizing green spaces and garden landscapes, offering tranquil living environments for families seeking quality homes.",
    location: "Medan, Indonesia",
    images: ["/images/projects/millenium-garden-1.jpg"],
    year: 2007,
    status: "completed",
    featured: false,
  },
  {
    id: "12",
    slug: "the-green-rajawali",
    title: "The Green Rajawali",
    businessUnit: "pgi-developer",
    description:
      "Our pioneering villa residence project that established PGI's reputation for quality development, featuring environmentally conscious design and premium construction standards.",
    location: "Medan, Indonesia",
    images: ["/images/projects/the-green-rajawali-1.jpg"],
    year: 2006,
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
