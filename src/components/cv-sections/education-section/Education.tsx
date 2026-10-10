import EntryCard from "@/components/EntryCard";
import FormSection from "@/components/ui/FormSection";
import AddButton from "@/components/ui/AddButton";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { createEducationEntry, entryActions } from "@/lib/entries";
import type { EducationEntry } from "@/types";
import { ReactNode } from "react";

interface EducationProps {
  entries: EducationEntry[];
  onChange: (entries: EducationEntry[]) => void;
  controls?: ReactNode;
}

export default function Education({ entries, onChange, controls }: EducationProps) {
  const { add, remove, update } = entryActions(entries, onChange, createEducationEntry);

  return (
    <FormSection title="Education" controls={controls}>
      {entries.map((entry, index) => (
        <EntryCard
          key={entry.id}
          title={entry.school || `School ${index + 1}`}
          onRemove={() => remove(entry.id)}
        >
          <Input
            label="School"
            placeholder="Mrs. Puff's Boating School"
            value={entry.school}
            onChange={(e) => update(entry.id, { school: e.target.value })}
          />
          <Input
            label="Degree"
            placeholder="BSc in Boating"
            value={entry.degree}
            onChange={(e) => update(entry.id, { degree: e.target.value })}
          />
          <Input
            label="Location"
            hint="Optional"
            placeholder="Bikini Bottom"
            value={entry.location}
            onChange={(e) => update(entry.id, { location: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Start date"
              placeholder="2015"
              value={entry.startDate}
              onChange={(e) => update(entry.id, { startDate: e.target.value })}
            />
            <Input
              label="End date"
              placeholder="2019 or Expected 2027"
              value={entry.endDate}
              onChange={(e) => update(entry.id, { endDate: e.target.value })}
            />
          </div>
          <Textarea
            label="Details"
            hint="Optional, one bullet per line"
            placeholder={"GPA: 3.8 / 4.0\nThesis on jellyfish migration patterns"}
            value={entry.highlights}
            onChange={(e) => update(entry.id, { highlights: e.target.value })}
          />
        </EntryCard>
      ))}
      <AddButton label="Add education" onClick={add} />
    </FormSection>
  );
}
