import { PlusIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface AddButtonProps {
  label: string;
  onClick: () => void;
}

export default function AddButton({ label, onClick }: AddButtonProps) {
  return (
    <Button variant="light" className="flex items-center justify-center gap-2" onClick={onClick}>
      <PlusIcon className="size-4" />
      {label}
    </Button>
  );
}
