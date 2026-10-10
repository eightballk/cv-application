import { useState } from "react";
import CVPage from "@/components/CVPage/CVPage";
import PagePreview from "@/components/CVPage/PagePreview";
import General from "@/components/cv-sections/general-section/General";
import Experience from "@/components/cv-sections/work-section/Experience";
import Projects from "@/components/cv-sections/project-section/Projects";
import Skills from "@/components/cv-sections/skills-section/Skills";
import Education from "@/components/cv-sections/education-section/Education";
import Button from "@/components/ui/Button";
import { emptyInfo, sampleInfo } from "@/lib/defaults";
import { loadInfo, saveInfo } from "@/lib/storage";
import type { CVInfo, ListField, TextField } from "@/types";
import { useAutosave } from "@/hooks/useAutoSave";

export default function App() {
  const [info, setInfo] = useState<CVInfo>(loadInfo);

  useAutosave(info, saveInfo);

  const updateField = (field: TextField, value: string) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
  };

  const setList =
      <K extends ListField>(key: K) =>
      (value: CVInfo[K]) => {
        setInfo((prev) => ({ ...prev, [key]: value }));
      };

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

  return (
    <div className="flex h-screen flex-col bg-neutral-900 text-white print:block print:h-auto print:bg-white">
      <header className="flex shrink-0 items-center justify-between border-b border-neutral-700 px-6 py-3 print:hidden">
        <h1 className="text-lg font-bold">CV Builder</h1>
        <div className="flex gap-2">
          <Button variant="light" className="px-4" onClick={loadSample}>
            Load sample
          </Button>
          <Button variant="light" className="px-4" onClick={clearAll}>
            Clear all
          </Button>
          <Button variant="light" className="px-4" onClick={() => window.print()}>
            Print / Save PDF
          </Button>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[1.3fr_2fr] grid-rows-1 print:block">
        <div className="flex flex-col gap-10 overflow-y-auto p-8 print:hidden">
          <General info={info} onChange={updateField} onLinksChange={setList("links")} />
          <Experience entries={info.work} onChange={setList("work")} />
          <Projects entries={info.projects} onChange={setList("projects")} />
          <Skills groups={info.skills} onChange={setList("skills")} />
          <Education entries={info.education} onChange={setList("education")} />
        </div>

        <main className="overflow-y-auto bg-neutral-800 p-6 [scrollbar-gutter:stable] print:overflow-visible print:bg-white print:p-0">
          <PagePreview>
            <CVPage person={info} />
          </PagePreview>
        </main>
      </div>
    </div>
  );
}
