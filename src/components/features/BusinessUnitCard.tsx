import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, HardHat, Cog, Building } from "lucide-react";
import type { BusinessUnit } from "@/types";
import { cn } from "@/lib/utils";

interface BusinessUnitCardProps {
  unit: BusinessUnit;
  index?: number;
}

const iconMap = {
  Building2: Building2,
  HardHat: HardHat,
  Cog: Cog,
  Building: Building,
};

export function BusinessUnitCard({ unit, index = 0 }: BusinessUnitCardProps) {
  const Icon = iconMap[unit.icon as keyof typeof iconMap] || Building2;

  return (
    <Link
      href={`/services/${unit.id}` as any}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-pgi-dark border border-pgi-charcoal",
        "transition-all duration-500 hover:border-pgi-gold/50 hover:shadow-xl hover:shadow-pgi-gold/10"
      )}
    >
      {/* Background Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={unit.image}
          alt={unit.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pgi-black via-pgi-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Icon */}
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pgi-gold/10 text-pgi-gold border border-pgi-gold/20 transition-colors group-hover:bg-pgi-gold group-hover:text-pgi-black">
          <Icon size={24} />
        </div>

        {/* Number */}
        <div className="absolute top-6 right-6 text-6xl font-display font-bold text-pgi-gold/10">
          0{index + 1}
        </div>

        <h3 className="font-display text-xl font-semibold text-white mb-2">
          {unit.name}
        </h3>
        <p className="text-sm text-pgi-gray-300 line-clamp-2 mb-4">
          {unit.tagline}
        </p>

        {/* Learn More */}
        <div className="flex items-center gap-2 text-pgi-gold text-sm font-medium transition-transform group-hover:translate-x-2">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
