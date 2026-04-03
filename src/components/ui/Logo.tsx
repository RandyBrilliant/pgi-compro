import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "sm" }: LogoProps) {
  const logoSizes = {
    sm: 70,
    md: 120,
    lg: 160,
  };

  const width = logoSizes[size];
  const height = (width * 895.57) / 1035.63; // Maintain aspect ratio

  return (
    <Link
      href="/"
      className={cn("inline-block transition-opacity hover:opacity-80", className)}
    >
      <Image
        src="/images/logo/logo-pgi.svg"
        alt="PGI Group"
        width={width}
        height={height}
        className="h-auto"
        priority
      />
    </Link>
  );
}
