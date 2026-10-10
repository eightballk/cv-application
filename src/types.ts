export interface CVLink {
  id: string;
  url: string;
}

export interface WorkEntry {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string; // one bullet per line
}

export interface CVInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string; // optional, an empty string means "not shown"
  links: CVLink[];
  work: WorkEntry[];
  schoolName: string;
  studyTitle: string;
  studyDate: string;
  schoolAddress: string;
}

// every CVInfo field that holds plain text (everything except links)
export type TextField = Exclude<keyof CVInfo, "links">;

export interface FormSectionProps {
  info: CVInfo;
  onChange: (field: TextField, value: string) => void;
}
