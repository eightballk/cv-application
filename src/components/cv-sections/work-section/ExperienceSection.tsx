import { toBullets } from "../../../lib/entries";
import { WorkEntry } from "../../../types";
import CVSection from "../../CVPage/CVSection";

interface ExperienceSectionProps {
  entries: WorkEntry[];
}

export default function ExperienceSection({ entries }: ExperienceSectionProps) {
  const visible = entries.filter((entry) => entry.company.trim() || entry.position.trim());
  if (visible.length === 0) return null;

  return (
    <CVSection title="Experience">
      <div className="flex flex-col gap-4">
        {visible.map((entry) => {
          const dates = [entry.startDate, entry.endDate]
            .map((date) => date.trim())
            .filter(Boolean)
            .join(" - ");
          const bullets = toBullets(entry.highlights);

          return (
            <article key={entry.id}>
              <div className="flex justify-between gap-4">
                <h3 className="font-bold">{entry.company}</h3>
                <span className="shrink-0 text-sm">{dates}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm italic">
                <span>{entry.position}</span>
                <span>{entry.location}</span>
              </div>
              {bullets.length > 0 && (
                <ul className="mt-1.5 list-disc pl-5 text-sm marker:text-base">
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
