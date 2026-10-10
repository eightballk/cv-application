import type { ProjectEntry, WorkEntry } from "@/types";

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
