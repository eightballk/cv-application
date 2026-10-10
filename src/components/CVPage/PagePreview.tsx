import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

const PAGE_WIDTH_PX = 794; // 210mm at 96 dpi

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
        className="mx-auto min-h-[297mm] w-[210mm] bg-white p-[15mm] text-neutral-900 shadow-lg [zoom:var(--page-scale)] print:min-h-0 print:w-auto print:p-0 print:shadow-none print:[zoom:1]"
      >
        {children}
      </div>
    </div>
  );
}
