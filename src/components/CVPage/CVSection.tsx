import type { ReactNode } from "react";

interface CVSectionProps {
  title: string;
  children: ReactNode;
}

export default function CVSection({ title, children }: CVSectionProps) {
  return (
    <section className="pt-5">
      <h2 className="break-after-avoid bg-neutral-300 h-6 text-lg font-bold uppercase tracking-wide [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
