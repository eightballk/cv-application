import type { SkillGroup } from "@/types";
import { createSkillGroup, entryActions } from "@/lib/entries";
import FormSection from "@/components/ui/FormSection";
import Input from "@/components/ui/Input";
import RemoveButton from "@/components/ui/RemoveButton";
import AddButton from "@/components/ui/AddButton";

interface SkillsProps {
  groups: SkillGroup[];
  onChange: (groups: SkillGroup[]) => void;
}

export default function Skills({ groups, onChange }: SkillsProps) {
  const { add, remove, update } = entryActions(groups, onChange, createSkillGroup);

  return (
    <FormSection title="Skills">
      {groups.map((group, index) => (
        <div key={group.id} className="flex items-end gap-2">
          <div className="grid grow grid-cols-[1fr_2fr] items-end gap-2">
            <Input
              label="Category"
              hint={index === 0 ? "e.g. Languages, Tools" : undefined}
              placeholder="Languages"
              value={group.category}
              onChange={(e) => update(group.id, { category: e.target.value })}
            />
            <Input
              label="Skills"
              hint={index === 0 ? "comma separated" : undefined}
              placeholder="C#, TypeScript, SQL"
              value={group.items}
              onChange={(e) => update(group.id, { items: e.target.value })}
            />
            <RemoveButton label={`Remove skill ${index + 1}`} onClick={() => remove(group.id)} />
          </div>
        </div>
      ))}
      <AddButton label="Add skill group" onClick={add} />
    </FormSection>
  );
}
