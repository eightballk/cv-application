import { Trash2Icon } from "lucide-react";
import Button from "@/components/ui/Button";

interface RemoveButtonProps {
  label: string;
  size?: "icon" | "icon-sm";
  onClick: () => void;
}

export default function RemoveButton({ label, size = "icon", onClick }: RemoveButtonProps) {
  return (
    <Button variant="danger" size={size} aria-label={label} onClick={onClick}>
      <Trash2Icon className="size-4" />
    </Button>
  );
}
