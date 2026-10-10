import CVEntry from "@/components/CVPage/CVEntry";
import CVSection from "@/components/CVPage/CVSection";
import { formatDateRange, toBullets } from "@/lib/entries";
import type { WorkEntry } from "@/types";

interface ExperienceSectionProps {
  entries: WorkEntry[];
}

export default function ExperienceSection({ entries }: ExperienceSectionProps) {
  const visible = entries.filter((entry) => entry.company.trim() || entry.position.trim());
  if (visible.length === 0) return null;

  return (
    <CVSection title="Experience">
      <div className="flex flex-col gap-4">
        {visible.map((entry) => (
          <CVEntry
            key={entry.id}
            title={entry.position}
            subtitle={entry.company}
            dates={formatDateRange(entry.startDate, entry.endDate)}
            location={entry.location}
            bullets={toBullets(entry.highlights)}
          />
        ))}
      </div>
    </CVSection>
  );
}
