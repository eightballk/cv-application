import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";
import Label from "./Label";

interface TextareaProps extends Omit<ComponentPropsWithoutRef<"textarea">, "id"> {
  label: string;
}

export default function Textarea({ label, className = "", ...props }: TextareaProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2.5">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        className={`min-h-40 border-2 bg-neutral-700 p-2 text-white placeholder:text-neutral-400 ${className}`}
        {...props}
      />
    </div>
  );
}
