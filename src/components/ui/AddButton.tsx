import { PlusIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface AddButtonProps {
  label: string;
  onClick: () => void;
}

export default function AddButton({ label, onClick }: AddButtonProps) {
  return (
    <Button variant="secondary" className="w-full border-dashed" onClick={onClick}>
      <PlusIcon className="size-4" />
      {label}
    </Button>
  );
}
