import type { CVInfo } from "@/types";
import { defaultSections } from "@/lib/sections";

export const emptyInfo: CVInfo = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  links: [],
  work: [],
  projects: [],
  skills: [],
  education: [],
  sections: defaultSections(),
};

export const sampleInfo: CVInfo = {
  fullName: "Spongebob Squarepants",
  email: "spongebob123@gmail.com",
  phoneNumber: "707 663 GARY",
  address: "Bikini Bottom, Pacific Ocean",
  links: [
    { id: "1", url: "github.com/spongebob" },
    { id: "2", url: "linkedin.com/in/spongebob" },
  ],
  work: [
    {
      id: "work-1",
      company: "The Krusty Krab",
      position: "Fry Cook",
      location: "Bikini Bottom",
      startDate: "Jan 1998",
      endDate: "Present",
      highlights:
        "Cook 200+ Krabby Patties per shift\nKeep the kitchen spotless during rush hour",
    },
  ],
  projects: [
    {
      id: "project-1",
      name: "Jellyfish Tracker",
      url: "github.com/spongebob/jellyfish-tracker",
      techStack: "React, TypeScript, Tailwind",
      highlights:
        "Tracks 50+ jellyfish sightings on a live map\nCut load time by 40% with lazy loading",
    },
  ],
  skills: [
    { id: "skills-1", category: "Languages", items: "C#, TypeScript, C++" },
    {
      id: "skills-2",
      category: "Frameworks",
      items: "ASP.NET Core, React, Tailwind CSS",
    },
  ],
  education: [
    {
      id: "education-1",
      school: "Mrs. Puff's Boating School",
      degree: "BSc in Boating",
      location: "Bikini Bottom",
      startDate: "1999",
      endDate: "Present",
      highlights: "Failed the driving test 38 times",
    },
  ],
  sections: defaultSections(),
};
