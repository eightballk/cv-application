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
    <div className="flex flex-col gap-2.5">
      <Label htmlFor={id}>
        {label} {hint && <small>({hint})</small>}
      </Label>
      <input
        id={id}
        type={type}
        className={`h-10 border-2 bg-neutral-700 p-2 text-white placeholder:text-neutral-400 ${className}`}
        {...props}
      />
    </div>
  );
}
