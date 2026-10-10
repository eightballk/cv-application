import type { WorkEntry } from "../types";

export const createWorkEntry = (): WorkEntry => ({
  id: crypto.randomUUID(),
  company: "",
  position: "",
  location: "",
  startDate: "",
  endDate: "",
  highlights: "",
});

// turns the textarea text into clean bullet strings,
// also strips "- " or "• " when people paste existing bullets
export const toBullets = (text: string): string[] =>
  text
    .split("\n")
    .map((line) => line.trim().replace(/^[-*•]\s*/, ""))
    .filter(Boolean);
