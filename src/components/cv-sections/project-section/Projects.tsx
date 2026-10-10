import type { ProjectEntry } from "@/types";
import { createProjectEntry, entryActions } from "@/lib/entries";
import EntryCard from "@/components/EntryCard";
import FormSection from "@/components/ui/FormSection";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import AddButton from "@/components/ui/AddButton";

interface ProjectsProps {
  entries: ProjectEntry[];
  onChange: (entries: ProjectEntry[]) => void;
}

export default function Projects({ entries, onChange }: ProjectsProps) {
  const { add, remove, update } = entryActions(entries, onChange, createProjectEntry);

  return (
    <FormSection title="Projects">
      {entries.map((entry, index) => (
        <EntryCard
          key={entry.id}
          title={entry.name || `Project ${index + 1}`}
          onRemove={() => remove(entry.id)}
        >
          <Input
            label="Project name"
            placeholder="Jellyfish Tracker"
            value={entry.name}
            onChange={(e) => update(entry.id, { name: e.target.value })}
          />
          <Input
            label="Link"
            hint="Optional"
            type="url"
            placeholder="github.com/spongebob/jellyfish-tracker"
            autoComplete="off"
            value={entry.url}
            onChange={(e) => update(entry.id, { url: e.target.value })}
          />
          <Input
            label="Tech stack"
            hint="Optional"
            placeholder="React, TypeScript, Tailwind"
            value={entry.techStack}
            onChange={(e) => update(entry.id, { techStack: e.target.value })}
          />
          <Textarea
            label="Highlights"
            hint="one bullet per line"
            placeholder={"Tracks 50+ jellyfish sightings on a live map\nCut load time by 40% with lazy loading"}
            value={entry.highlights}
            onChange={(e) => update(entry.id, { highlights: e.target.value })}
          />
        </EntryCard>
      ))}
      <AddButton label="Add project" onClick={add} />
    </FormSection>
  );
}
