import EntryCard from "@/components/EntryCard";
import FormSection from "@/components/ui/FormSection";
import AddButton from "@/components/ui/AddButton";
import Input from "@/components/ui/Input";
import { createSkillGroup, entryActions } from "@/lib/entries";
import type { SkillGroup } from "@/types";
import { ReactNode } from "react";

interface SkillsProps {
  groups: SkillGroup[];
  onChange: (groups: SkillGroup[]) => void;
  controls?: ReactNode;
}

export default function Skills({ groups, onChange, controls }: SkillsProps) {
  const { add, remove, update } = entryActions(groups, onChange, createSkillGroup);

  return (
    <FormSection title="Skills" controls={controls}>
      {groups.map((group, index) => (
        <EntryCard
          key={group.id}
          title={group.category || `Group ${index + 1}`}
          onRemove={() => remove(group.id)}
        >
          <Input
            label="Category"
            hint="e.g. Languages, Tools"
            placeholder="Languages"
            value={group.category}
            onChange={(e) => update(group.id, { category: e.target.value })}
          />
          <Input
            label="Skills"
            hint="comma separated"
            placeholder="C#, TypeScript, SQL"
            value={group.items}
            onChange={(e) => update(group.id, { items: e.target.value })}
          />
        </EntryCard>
      ))}
      <AddButton label="Add skill group" onClick={add} />
    </FormSection>
  );
}
