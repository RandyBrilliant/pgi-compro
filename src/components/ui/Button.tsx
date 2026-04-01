import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pgi-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pgi-black",
  {
    variants: {
      variant: {
        primary:
          "bg-pgi-gold text-pgi-black hover:bg-pgi-gold-light active:bg-pgi-gold-dark",
        secondary:
          "border-2 border-pgi-gold text-pgi-gold hover:bg-pgi-gold hover:text-pgi-black",
        ghost:
          "text-pgi-gray-300 hover:text-pgi-white hover:bg-pgi-charcoal",
        link: "text-pgi-gold hover:text-pgi-gold-light underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentProps<"button"> & {
    asChild?: false;
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  ComponentProps<typeof Link> & {
    asChild?: false;
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  return <button className={classes} {...(props as ComponentProps<"button">)} />;
}

export { buttonVariants };
