import type { ComponentPropsWithoutRef } from "react";

export default function Label({ className = "", ...props }: ComponentPropsWithoutRef<"label">) {
  return <label className={`text-sm font-semibold text-fg ${className}`} {...props} />;
}
