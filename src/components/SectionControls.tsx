import { ArrowDownIcon, ArrowUpIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface SectionControlsProps {
  label: string;
  visible: boolean;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onToggle: () => void;
}

export default function SectionControls({
  label,
  visible,
  canMoveUp,
  canMoveDown,
  onMoveUp,
  onMoveDown,
  onToggle,
}: SectionControlsProps) {
  const toggleLabel = visible ? `Hide ${label} from CV` : `Show ${label} on CV`;

  return (
    <div className="flex items-center gap-1">
      {!visible && <span className="mr-1 text-xs text-fg-subtle">Hidden from CV</span>}
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={`Move ${label} up`}
        title={`Move ${label} up`}
        disabled={!canMoveUp}
        onClick={onMoveUp}
      >
        <ArrowUpIcon className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={`Move ${label} down`}
        title={`Move ${label} down`}
        disabled={!canMoveDown}
        onClick={onMoveDown}
      >
        <ArrowDownIcon className="size-4" />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label={toggleLabel} title={toggleLabel} onClick={onToggle}>
        {visible ? <EyeIcon className="size-4" /> : <EyeOffIcon className="size-4" />}
      </Button>
    </div>
  );
}
