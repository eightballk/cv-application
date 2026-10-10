import type { WorkEntry } from "@/types";
import { createWorkEntry, entryActions } from "@/lib/entries";
import FormSection from "@/components/ui/FormSection";
import EntryCard from "@/components/EntryCard";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import AddButton from "@/components/ui/AddButton";
import { ReactNode } from "react";

interface ExperienceProps {
  entries: WorkEntry[];
  onChange: (entries: WorkEntry[]) => void;
  controls?: ReactNode;
}

export default function Experience({ entries, onChange, controls }: ExperienceProps) {
  const { add, remove, update, move } = entryActions(entries, onChange, createWorkEntry);

  return (
    <FormSection title="Work Experience" controls={controls}>
      {entries.map((entry, index) => (
        <EntryCard
          key={entry.id}
          title={entry.company || entry.position || `Position ${index + 1}`}
          index={index}
          total={entries.length}
          onMove={(direction) => move(entry.id, direction)}
          onRemove={() => remove(entry.id)}
        >
          <Input
            label="Company"
            placeholder="The Krusty Krab"
            value={entry.company}
            onChange={(e) => update(entry.id, { company: e.target.value })}
          />
          <Input
            label="Position"
            placeholder="Fry Cook"
            value={entry.position}
            onChange={(e) => update(entry.id, { position: e.target.value })}
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
              placeholder="Jan 1998"
              value={entry.startDate}
              onChange={(e) => update(entry.id, { startDate: e.target.value })}
            />
            <Input
              label="End date"
              placeholder="Present"
              value={entry.endDate}
              onChange={(e) => update(entry.id, { endDate: e.target.value })}
            />
          </div>
          <Textarea
            label="Highlights"
            hint="one bullet per line"
            placeholder={"Cooked 200+ burgers per shift\nKept the kitchen spotless"}
            value={entry.highlights}
            onChange={(e) => update(entry.id, { highlights: e.target.value })}
          />
        </EntryCard>
      ))}
      <AddButton label="Add position" onClick={add} />
    </FormSection>
  );
}
