import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Director Name",
    position: "President Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces", // REPLACE: President Director photo
    level: 1,
  },
  {
    id: "2",
    name: "Director Name",
    position: "Director of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces", // REPLACE: Director of Operations photo
    level: 2,
  },
  {
    id: "3",
    name: "Director Name",
    position: "Director of Finance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces", // REPLACE: Director of Finance photo
    level: 2,
  },
  {
    id: "4",
    name: "Director Name",
    position: "Director of Development",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces", // REPLACE: Director of Development photo
    level: 2,
  },
  {
    id: "5",
    name: "Manager Name",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces", // REPLACE: Project Manager photo
    level: 3,
  },
  {
    id: "6",
    name: "Manager Name",
    position: "Finance Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces", // REPLACE: Finance Manager photo
    level: 3,
  },
  {
    id: "7",
    name: "Manager Name",
    position: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces", // REPLACE: Marketing Manager photo
    level: 3,
  },
  {
    id: "8",
    name: "Manager Name",
    position: "HR Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces", // REPLACE: HR Manager photo
    level: 3,
  },
];

export function getTeamByLevel(level: 1 | 2 | 3): TeamMember[] {
  return team.filter((member) => member.level === level);
}
