import Image from "next/image";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group text-center">
      {/* Image */}
      <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full border-2 border-pgi-charcoal transition-colors group-hover:border-pgi-gold">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="192px"
        />
        <div className="absolute inset-0 bg-pgi-gold/0 transition-colors group-hover:bg-pgi-gold/10" />
      </div>

      {/* Info */}
      <h3 className="font-display text-lg font-semibold text-pgi-gray-100 mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-pgi-gold">{member.position}</p>
    </div>
  );
}

// Placeholder version when no images are available
export function TeamMemberCardPlaceholder({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="group text-center">
      {/* Placeholder Avatar */}
      <div className="relative mx-auto mb-4 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-2 border-pgi-charcoal bg-pgi-dark transition-colors group-hover:border-pgi-gold">
        <span className="font-display text-4xl font-bold text-pgi-gold/50 group-hover:text-pgi-gold transition-colors">
          {initials}
        </span>
      </div>

      {/* Info */}
      <h3 className="font-display text-lg font-semibold text-pgi-gray-100 mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-pgi-gold">{member.position}</p>
    </div>
  );
}
