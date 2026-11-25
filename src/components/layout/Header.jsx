import { Icon } from "@iconify/react";
import { mainNav } from "../../data/nav";
import { generateCV, downloadTextFile } from "../../lib/cv";
import { useToast } from "../ui/ToastProvider";
// ... import sebelumnya

export default function Header({ onMenuOpen, onPanelOpen }) {
  const { showToast } = useToast();

  const handleDownloadCV = () => {
    downloadTextFile("Rendi-Damara-CV.txt", generateCV());
    showToast("CV BERHASIL DIUNDUH");
  };

  return (
    <header className="fixed top-0 inset-x-0 h-20 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="h-full px-6 md:px-12 max-w-[1700px] mx-auto flex items-center justify-between">
        {/* --- LOGO AREA YANG DIPERBAIKI --- */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="relative w-9 h-9 rounded-full border border-[#7DD3FC]/50 flex items-center justify-center group-hover:border-[#7DD3FC] transition">
            {/* Tambahan class "block" dan "shrink-0" agar dot tidak hilang */}
            <span className="block shrink-0 w-2 h-2 rounded-full bg-[#7DD3FC]" />
          </span>
          <span className="font-mono text-xs tracking-[0.25em] text-white">
            REDDRA<span className="text-[#7DD3FC]">.</span>
          </span>
        </a>
        {/* ---------------------------------- */}

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-slate-400">
          {mainNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link hover:text-white transition"
            >
              {item.number} / {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={handleDownloadCV}
            className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] px-4 py-2 border border-slate-700 hover:border-brand-accent hover:text-brand-accent transition rounded-full"
          >
            <Icon icon="lucide:download" className="text-sm" />
            DOWNLOAD CV
          </button>
          <button
            onClick={onPanelOpen}
            aria-label="Open lab panel"
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition"
          >
            <Icon icon="lucide:flask-conical" />
          </button>
          <button
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition"
          >
            <Icon icon="lucide:menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
