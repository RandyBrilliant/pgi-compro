import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-display font-bold transition-colors hover:text-pgi-gold",
        sizeClasses[size],
        className
      )}
    >
      {/* Placeholder for actual logo - replace with Image component when logo is available */}
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-pgi-gold text-pgi-black font-bold">
        PGI
      </div>
      {showText && (
        <span className="hidden sm:inline">
          <span className="text-pgi-gold">PGI</span>
          <span className="text-pgi-gray-100"> Group</span>
        </span>
      )}
    </Link>
  );
}
