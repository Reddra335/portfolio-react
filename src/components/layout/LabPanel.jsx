import { Icon } from "@iconify/react";
import { labProjects } from "../../data/labProjects";
import { useLockBodyScroll, useEscapeKey } from "../../hooks";

export default function LabPanel({ open, onClose }) {
  useLockBodyScroll(open);
  useEscapeKey(onClose, open);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 w-full md:w-[420px] bg-brand-dark-2 border-l border-slate-800 z-[70] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-20 px-6 md:px-8 flex items-center justify-between border-b border-slate-800">
          <span className="font-mono text-[11px] tracking-[0.25em] text-slate-500">
            ACTIVE LAB / PROJECTS
          </span>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition"
          >
            <Icon icon="lucide:x" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8 space-y-6">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-slate-500">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot" />
            LIVE · WEEK 46 · V1
          </div>
          <div className="space-y-4">
            {labProjects.map((p) => (
              <div
                key={p.title}
                className="p-4 border border-slate-800 rounded-lg hover:border-brand-accent/40 transition group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`font-mono text-[10px] tracking-widest ${p.color}`}
                  >
                    {p.label}
                  </span>
                  <Icon
                    icon={p.icon}
                    className="text-slate-600 group-hover:text-brand-accent transition"
                  />
                </div>
                <h4 className="text-white font-bold mb-1">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-8 py-5 border-t border-slate-800">
          <a
            href="#contact"
            onClick={onClose}
            className="block w-full text-center font-mono text-[11px] tracking-[0.2em] py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition rounded-full"
          >
            KOLABORASI →
          </a>
        </div>
      </aside>
    </>
  );
}
