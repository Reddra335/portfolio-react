import { Icon } from "@iconify/react";
import { sidebarNav, socialLinks } from "../../data/nav";
import { useLockBodyScroll, useEscapeKey } from "../../hooks";

export default function Sidebar({ open, onClose }) {
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
        className={`fixed inset-y-0 left-0 w-full md:w-[420px] bg-brand-dark-2 border-r border-slate-800 z-[70] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 px-6 md:px-8 flex items-center justify-between border-b border-slate-800">
          <span className="font-mono text-[11px] tracking-[0.25em] text-slate-500">
            MENU / NAVIGATION
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition"
          >
            <Icon icon="lucide:x" />
          </button>
        </div>

        <nav className="flex-1 px-6 md:px-8 py-10 flex flex-col gap-1">
          {sidebarNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onClose}
              className="group flex items-baseline justify-between py-4 border-b border-slate-800/60"
            >
              <span className="text-4xl md:text-5xl font-black text-white group-hover:text-brand-accent transition">
                {item.label}
              </span>
              <span className="font-mono text-xs text-slate-600">
                {item.number}
              </span>
            </a>
          ))}
        </nav>

        <div className="px-6 md:px-8 py-6 border-t border-slate-800">
          <div className="font-mono text-[10px] tracking-[0.25em] text-slate-500 mb-4">
            FIND ME
          </div>
          <div className="flex flex-col gap-3 font-mono text-xs">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between text-slate-400 hover:text-brand-accent transition"
              >
                <span className="flex items-center gap-2">
                  <Icon icon={s.icon} /> {s.label}
                </span>
                <Icon icon="lucide:arrow-up-right" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
