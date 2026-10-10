import { createEmptyInfo, sampleInfo } from "@/lib/defaults";
import type { CVInfo } from "@/types";
import { normalizeSections } from "./sections";

// Bump the version whenever the shape of CVInfo changes in a way old data can't satisfy.
const STORAGE_KEY = "cv-application:v1";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function loadInfo(): CVInfo {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return sampleInfo;

    const empty = createEmptyInfo();
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return empty;

    const result: Record<string, unknown> = { ...empty };
    for (const [key, emptyValue] of Object.entries(empty)) {
      const value = parsed[key];
      const isValid =
        typeof emptyValue === "string"
          ? typeof value === "string"
          : Array.isArray(value);
      if (isValid) result[key] = value;
    }
    result.sections = normalizeSections(parsed.sections);
    return result as unknown as CVInfo;
  } catch {
    return createEmptyInfo();
  }
}

export function saveInfo(info: CVInfo): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch {
    // storage is full or blocked (private mode), the app keeps working without saving
  }
}
