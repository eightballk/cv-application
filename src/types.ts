import type { Dispatch, SetStateAction } from "react";

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
  getGeneralInfo: Dispatch<SetStateAction<CVInfo>>;
  generalInfo: CVInfo;
}
