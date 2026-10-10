import { useState } from "react";
import CVPage from "./components/CVPage";
import Educational from "./components/Educational";
import General from "./components/General";
import Button from "./components/ui/Button";
import type { CVInfo, CVLink, TextField, WorkEntry } from "./types";
import Experience from "./components/Experience";

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
        <Educational info={info} onChange={updateField} />
        <Experience entries={info.work} onChange={updateWork} />
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
