import type { OrganizationRow } from "@/lib/about/organization";

/** Text-only org row: name first, localized role below (no photo). */
export function OrganizationMember({ name, position }: OrganizationRow) {
  return (
    <article className="flex flex-col items-center rounded-lg border border-pgi-charcoal bg-pgi-charcoal/30 px-5 py-6 text-center transition-colors hover:border-pgi-gold/35">
      <h3 className="font-display text-lg font-semibold leading-snug text-pgi-gray-100">
        {name}
      </h3>
      <p className="mt-2 text-sm font-medium text-pgi-gold">{position}</p>
    </article>
  );
}
