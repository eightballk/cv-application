import CVEntry from "@/components/CVPage/CVEntry";
import CVSection from "@/components/CVPage/CVSection";
import { formatDateRange, toBullets } from "@/lib/entries";
import type { EducationEntry } from "@/types";

interface EducationSectionProps {
  entries: EducationEntry[];
}

export default function EducationSection({ entries }: EducationSectionProps) {
  const visible = entries.filter((entry) => entry.school.trim() || entry.degree.trim());
  if (visible.length === 0) return null;

  return (
    <CVSection title="Education">
      <div className="flex flex-col gap-4">
        {visible.map((entry) => (
          <CVEntry
            key={entry.id}
            title={entry.school}
            subtitle={entry.degree}
            dates={formatDateRange(entry.startDate, entry.endDate)}
            location={entry.location}
            bullets={toBullets(entry.highlights)}
          />
        ))}
      </div>
    </CVSection>
  );
}
