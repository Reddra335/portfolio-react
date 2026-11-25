import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-slate-800 scroll-mt-24"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* HEADER SECTION — Pakai <Reveal> bukan <div className="reveal"> */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand-accent mb-4">
              003 — EXPERIENCE
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95]">
              Rekam <span className="text-stroke">Jejak</span>.
            </h2>
          </div>
          <p className="max-w-sm text-slate-500 text-sm leading-relaxed">
            Dari lantai bengkel CNC sampai terminal server — semua bagian dari
            proses belajar yang sama.
          </p>
        </Reveal>

        {/* GRID KARTU */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Reveal
              key={exp.id}
              as="article"
              className="group relative border border-slate-800 rounded-lg overflow-hidden bg-brand-dark-2 hover:border-slate-700 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover contrast-105 saturate-110 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-mono text-[10px] tracking-widest text-brand-accent">
                    {exp.period}
                  </div>
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="text-slate-600 group-hover:text-brand-accent transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
