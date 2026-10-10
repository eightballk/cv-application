import { useState } from "react";
import Educational from "@/components/Educational";
import Button from "@/components/ui/Button";
import type { CVInfo, CVLink, ProjectEntry, TextField, WorkEntry } from "@/types";
import CVPage from "@/components/CVPage/CVPage";
import Experience from "@/components/cv-sections/work-section/Experience";
import General from "@/components/cv-sections/general-section/General";
import Projects from "@/components/cv-sections/project-section/Projects";

const initialInfo: CVInfo = {
  fullName: "Spongebob Squarepants",
  email: "spongebob123@gmail.com",
  phoneNumber: "707 663 GARY",
  address: "Bikini Bottom, Pacific Ocean",
  links: [
    { id: "1", url: "github.com/spongebob" },
    { id: "2", url: "linkedin.com/in/spongebob" },
  ],
  schoolName: "Mrs. Puff's Boating School",
  studyTitle: "Boating",
  studyDate: "1999-Present",
  schoolAddress: "Bikini Bottom",
  work: [
    {
      id: "work-1",
      company: "The Krusty Krab",
      position: "Fry Cook",
      location: "Bikini Bottom",
      startDate: "Jan 1998",
      endDate: "Present",
      highlights: "Cook 200+ Krabby Patties per shift\nKeep the kitchen spotless during rush hour",
    },
  ],
  projects: [
    {
      id: "project-1",
      name: "Jellyfish Tracker",
      url: "github.com/spongebob/jellyfish-tracker",
      techStack: "React, TypeScript, Tailwind",
      highlights: "Tracks 50+ jellyfish sightings on a live map\nCut load time by 40% with lazy loading",
    },
  ],
};

export default function App() {
  const [info, setInfo] = useState<CVInfo>(initialInfo);
  const [isPreview, setIsPreview] = useState(false);

  const updateField = (field: TextField, value: string) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
  };

  const updateLinks = (links: CVLink[]) => {
    setInfo((prev) => ({ ...prev, links }));
  };

  const updateWork = (work: WorkEntry[]) => {
    setInfo((prev) => ({ ...prev, work }));
  };

  const updateProjects = (projects: ProjectEntry[]) => {
    setInfo((prev) => ({ ...prev, projects }));
  };

  if (isPreview) {
    return (
      <>
        <CVPage person={info} />
        <Button className="absolute bottom-12 right-10 w-24" onClick={() => window.print()}>
          Print
        </Button>
        <Button className="absolute bottom-12 left-10 w-24" onClick={() => setIsPreview(false)}>
          Edit
        </Button>
      </>
    );
  }

  return (
    <div className="grid min-h-screen min-w-full grid-cols-[1.3fr_2fr] bg-neutral-900">
      <div>
        <General info={info} onChange={updateField} onLinksChange={updateLinks} />
        <Experience entries={info.work} onChange={updateWork} />
        <Projects entries={info.projects} onChange={updateProjects} />
        <Educational info={info} onChange={updateField} />
      </div>
      <div className="mx-12 my-28">
        <CVPage person={info} />
      </div>
      <Button variant="light" className="m-auto mb-8 w-1/2" onClick={() => setIsPreview(true)}>
        Submit
      </Button>
    </div>
  );
}
