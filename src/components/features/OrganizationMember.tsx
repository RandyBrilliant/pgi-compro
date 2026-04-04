import Image from "next/image";
import type { OrganizationRow } from "@/lib/about/organization";
import { cn } from "@/lib/utils";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function OrganizationMember({ name, position, photo }: OrganizationRow) {
  const hasPhoto = typeof photo === "string" && photo.trim().length > 0;

  return (
    <article
      className={cn(
        "group flex flex-col items-center rounded-lg border border-pgi-charcoal bg-pgi-charcoal/30 px-5 py-6 text-center",
        "transition-colors hover:border-pgi-gold/35",
      )}
    >
      <div
        className={cn(
          "relative mb-4 h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-pgi-charcoal bg-pgi-dark",
          "transition-colors group-hover:border-pgi-gold/50",
        )}
      >
        {hasPhoto ? (
          <Image
            src={photo.trim()}
            alt={name}
            fill
            className="object-cover"
            sizes="112px"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-pgi-black/60"
            aria-hidden
          >
            <span className="font-display text-2xl font-bold text-pgi-gold/55">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug text-pgi-gray-100">
        {name}
      </h3>
      <p className="mt-2 text-sm font-medium text-pgi-gold">{position}</p>
    </article>
  );
}
