import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
  controls?: ReactNode;
}

export default function FormSection({ title, children, controls }: FormSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-fg">{title}</h2>
        {controls}
      </div>
      <div className="rounded-lg border border-line/10 bg-surface/60 p-5 shadow-lg shadow-black/20 backdrop-blur-md">
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          {children}
        </form>
      </div>
    </section>
  );
}
