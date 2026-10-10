import CVSection from "@/components/CVPage/CVSection";
import { toSkillList } from "@/lib/entries";
import type { SkillGroup } from "@/types";

interface SkillsSectionProps {
  groups: SkillGroup[];
}

export default function SkillsSection({ groups }: SkillsSectionProps) {
  const visible = groups
    .map((group) => ({ id: group.id, category: group.category.trim(), items: toSkillList(group.items) }))
    .filter((group) => group.items.length > 0);

  if (visible.length === 0) return null;

  return (
    <CVSection title="Skills">
      <ul className="flex flex-col gap-1 text-sm">
        {visible.map((group) => (
          <li key={group.id}>
            {group.category && <span className="font-bold">{group.category}:</span>}{" "}
            {group.items.join(", ")}
          </li>
        ))}
      </ul>
    </CVSection>
  );
}
