import Input from "./ui/Input";
import type { FormSectionProps } from "../types";
import FormSection from "./ui/FormSection";

export default function General({ info, onChange }: FormSectionProps) {
  return (
    <FormSection title="General Information">
      <Input
        label="Full Name"
        placeholder="Spongebob Squarepants"
        value={info.fullName}
        onChange={(e) => onChange("fullName", e.target.value)}
      />
      <Input
        label="Birth Date"
        placeholder="July 14th, 1986"
        value={info.birthDate}
        onChange={(e) => onChange("birthDate", e.target.value)}
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
        placeholder="Bikini Bottom, Pacific Ocean"
        autoComplete="off"
        value={info.address}
        onChange={(e) => onChange("address", e.target.value)}
      />
    </FormSection>
  );
}
