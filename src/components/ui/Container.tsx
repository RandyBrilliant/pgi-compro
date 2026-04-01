import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentProps<"div"> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-7xl": size === "default",
          "max-w-4xl": size === "narrow",
          "max-w-[1600px]": size === "wide",
        },
        className
      )}
      {...props}
    />
  );
}
