import { CVLink, FormSectionProps } from "../../../types";
import LinksEditor from "../../LinksEditor";
import FormSection from "../../ui/FormSection";
import Input from "../../ui/Input";

interface GeneralProps extends FormSectionProps {
  onLinksChange: (links: CVLink[]) => void;
}

export default function General({ info, onChange, onLinksChange }: GeneralProps) {
  return (
    <FormSection title="General Information">
      <Input
        label="Full Name"
        placeholder="Spongebob Squarepants"
        value={info.fullName}
        onChange={(e) => onChange("fullName", e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="spongebob123@gmail.com"
        autoComplete="off"
        value={info.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <Input
        label="Phone Number"
        type="tel"
        placeholder="707 663 GARY"
        autoComplete="off"
        maxLength={22}
        value={info.phoneNumber}
        onChange={(e) => onChange("phoneNumber", e.target.value)}
      />
      <Input
        label="Address"
        hint="Optional"
        placeholder="Bikini Bottom, Pacific Ocean"
        autoComplete="off"
        value={info.address}
        onChange={(e) => onChange("address", e.target.value)}
      />
      <LinksEditor links={info.links} onChange={onLinksChange} />
    </FormSection>
  );
}
