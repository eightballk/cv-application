import { Trash2Icon } from "lucide-react";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

interface EntryCardProps {
  title: string;
  onRemove: () => void;
  children: ReactNode;
}

export default function EntryCard({ title, onRemove, children }: EntryCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-lg border-2 border-neutral-600 p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="truncate text-xl font-semibold">{title}</h3>
        <Button variant="light" className="h-10 px-3" aria-label={`Remove ${title}`} onClick={onRemove}>
          <Trash2Icon className="size-4" />
        </Button>
      </div>
      {children}
    </div>
  );
}
