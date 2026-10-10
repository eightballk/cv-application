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
        {label} {hint && <small className="font-normal text-neutral-400">({hint})</small>}
      </Label>
      <input
        id={id}
        type={type}
        className={`h-9 w-full min-w-0 border-2 bg-neutral-700 px-3 text-sm text-white placeholder:text-neutral-400 ${className}`}
        {...props}
      />
    </div>
  );
}
