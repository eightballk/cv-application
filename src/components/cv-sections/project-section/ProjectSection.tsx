import CVSection from "@/components/CVPage/CVSection";
import { toBullets } from "@/lib/entries";
import { displayUrl, toHref } from "@/lib/links";
import type { ProjectEntry } from "@/types";

interface ProjectsSectionProps {
  entries: ProjectEntry[];
}

export default function ProjectsSection({ entries }: ProjectsSectionProps) {
  const visible = entries.filter((entry) => entry.name.trim());
  if (visible.length === 0) return null;

  return (
    <CVSection title="Projects">
      <div className="flex flex-col gap-4">
        {visible.map((entry) => {
          const techStack = entry.techStack.trim();
          const url = entry.url.trim();
          const bullets = toBullets(entry.highlights);

          return (
            <article key={entry.id}>
              <div className="flex justify-between gap-4">
                <h3 className="font-bold">
                  {entry.name}
                  {techStack && <span className="font-normal italic"> | {techStack}</span>}
                </h3>
                {url && (
                  <a
                    href={toHref(url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm hover:underline"
                  >
                    {displayUrl(url)}
                  </a>
                )}
              </div>
              {bullets.length > 0 && (
                <ul className="mt-1.5 list-disc pl-5 text-sm">
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </CVSection>
  );
}
