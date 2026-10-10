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

export interface ProjectEntry {
  id: string;
  name: string;
  url: string; // can be empty, hidden on the CV when blank
  techStack: string; // can be empty, free text like "React, TypeScript"
  highlights: string; // one bullet per line
}

export interface SkillGroup {
  id: string;
  category: string; // can be empty, then only the skills are shown
  items: string; // comma separated, like "C#, TypeScript, C++"
}

export interface CVInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string; // optional, an empty string means "not shown"
  links: CVLink[];
  work: WorkEntry[];
  projects: ProjectEntry[];
  skills: SkillGroup[];
  schoolName: string;
  studyTitle: string;
  studyDate: string;
  schoolAddress: string;
}

// every CVInfo field that holds plain text (everything except links)
export type TextField = Exclude<
  keyof CVInfo,
  "links" | "work" | "projects" | "skills"
>;

export interface FormSectionProps {
  info: CVInfo;
  onChange: (field: TextField, value: string) => void;
}
