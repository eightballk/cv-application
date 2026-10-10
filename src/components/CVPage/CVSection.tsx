import type { ReactNode } from "react";

interface CVSectionProps {
  title: string;
  children: ReactNode;
}

export default function CVSection({ title, children }: CVSectionProps) {
  return (
    <section className="pt-5">
      <h2 className="break-after-avoid border-b border-black pb-1 text-sm font-bold uppercase tracking-wide">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
