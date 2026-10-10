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

export interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  location: string; // can be empty, hidden on the CV when blank
  startDate: string;
  endDate: string;
  highlights: string; // one bullet per line, can be empty
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
  education: EducationEntry[];
}

// every CVInfo field that holds plain text (everything except links)
export type TextField = {
  [K in keyof CVInfo]: CVInfo[K] extends string ? K : never;
}[keyof CVInfo];

export interface FormSectionProps {
  info: CVInfo;
  onChange: (field: TextField, value: string) => void;
}

export type ListField = Exclude<keyof CVInfo, TextField>;
