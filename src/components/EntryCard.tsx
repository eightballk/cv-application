import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import RemoveButton from "@/components/ui/RemoveButton";

interface EntryCardProps {
  title: string;
  index: number;
  total: number;
  onMove: (direction: -1 | 1) => void;
  onRemove: () => void;
  children: ReactNode;
}

export default function EntryCard({ title, index, total, onMove, onRemove, children }: EntryCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-line/10 bg-background/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="truncate text-base font-medium text-fg">{title}</h3>
        <div className="flex shrink-0 items-center gap-1">
          {total > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Move ${title} up`}
                title="Move up"
                disabled={index === 0}
                onClick={() => onMove(-1)}
              >
                <ArrowUpIcon className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Move ${title} down`}
                title="Move down"
                disabled={index === total - 1}
                onClick={() => onMove(1)}
              >
                <ArrowDownIcon className="size-4" />
              </Button>
            </>
          )}
          <RemoveButton size="icon-sm" label={`Remove ${title}`} onClick={onRemove} />
        </div>
      </div>
      {children}
    </div>
  );
}
