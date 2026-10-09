import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <section className="col-start-1 m-12 flex flex-col gap-8 text-white">
      <h2 className="pl-5 text-3xl font-bold">{title}</h2>
      <div className="min-w-full rounded-lg bg-neutral-800 p-10">
        <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          {children}
        </form>
      </div>
    </section>
  );
}
