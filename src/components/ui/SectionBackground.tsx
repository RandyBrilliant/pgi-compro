"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  /** Unsplash image URL or local path */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Opacity of the image (0-100). Default: 5 for subtle effect */
  opacity?: number;
  /** Overlay gradient direction */
  overlayDirection?: "top" | "bottom" | "both" | "radial" | "none";
  /** Additional CSS classes */
  className?: string;
  /** Enable parallax effect on scroll */
  parallax?: boolean;
  /** Blur amount in pixels. Default: 0 */
  blur?: number;
  /** Enable grayscale filter */
  grayscale?: boolean;
  /** Image position */
  position?: "center" | "top" | "bottom" | "left" | "right";
}

/**
 * A subtle background image component designed for dark themes.
 * Blends seamlessly with the background while adding visual depth.
 * 
 * @example
 * <Section className="relative overflow-hidden">
 *   <SectionBackground
 *     src="https://images.unsplash.com/photo-xxx"
 *     alt="Background"
 *     opacity={5}
 *     overlayDirection="both"
 *   />
 *   <Container className="relative z-10">
 *     {content}
 *   </Container>
 * </Section>
 */
export function SectionBackground({
  src,
  alt,
  opacity = 5,
  overlayDirection = "both",
  className,
  parallax = false,
  blur = 0,
  grayscale = true,
  position = "center",
}: SectionBackgroundProps) {
  const positionClasses = {
    center: "object-center",
    top: "object-top",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right",
  };

  const overlayGradients = {
    top: "bg-gradient-to-b from-pgi-black via-pgi-black/80 to-transparent",
    bottom: "bg-gradient-to-t from-pgi-black via-pgi-black/80 to-transparent",
    both: "bg-gradient-to-b from-pgi-black via-transparent to-pgi-black",
    radial: "bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_70%)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Image Layer */}
      <div
        className={cn(
          "absolute inset-0",
          parallax && "bg-fixed"
        )}
        style={{
          opacity: opacity / 100,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover",
            positionClasses[position],
            grayscale && "grayscale",
            blur > 0 && `blur-[${blur}px]`
          )}
          style={{
            filter: blur > 0 ? `blur(${blur}px)` : undefined,
          }}
          sizes="100vw"
          priority={false}
          quality={60}
        />
      </div>

      {/* Gradient Overlay for seamless blending */}
      {overlayDirection !== "none" && (
        <div
          className={cn(
            "absolute inset-0",
            overlayGradients[overlayDirection]
          )}
        />
      )}

      {/* Noise texture overlay for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

/**
 * Predefined background configurations for common use cases
 */
export const backgroundPresets = {
  // For stats/numbers sections - abstract patterns
  abstract: {
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80",
    opacity: 8,
    overlayDirection: "radial" as const,
    blur: 1,
  },
  // For construction/development sections
  construction: {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    opacity: 6,
    overlayDirection: "both" as const,
  },
  // For property/real estate sections
  property: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    opacity: 5,
    overlayDirection: "both" as const,
  },
  // For team/about sections
  office: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    opacity: 5,
    overlayDirection: "both" as const,
  },
  // For CTA sections - cityscape
  cityscape: {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
    opacity: 7,
    overlayDirection: "both" as const,
  },
  // For contact sections
  contact: {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
    opacity: 5,
    overlayDirection: "both" as const,
  },
} as const;
