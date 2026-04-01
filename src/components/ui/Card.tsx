import type { ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps extends ComponentProps<"div"> {
  hover?: boolean;
}

function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-pgi-dark border border-pgi-charcoal",
        hover && "transition-all duration-300 hover:border-pgi-gold/30 hover:shadow-lg hover:shadow-pgi-gold/5",
        className
      )}
      {...props}
    />
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

function CardImage({
  src,
  alt,
  className,
  aspectRatio = "video",
}: CardImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        {
          "aspect-video": aspectRatio === "video",
          "aspect-square": aspectRatio === "square",
          "aspect-[3/4]": aspectRatio === "portrait",
        },
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-display text-xl font-semibold text-pgi-gray-100",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("mt-2 text-pgi-gray-300 line-clamp-3", className)}
      {...props}
    />
  );
}

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;

export { Card };
