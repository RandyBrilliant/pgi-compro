import type { Client, CompanyValue } from "@/types";

export const companyValues: CompanyValue[] = [
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our dealings, building trust with our clients and partners.",
    icon: "Shield",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering quality that exceeds expectations and sets industry benchmarks.",
    icon: "Award",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We embrace innovation and modern technologies to create forward-thinking solutions that shape the future of real estate.",
    icon: "Lightbulb",
  },
  {
    id: "commitment",
    title: "Commitment",
    description:
      "We are committed to our clients' success, providing dedicated support and delivering on our promises every time.",
    icon: "Heart",
  },
];

export const clients: Client[] = [
  {
    id: "client-1",
    name: "Client Company 1",
    logo: "/images/clients/client-1.png",
  },
  {
    id: "client-2",
    name: "Client Company 2",
    logo: "/images/clients/client-2.png",
  },
  {
    id: "client-3",
    name: "Client Company 3",
    logo: "/images/clients/client-3.png",
  },
  {
    id: "client-4",
    name: "Client Company 4",
    logo: "/images/clients/client-4.png",
  },
  {
    id: "client-5",
    name: "Client Company 5",
    logo: "/images/clients/client-5.png",
  },
  {
    id: "client-6",
    name: "Client Company 6",
    logo: "/images/clients/client-6.png",
  },
];

export const visionMission = {
  vision:
    "To be the most trusted and innovative property group in Indonesia, setting new standards in real estate development and management.",
  mission: [
    "Deliver exceptional quality in every project we undertake",
    "Build lasting relationships based on trust and integrity",
    "Embrace innovation to create sustainable developments",
    "Empower our team to achieve excellence",
    "Contribute positively to the communities we serve",
  ],
};
