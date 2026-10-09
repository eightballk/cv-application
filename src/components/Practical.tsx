import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import type { FormSectionProps } from "../types";
import FormSection from "./ui/FormSection";

export default function Practical({ info, onChange }: FormSectionProps) {
  return (
    <FormSection title="Practical Experience">
      <Input
        label="Company Name"
        hint="Short form works"
        placeholder="The Krusty Krab"
        value={info.companyName}
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <Input
        label="Position Title"
        placeholder="Fry cook"
        value={info.jobPosition}
        onChange={(e) => onChange("jobPosition", e.target.value)}
      />
      <Textarea
        label="Main responsibility of your job"
        placeholder="Describe your job role in brief"
        value={info.jobDescription}
        onChange={(e) => onChange("jobDescription", e.target.value)}
      />
      <Input
        label="Date From and Until"
        placeholder="1998 - Present"
        value={info.jobDate}
        onChange={(e) => onChange("jobDate", e.target.value)}
      />
    </FormSection>
  );
}
