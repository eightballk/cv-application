import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

const PAGE_WIDTH_PX = 794; // 210mm at 96 dpi
const PAGE_MARGIN_MM = 15; // keep in sync with @page in index.css and the p-[15mm] class below
const PAGE_CONTENT_HEIGHT_MM = 297 - 2 * PAGE_MARGIN_MM; // 267mm of content per A4 page
const PAGE_NUMBERS = [2, 3, 4, 5]; // markers for pages 2 to 5 are enough for a CV

interface PagePreviewProps {
  children: ReactNode;
}

export default function PagePreview({ children }: PagePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / PAGE_WIDTH_PX));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full print:w-auto">
      <div
        style={{ "--page-scale": scale } as CSSProperties}
        className="relative mx-auto min-h-[297mm] w-[210mm] bg-white p-[15mm] text-neutral-900 shadow-[0_0_80px_-20px] shadow-primary/30 [zoom:var(--page-scale)] print:min-h-0 print:w-auto print:p-0 print:shadow-none print:[zoom:1]"
      >
        {children}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 overflow-hidden print:hidden"
          style={{ top: `${PAGE_MARGIN_MM}mm`, bottom: `${PAGE_MARGIN_MM}mm` }}
        >
          {PAGE_NUMBERS.map((page) => (
            <div
              key={page}
              className="absolute inset-x-0 border-t border-dashed border-sky-500"
              style={{ top: `${(page - 1) * PAGE_CONTENT_HEIGHT_MM}mm` }}
            >
              <span className="absolute right-0 top-0.5 pr-1 text-xs font-medium text-sky-600">
                Page {page}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
