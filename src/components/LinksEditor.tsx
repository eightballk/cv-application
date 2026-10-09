import { PlusIcon, Trash2Icon } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import type { CVLink } from "../types";

interface LinksEditorProps {
  links: CVLink[];
  onChange: (links: CVLink[]) => void;
}

export default function LinksEditor({ links, onChange }: LinksEditorProps) {
  const addLink = () => onChange([...links, { id: crypto.randomUUID(), url: "" }]);
  const removeLink = (id: string) => onChange(links.filter((link) => link.id !== id));
  const updateLink = (id: string, url: string) =>
    onChange(links.map((link) => (link.id === id ? { ...link, url } : link)));

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
              onChange={(e) => updateLink(link.id, e.target.value)}
            />
          </div>
          <Button
            variant="light"
            className="h-10 px-3"
            aria-label={`Remove link ${index + 1}`}
            onClick={() => removeLink(link.id)}
          >
            <Trash2Icon className="size-4" />
          </Button>
        </div>
      ))}
      <Button variant="light" className="flex items-center justify-center gap-2" onClick={addLink}>
        <PlusIcon className="size-4" />
        Add link
      </Button>
    </div>
  );
}
