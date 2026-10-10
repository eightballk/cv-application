import { ReactNode, useState } from "react";
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
import type { CVInfo, ListField, SectionId, TextField } from "@/types";
import { useAutosave } from "@/hooks/useAutoSave";
import SectionControls from "./components/SectionControls";
import { moveSection, SECTION_LABELS, toggleSection } from "./lib/sections";

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
      setInfo((prev) => ({ ...emptyInfo, sections: prev.sections }));
    }
  };

  const loadSample = () => {
    if (window.confirm("Replace everything with the sample data?")) {
      setInfo((prev) => ({ ...sampleInfo, sections: prev.sections }));
    }
  };
  const setSections = setList("sections");

  const renderForm = (id: SectionId, controls: ReactNode) => {
    switch (id) {
      case "experience":
        return <Experience entries={info.work} onChange={setList("work")} controls={controls} />;
      case "projects":
        return <Projects entries={info.projects} onChange={setList("projects")} controls={controls} />;
      case "skills":
        return <Skills groups={info.skills} onChange={setList("skills")} controls={controls} />;
      case "education":
        return <Education entries={info.education} onChange={setList("education")} controls={controls} />;
    }
  };

  return (
    <div className="flex h-screen flex-col text-fg print:block print:h-auto print:bg-white">
      <header className="flex shrink-0 items-center justify-between border-b border-line/10 bg-surface/60 backdrop-blur-md px-6 py-3 print:hidden">
        <h1 className="text-base font-semibold tracking-light">CV Builder</h1>
        <div className="flex gap-2">
          <Button variant="secondary" className="px-4" onClick={loadSample}>
            Load sample
          </Button>
          <Button variant="secondary" className="px-4" onClick={clearAll}>
            Clear all
          </Button>
          <Button variant="primary" className="px-4" onClick={() => window.print()}>
            Print / Save PDF
          </Button>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[1fr_minmax(0,min(54rem,55%))] grid-rows-1 print:block">
        <div className="overflow-y-auto p-6 print:hidden">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <General info={info} onChange={updateField} onLinksChange={setList("links")} />
            {info.sections.map((section, index) => (
              <div key={section.id} className={section.visible ? "" : "opacity-60"}>
                {renderForm(
                  section.id,
                  <SectionControls
                    label={SECTION_LABELS[section.id]}
                    visible={section.visible}
                    canMoveUp={index > 0}
                    canMoveDown={index < info.sections.length - 1}
                    onMoveUp={() => setSections(moveSection(info.sections, section.id, -1))}
                    onMoveDown={() => setSections(moveSection(info.sections, section.id, 1))}
                    onToggle={() => setSections(toggleSection(info.sections, section.id))}
                  />,
                )}
              </div>
            ))}
          </div>
        </div>

        <main className="overflow-y-auto border-l border-line/10 bg-surface/60 backdrop-blur-md p-6 [scrollbar-gutter:stable] print:overflow-visible print:bg-white print:p-0">
          <PagePreview>
            <CVPage person={info} />
          </PagePreview>
        </main>
      </div>
    </div>
  );
}
