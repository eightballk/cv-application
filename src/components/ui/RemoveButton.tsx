import { Trash2Icon } from "lucide-react";
import Button from "@/components/ui/Button";

interface RemoveButtonProps {
  label: string;
  onClick: () => void;
}

export default function RemoveButton({ label, onClick }: RemoveButtonProps) {
  return (
    <Button variant="danger" size="icon" aria-label={label} onClick={onClick}>
      <Trash2Icon className="size-4" />
    </Button>
  );
}
