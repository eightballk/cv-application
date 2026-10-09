import type { ComponentPropsWithoutRef } from "react";

export default function Label({ className = "", ...props }: ComponentPropsWithoutRef<"label">) {
  return <label className={`font-semibold ${className}`} {...props} />;
}
