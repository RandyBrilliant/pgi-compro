export type OrganizationRow = {
  name: string;
  position: string;
};

function isOrganizationRow(value: unknown): value is OrganizationRow {
  if (value === null || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  return typeof row.name === "string" && typeof row.position === "string";
}

export function parseOrganizationRows(value: unknown): OrganizationRow[] {
  if (!Array.isArray(value)) return [];
  return value.filter(isOrganizationRow);
}
