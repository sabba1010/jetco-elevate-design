import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card overflow-hidden">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <button
            key={i}
            onClick={() => setOpen(isOpen ? null : i)}
            className="w-full text-left p-6 md:p-7 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="font-display text-xl md:text-2xl text-ink">{it.q}</div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-ink-soft transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-ink-soft text-[15px] leading-relaxed">
                {it.a}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
