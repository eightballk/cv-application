export interface CVInfo {
  fullName: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  address: string;
  schoolName: string;
  studyTitle: string;
  studyDate: string;
  schoolAddress: string;
  companyName: string;
  jobPosition: string;
  jobDescription: string;
  jobDate: string;
}

export interface FormSectionProps {
  info: CVInfo;
  onChange: (field: keyof CVInfo, value: string) => void;
}
