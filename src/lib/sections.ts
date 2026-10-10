import type { SectionConfig, SectionId } from "@/types";

export const SECTION_IDS: readonly SectionId[] = [
  "experience",
  "projects",
  "skills",
  "education",
];

export const SECTION_LABELS: Record<SectionId, string> = {
  experience: "Work Experience",
  projects: "Projects",
  skills: "Skills",
  education: "Education",
};

export const defaultSections = (): SectionConfig[] =>
  SECTION_IDS.map((id) => ({ id, visible: true }));

const isSectionId = (value: unknown): value is SectionId =>
  (SECTION_IDS as readonly unknown[]).includes(value);

export function normalizeSections(value: unknown): SectionConfig[] {
  const defaults = defaultSections();
  if (!Array.isArray(value)) return defaults;

  const seen = new Set<SectionId>();
  const result: SectionConfig[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) continue;
    const { id, visible } = item as { id?: unknown; visible?: unknown };
    if (isSectionId(id) && !seen.has(id)) {
      seen.add(id);
      result.push({ id, visible: visible !== false });
    }
  }
  for (const section of defaults) {
    if (!seen.has(section.id)) result.push(section);
  }
  return result;
}

export function moveSection(
  sections: SectionConfig[],
  id: SectionId,
  direction: -1 | 1,
): SectionConfig[] {
  const index = sections.findIndex((section) => section.id === id);
  const target = index + direction;
  if (index === -1 || target < 0 || target >= sections.length) return sections;

  const next = [...sections];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

export const toggleSection = (
  sections: SectionConfig[],
  id: SectionId,
): SectionConfig[] =>
  sections.map((section) =>
    section.id === id ? { ...section, visible: !section.visible } : section,
  );
