import { PlusIcon, Trash2Icon } from "lucide-react";
import type { SkillGroup } from "@/types";
import { createSkillGroup } from "@/lib/entries";
import FormSection from "@/components/ui/FormSection";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface SkillsProps {
  groups: SkillGroup[];
  onChange: (groups: SkillGroup[]) => void;
}

export default function Skills({ groups, onChange }: SkillsProps) {
  const addGroup = () => onChange([...groups, createSkillGroup()]);
  const removeGroup = (id: string) => onChange(groups.filter((item) => item.id !== id));
  const updateGroup = (id: string, patch: Partial<Omit<SkillGroup, "id">>) =>
    onChange(groups.map((item) => (item.id === id ? { ...item, ...patch } : item)));

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
              onChange={(e) => updateGroup(group.id, { category: e.target.value })}
            />
            <Input
              label="Skills"
              hint={index === 0 ? "comma separated" : undefined}
              placeholder="C#, TypeScript, SQL"
              value={group.items}
              onChange={(e) => updateGroup(group.id, { items: e.target.value })}
            />
          </div>
          <Button
            variant="light"
            className="h-10 px-3"
            aria-label={`Remove skill group ${index + 1}`}
            onClick={() => removeGroup(group.id)}
          >
            <Trash2Icon className="size-4" />
          </Button>
        </div>
      ))}
      <Button variant="light" className="flex items-center justify-center gap-2" onClick={addGroup}>
        <PlusIcon className="size-4" />
        Add skill group
      </Button>
    </FormSection>
  );
}
