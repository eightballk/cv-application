import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";
import Label from "./Label";

interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  label: string;
  hint?: string;
}

export default function Input({ label, hint, type = "text", className = "", ...props }: InputProps) {
  const id = useId();

  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <Label htmlFor={id}>
        {label} {hint && <small className="font-normal text-fg-subtle">({hint})</small>}
      </Label>
      <input
        id={id}
        type={type}
        className={`h-9 w-full min-w-0 rounded-md border border-line/10 bg-background/60 px-3 text-sm text-fg transition-colors placeholder:text-fg-subtle focus:border-line/60 focus:outline-none focus:ring-1 focus:ring-line/20 ${className}`}
        {...props}
      />
    </div>
  );
}
