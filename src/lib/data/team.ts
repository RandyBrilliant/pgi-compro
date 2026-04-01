import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Director Name",
    position: "President Director",
    image: "/images/team/president-director.jpg",
    level: 1,
  },
  {
    id: "2",
    name: "Director Name",
    position: "Director of Operations",
    image: "/images/team/director-operations.jpg",
    level: 2,
  },
  {
    id: "3",
    name: "Director Name",
    position: "Director of Finance",
    image: "/images/team/director-finance.jpg",
    level: 2,
  },
  {
    id: "4",
    name: "Director Name",
    position: "Director of Development",
    image: "/images/team/director-development.jpg",
    level: 2,
  },
  {
    id: "5",
    name: "Manager Name",
    position: "Project Manager",
    image: "/images/team/project-manager.jpg",
    level: 3,
  },
  {
    id: "6",
    name: "Manager Name",
    position: "Finance Manager",
    image: "/images/team/finance-manager.jpg",
    level: 3,
  },
  {
    id: "7",
    name: "Manager Name",
    position: "Marketing Manager",
    image: "/images/team/marketing-manager.jpg",
    level: 3,
  },
  {
    id: "8",
    name: "Manager Name",
    position: "HR Manager",
    image: "/images/team/hr-manager.jpg",
    level: 3,
  },
];

export function getTeamByLevel(level: 1 | 2 | 3): TeamMember[] {
  return team.filter((member) => member.level === level);
}
