import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import type { CVInfo, CVLink, EducationEntry, ProjectEntry, SkillGroup, TextField, WorkEntry } from "@/types";
import CVPage from "@/components/CVPage/CVPage";
import Experience from "@/components/cv-sections/work-section/Experience";
import General from "@/components/cv-sections/general-section/General";
import Projects from "@/components/cv-sections/project-section/Projects";
import Skills from "@/components/cv-sections/skills-section/Skills";
import Education from "./components/cv-sections/education-section/Education";
import { emptyInfo, sampleInfo } from "@/lib/defaults";
import { loadInfo, saveInfo } from "@/lib/storage";

export default function App() {
  const [info, setInfo] = useState<CVInfo>(loadInfo);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    saveInfo(info);
  }, [info]);

  const clearAll = () => {
    if (window.confirm("Clear everything? This removes all the information you entered.")) {
      setInfo(emptyInfo);
    }
  };

  const loadSample = () => {
    if (window.confirm("Replace everything with the sample data?")) {
      setInfo(sampleInfo);
    }
  };

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

  const updateSkills = (skills: SkillGroup[]) => {
    setInfo((prev) => ({ ...prev, skills }));
  };

  const updateEducation = (education: EducationEntry[]) => {
    setInfo((prev) => ({ ...prev, education }));
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
        <div className="mx-12 mt-12 flex gap-2">
          <Button variant="light" className="px-4" onClick={loadSample}>
            Load sample
          </Button>
          <Button variant="light" className="px-4" onClick={clearAll}>
            Clear all
          </Button>
        </div>
        <General info={info} onChange={updateField} onLinksChange={updateLinks} />
        <Experience entries={info.work} onChange={updateWork} />
        <Projects entries={info.projects} onChange={updateProjects} />
        <Skills groups={info.skills} onChange={updateSkills} />
        <Education entries={info.education} onChange={updateEducation} />
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
