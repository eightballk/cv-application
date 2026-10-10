import { PlusIcon } from "lucide-react";
import EntryCard from "./EntryCard";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import { createWorkEntry } from "../lib/entries";
import type { WorkEntry } from "../types";
import FormSection from "./ui/FormSection";

interface ExperienceProps {
  entries: WorkEntry[];
  onChange: (entries: WorkEntry[]) => void;
}

export default function Experience({ entries, onChange }: ExperienceProps) {
  const addEntry = () => onChange([...entries, createWorkEntry()]);
  const removeEntry = (id: string) => onChange(entries.filter((item) => item.id !== id));
  const updateEntry = (id: string, patch: Partial<Omit<WorkEntry, "id">>) =>
    onChange(entries.map((item) => (item.id === id ? { ...item, ...patch } : item)));

  return (
    <FormSection title="Work Experience">
      {entries.map((entry, index) => (
        <EntryCard
          key={entry.id}
          title={entry.company || `Position ${index + 1}`}
          onRemove={() => removeEntry(entry.id)}
        >
          <Input
            label="Company"
            placeholder="The Krusty Krab"
            value={entry.company}
            onChange={(e) => updateEntry(entry.id, { company: e.target.value })}
          />
          <Input
            label="Position"
            placeholder="Fry Cook"
            value={entry.position}
            onChange={(e) => updateEntry(entry.id, { position: e.target.value })}
          />
          <Input
            label="Location"
            hint="Optional"
            placeholder="Bikini Bottom"
            value={entry.location}
            onChange={(e) => updateEntry(entry.id, { location: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Start date"
              placeholder="Jan 1998"
              value={entry.startDate}
              onChange={(e) => updateEntry(entry.id, { startDate: e.target.value })}
            />
            <Input
              label="End date"
              placeholder="Present"
              value={entry.endDate}
              onChange={(e) => updateEntry(entry.id, { endDate: e.target.value })}
            />
          </div>
          <Textarea
            label="Highlights"
            hint="one bullet per line"
            placeholder={"Cooked 200+ burgers per shift\nKept the kitchen spotless"}
            value={entry.highlights}
            onChange={(e) => updateEntry(entry.id, { highlights: e.target.value })}
          />
        </EntryCard>
      ))}
      <Button variant="light" className="flex items-center justify-center gap-2" onClick={addEntry}>
        <PlusIcon className="size-4" />
        Add position
      </Button>
    </FormSection>
  );
}
