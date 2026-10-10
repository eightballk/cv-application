import Input from "@/components/ui/Input";
import type { CVLink } from "@/types";
import { createLink, entryActions } from "@/lib/entries";
import AddButton from "@/components/ui/AddButton";
import RemoveButton from "@/components/ui/RemoveButton";

interface LinksEditorProps {
  links: CVLink[];
  onChange: (links: CVLink[]) => void;
}

export default function LinksEditor({ links, onChange }: LinksEditorProps) {
  const { add, remove, update } = entryActions(links, onChange, createLink);

  return (
    <div className="flex flex-col gap-4">
      {links.map((link, index) => (
        <div key={link.id} className="flex items-end gap-2">
          <div className="grow">
            <Input
              label={`Link ${index + 1}`}
              hint={index === 0 ? "LinkedIn, GitHub, portfolio, anything" : undefined}
              type="url"
              placeholder="github.com/spongebob"
              autoComplete="off"
              value={link.url}
              onChange={(e) => update(link.id, { url: e.target.value })}
            />
          </div>
          <RemoveButton label={`Remove link ${index + 1}`} onClick={() => remove(link.id)} />
        </div>
      ))}
      <AddButton label="Add links" onClick={add} />
    </div>
  );
}
