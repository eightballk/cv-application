interface CVEntryProps {
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  bullets: string[];
}

export default function CVEntry({ title, subtitle, dates, location, bullets }: CVEntryProps) {
  return (
    <article>
      <div className="flex justify-between gap-4">
        <h3 className="font-bold">{title}</h3>
        <span className="shrink-0 text-sm">{dates}</span>
      </div>
      <div className="flex justify-between gap-4 text-sm italic">
        <span>{subtitle}</span>
        <span>{location}</span>
      </div>
      {bullets.length > 0 && (
        <ul className="mt-1.5 list-disc pl-5 text-sm">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
