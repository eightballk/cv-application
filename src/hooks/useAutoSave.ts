import { useEffect, useRef } from "react";

export function useAutosave<T>(
  value: T,
  save: (value: T) => void,
  delay = 500,
) {
  const unsaved = useRef<{ value: T } | null>(null);

  // debounce: save once the user has stopped changing things for `delay` ms
  useEffect(() => {
    unsaved.current = { value };
    const timeout = window.setTimeout(() => {
      save(value);
      unsaved.current = null;
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [value, save, delay]);

  // flush: if the tab closes or gets hidden before the timer fires, save right away
  useEffect(() => {
    const flush = () => {
      if (unsaved.current === null) return;
      save(unsaved.current.value);
      unsaved.current = null;
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") flush();
    };

    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [save]);
}
