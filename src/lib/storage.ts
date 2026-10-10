import { emptyInfo, sampleInfo } from "@/lib/defaults";
import type { CVInfo } from "@/types";

// Bump the version whenever the shape of CVInfo changes in a way old data can't satisfy.
const STORAGE_KEY = "cv-application:v1";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function loadInfo(): CVInfo {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return sampleInfo;

    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return emptyInfo;

    const result: Record<string, unknown> = { ...emptyInfo };
    for (const [key, empty] of Object.entries(emptyInfo)) {
      const value = parsed[key];
      const isValid =
        typeof empty === "string"
          ? typeof value === "string"
          : Array.isArray(value);
      if (isValid) result[key] = value;
    }
    return result as unknown as CVInfo;
  } catch {
    return emptyInfo;
  }
}

export function saveInfo(info: CVInfo): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch {
    // storage is full or blocked (private mode), the app keeps working without saving
  }
}
