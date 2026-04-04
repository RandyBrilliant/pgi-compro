export type OrganizationRow = {
  name: string;
  position: string;
  /** Public path under `/public`, e.g. `/images/team/albert.jpg`. Omit or empty for initials placeholder. */
  photo?: string;
};

function isOrganizationRow(value: unknown): value is OrganizationRow {
  if (value === null || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  if (typeof row.name !== "string" || typeof row.position !== "string") return false;
  if ("photo" in row && row.photo != null && row.photo !== "") {
    if (typeof row.photo !== "string") return false;
  }
  return true;
}

export function parseOrganizationRows(value: unknown): OrganizationRow[] {
  if (!Array.isArray(value)) return [];
  return value.filter(isOrganizationRow);
}
