import { Shield, Award, Lightbulb, Heart } from "lucide-react";
import type { CompanyValue } from "@/types";

interface ValueCardProps {
  value: CompanyValue;
  index?: number;
}

const iconMap = {
  Shield: Shield,
  Award: Award,
  Lightbulb: Lightbulb,
  Heart: Heart,
};

export function ValueCard({ value, index = 0 }: ValueCardProps) {
  const Icon = iconMap[value.icon as keyof typeof iconMap] || Shield;

  return (
    <div className="group p-6 rounded-lg bg-pgi-dark border border-pgi-charcoal transition-all duration-300 hover:border-pgi-gold/30 hover:shadow-lg hover:shadow-pgi-gold/5">
      {/* Icon */}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pgi-gold/10 text-pgi-gold border border-pgi-gold/20 transition-all duration-300 group-hover:bg-pgi-gold group-hover:text-pgi-black">
        <Icon size={28} />
      </div>

      {/* Number accent */}
      <div className="absolute top-4 right-4 text-5xl font-display font-bold text-pgi-gold/5">
        0{index + 1}
      </div>

      <h3 className="font-display text-xl font-semibold text-pgi-gray-100 mb-3">
        {value.title}
      </h3>

      <p className="text-pgi-gray-300 leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}
