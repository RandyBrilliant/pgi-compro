import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends ComponentProps<"textarea"> {
  label?: string;
  error?: string;
}

export function Textarea({
  className,
  label,
  error,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-pgi-gray-300"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full rounded-md border bg-pgi-charcoal px-4 py-3 text-pgi-gray-100 placeholder:text-pgi-gray-500 transition-colors min-h-[120px] resize-y",
          "border-pgi-gray-700 focus:border-pgi-gold focus:outline-none focus:ring-1 focus:ring-pgi-gold",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
