import { CakeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CVInfo } from "../types";

interface CVPageProps {
  person: CVInfo;
}

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  alignEnd?: boolean;
}

function ContactItem({ icon: Icon, text, alignEnd = false }: ContactItemProps) {
  return (
    <div className={`flex items-center gap-1 ${alignEnd ? "justify-end" : "justify-start"}`}>
      <Icon className="size-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

export default function CVPage({ person }: CVPageProps) {
  return (
    <div className="sticky top-2.5 col-start-2 min-h-screen bg-white">
      <header>
        <h1 className="p-5 text-3xl font-bold tracking-tight">{person.fullName}</h1>
        <div className="grid w-11/12 grid-cols-[1fr_2fr] items-start gap-2 p-5">
          <ContactItem icon={CakeIcon} text={person.birthDate} />
          <ContactItem icon={MailIcon} text={person.email} alignEnd />
          <ContactItem icon={PhoneIcon} text={person.phoneNumber} />
          <ContactItem icon={MapPinIcon} text={person.address} alignEnd />
        </div>
      </header>

      <section className="p-5">
        <h2 className="text-2xl font-bold">Education</h2>
        <hr className="mb-2.5 h-0.5 w-11/12 border-0 bg-black" />
        <div className="grid w-11/12 grid-cols-[1.5fr_3fr]">
          <p className="font-bold">{person.studyDate}</p>
          <div className="flex flex-col items-start gap-2.5">
            <p className="font-bold">
              <span className="text-xl">{person.schoolName},</span> {person.schoolAddress}
            </p>
            <p>
              <span className="font-bold">Title of study:</span>{" "}
              <span className="font-semibold">{person.studyTitle}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="p-5">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <hr className="mb-2.5 h-0.5 w-11/12 border-0 bg-black" />
        <div className="grid w-11/12 grid-cols-[1.5fr_3fr]">
          <p className="font-bold">{person.jobDate}</p>
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-xl font-bold">{person.jobPosition}</p>
            <p className="font-semibold">
              <span className="font-bold">Company Name:</span> {person.companyName}
            </p>
            <p className="text-lg font-semibold">{person.jobDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
