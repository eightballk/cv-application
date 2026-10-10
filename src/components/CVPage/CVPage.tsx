import { LinkIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CVInfo } from "@/types";
import { displayUrl, toHref } from "@/lib/links";
import ExperienceSection from "@/components/cv-sections/work-section/ExperienceSection";
import ProjectsSection from "@/components/cv-sections/project-section/ProjectSection";
import SkillsSection from "@/components/cv-sections/skills-section/SkillsSection";
import EducationSection from "../cv-sections/education-section/EducationSection";

interface CVPageProps {
  person: CVInfo;
}

interface ContactEntry {
  key: string;
  icon: LucideIcon;
  text: string;
  href?: string;
}

function ContactRow({ entries }: { entries: ContactEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {entries.map(({ key, icon: Icon, text, href }, index) => {
        const isWebLink = href?.startsWith("http");

        return (
          <li key={key} className="flex items-center gap-3">
            {index > 0 && (
              <span aria-hidden className="text-neutral-400">
                |
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Icon className="size-3.5 shrink-0" />
              {href ? (
                <a
                  href={href}
                  className="hover:underline"
                  target={isWebLink ? "_blank" : undefined}
                  rel={isWebLink ? "noopener noreferrer" : undefined}
                >
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

const hasText = (entry: ContactEntry) => entry.text.trim() !== "";

export default function CVPage({ person }: CVPageProps) {
  const topRow: ContactEntry[] = [
    { key: "phone", icon: PhoneIcon, text: person.phoneNumber, href: `tel:${person.phoneNumber.replace(/\s/g, "")}` },
    { key: "address", icon: MapPinIcon, text: person.address },
  ].filter(hasText);

  const bottomRow: ContactEntry[] = [
    { key: "email", icon: MailIcon, text: person.email, href: `mailto:${person.email}` },
    ...person.links.map((link) => ({
      key: link.id,
      icon: LinkIcon,
      text: displayUrl(link.url),
      href: toHref(link.url),
    })),
  ].filter(hasText);

  return (
    <div className="sticky top-2.5 min-h-screen bg-white">
      <header className="border-b-2 border-black pb-4">
        <h1 className="text-2xl font-bold tracking-tight">{person.fullName}</h1>
        <div className="mt-3 flex flex-col gap-1 text-sm">
          <ContactRow entries={topRow} />
          <ContactRow entries={bottomRow} />
        </div>
      </header>

      <ExperienceSection entries={person.work} />
      <ProjectsSection entries={person.projects} />
      <SkillsSection groups={person.skills} />
      <EducationSection entries={person.education} />
    </div>
  );
}
