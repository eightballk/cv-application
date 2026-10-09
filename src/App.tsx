import { useState } from "react";
import CVPage from "./components/CVPage";
import Educational from "./components/Educational";
import General from "./components/General";
import Practical from "./components/Practical";
import Button from "./components/ui/Button";
import type { CVInfo } from "./types";

const initialInfo: CVInfo = {
  fullName: "Spongebob Squarepants",
  birthDate: "July 14th, 1986",
  email: "spongebob123@gmail.com",
  phoneNumber: "707 663 GARY",
  address: "Bikini Bottom, Pacific Ocean",
  schoolName: "Mrs. Puff's Boating School",
  studyTitle: "Boating",
  studyDate: "1999-Present",
  schoolAddress: "Bikini Bottom",
  companyName: "The Krusty Krab",
  jobPosition: "Fry cook",
  jobDescription:
    "I have to cook burgers which tastes extremely good on taste buds of your tongue. I also have to clean the floor sometimes.",
  jobDate: "1998 - Present",
};

export default function App() {
  const [info, setInfo] = useState<CVInfo>(initialInfo);
  const [isPreview, setIsPreview] = useState(false);

  const updateField = (field: keyof CVInfo, value: string) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
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
        <General info={info} onChange={updateField} />
        <Educational info={info} onChange={updateField} />
        <Practical info={info} onChange={updateField} />
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
