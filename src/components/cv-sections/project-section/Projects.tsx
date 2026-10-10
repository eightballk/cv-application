import { PlusIcon } from "lucide-react";
import type { ProjectEntry } from "@/types";
import { createProjectEntry } from "@/lib/entries";
import EntryCard from "@/components/EntryCard";
import FormSection from "@/components/ui/FormSection";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

interface ProjectsProps {
  entries: ProjectEntry[];
  onChange: (entries: ProjectEntry[]) => void;
}

export default function Projects({ entries, onChange }: ProjectsProps) {
  const addEntry = () => onChange([...entries, createProjectEntry()]);
  const removeEntry = (id: string) => onChange(entries.filter((item) => item.id !== id));
  const updateEntry = (id: string, patch: Partial<Omit<ProjectEntry, "id">>) =>
    onChange(entries.map((item) => (item.id === id ? { ...item, ...patch } : item)));

  return (
    <FormSection title="Projects">
      {entries.map((entry, index) => (
        <EntryCard
          key={entry.id}
          title={entry.name || `Project ${index + 1}`}
          onRemove={() => removeEntry(entry.id)}
        >
          <Input
            label="Project name"
            placeholder="Jellyfish Tracker"
            value={entry.name}
            onChange={(e) => updateEntry(entry.id, { name: e.target.value })}
          />
          <Input
            label="Link"
            hint="Optional"
            type="url"
            placeholder="github.com/spongebob/jellyfish-tracker"
            autoComplete="off"
            value={entry.url}
            onChange={(e) => updateEntry(entry.id, { url: e.target.value })}
          />
          <Input
            label="Tech stack"
            hint="Optional"
            placeholder="React, TypeScript, Tailwind"
            value={entry.techStack}
            onChange={(e) => updateEntry(entry.id, { techStack: e.target.value })}
          />
          <Textarea
            label="Highlights"
            hint="one bullet per line"
            placeholder={"Tracks 50+ jellyfish sightings on a live map\nCut load time by 40% with lazy loading"}
            value={entry.highlights}
            onChange={(e) => updateEntry(entry.id, { highlights: e.target.value })}
          />
        </EntryCard>
      ))}
      <Button variant="light" className="flex items-center justify-center gap-2" onClick={addEntry}>
        <PlusIcon className="size-4" />
        Add project
      </Button>
    </FormSection>
  );
}
