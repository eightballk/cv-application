import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <section className="flex flex-col gap-3 text-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="rounded-lg bg-neutral-800 p-5">
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          {children}
        </form>
      </div>
    </section>
  );
}
