import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";
import Label from "./Label";

interface TextareaProps extends Omit<ComponentPropsWithoutRef<"textarea">, "id"> {
  label: string;
  hint?: string;
}

export default function Textarea({ label, hint, className = "", ...props }: TextareaProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2.5">
      <Label htmlFor={id}>
        {label} {hint && <small className="font-normal text-fg-subtle">({hint})</small>}
      </Label>
      <textarea
        id={id}
    className={`min-h-32 py-2 w-full min-w-0 rounded-md border border-line/10 bg-background/60 px-3 text-sm text-fg transition-colors placeholder:text-fg-subtle focus:border-line/60 focus:outline-none focus:ring-1 focus:ring-line/20 ${className}`}
        {...props}
      />
    </div>
  );
}
