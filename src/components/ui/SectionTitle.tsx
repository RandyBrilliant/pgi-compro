import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        {
          "text-center": align === "center",
          "text-left": align === "left",
        },
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-pgi-gold">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-pgi-gray-100 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={cn("gold-line mt-4", {
          "mx-auto": align === "center",
        })}
      />
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-pgi-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}
