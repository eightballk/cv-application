import type { CVLink, ProjectEntry, SkillGroup, WorkEntry } from "@/types";

export const createWorkEntry = (): WorkEntry => ({
  id: crypto.randomUUID(),
  company: "",
  position: "",
  location: "",
  startDate: "",
  endDate: "",
  highlights: "",
});

export const createProjectEntry = (): ProjectEntry => ({
  id: crypto.randomUUID(),
  name: "",
  url: "",
  techStack: "",
  highlights: "",
});

export const createSkillGroup = (): SkillGroup => ({
  id: crypto.randomUUID(),
  category: "",
  items: "",
});

// Strips a leading list marker from pasted bullets.
// \u2022 bullet, \u25E6 white bullet, \u25AA small square, \u25A0 square,
// \u25CF circle, \u2023 triangle, \u2013 en dash
const LEADING_MARKER =
  /^(?:[-*]\s+|[\u2022\u25E6\u25AA\u25A0\u25CF\u2023\u2013]\s*)/;

export const toBullets = (text: string): string[] =>
  text
    .split("\n")
    .map((line) => line.trim().replace(LEADING_MARKER, ""))
    .filter(Boolean);

export const toSkillList = (text: string): string[] =>
  text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const createLink = (): CVLink => ({ id: crypto.randomUUID(), url: "" });

export const formatDateRange = (start: string, end: string): string =>
  [start, end]
    .map((date) => date.trim())
    .filter(Boolean)
    .join(" - ");

// add / remove / update for any list of items that have an id
export function entryActions<T extends { id: string }>(
  entries: T[],
  onChange: (entries: T[]) => void,
  create: () => T,
) {
  return {
    add: () => onChange([...entries, create()]),
    remove: (id: string) => onChange(entries.filter((item) => item.id !== id)),
    update: (id: string, patch: Partial<Omit<T, "id">>) =>
      onChange(
        entries.map((item) => (item.id === id ? { ...item, ...patch } : item)),
      ),
  };
}
