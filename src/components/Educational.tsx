import Input from "./ui/Input";
import type { FormSectionProps } from "../types";
import FormSection from "./ui/FormSection";

export default function Educational({ info, onChange }: FormSectionProps) {
  return (
    <FormSection title="Educational Experience">
      <Input
        label="School Name"
        hint="Short form works"
        placeholder="Mrs. Puff's Boating School"
        value={info.schoolName}
        onChange={(e) => onChange("schoolName", e.target.value)}
      />
      <Input
        label="Title of Study"
        placeholder="Boating"
        value={info.studyTitle}
        onChange={(e) => onChange("studyTitle", e.target.value)}
      />
      <Input
        label="Date of Study"
        placeholder="1999 - Present"
        value={info.studyDate}
        onChange={(e) => onChange("studyDate", e.target.value)}
      />
      <Input
        label="Address"
        placeholder="Bikini Bottom"
        value={info.schoolAddress}
        onChange={(e) => onChange("schoolAddress", e.target.value)}
      />
    </FormSection>
  );
}
