import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  size?: "sm" | "md" | "lg" | "xl";
}

export function Section({
  className,
  size = "lg",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          "py-12 md:py-16": size === "sm",
          "py-16 md:py-20": size === "md",
          "py-20 md:py-28": size === "lg",
          "py-24 md:py-32": size === "xl",
        },
        className
      )}
      {...props}
    />
  );
}
