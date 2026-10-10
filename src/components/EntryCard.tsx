import type { ReactNode } from "react";
import RemoveButton from "@/components/ui/RemoveButton";

interface EntryCardProps {
  title: string;
  onRemove: () => void;
  children: ReactNode;
}

export default function EntryCard({ title, onRemove, children }: EntryCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-line/10 bg-background/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="truncate text-base font-medium text-fg">{title}</h3>
        <RemoveButton label={`Remove ${title}`} onClick={onRemove} />
      </div>
      {children}
    </div>
  );
}
