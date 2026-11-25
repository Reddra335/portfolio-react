import Reveal from "../ui/Reveal";
import { techStack, aboutHighlights } from "../../data/techStack";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-slate-800 scroll-mt-24"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand-accent mb-4">
              002 — ABOUT
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.95]">
              Dari SMK
              <br />
              ke <span className="text-stroke-accent">Elektro</span>.
            </h2>
            <p className="mt-6 font-mono text-[11px] text-slate-500 leading-relaxed">
              "Weak Engineer" bukan label rendah diri, ini pengingat bahwa di
              setiap sistem yang dibangun, selalu ada ruang untuk belajar.
            </p>
          </Reveal>

          <Reveal className="md:col-span-8">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4">
              Perjalanan dimulai sebagai siswa{" "}
              <span className="text-white font-medium">SMK Doa Bangsa</span>{" "}
              jurusan RPL (Axioo Class Program Gen 6), lalu berlanjut ke{" "}
              <span className="text-white font-medium">
                S1 Teknik Elektro Telkom University
              </span>{" "}
              — semester 3 saat ini.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Fokus di persimpangan software & hardware: arsitektur backend
              berskala, sistem tertanam, dan riset energi terbarukan. Percaya
              bahwa engineer yang baik bisa membaca <em>datasheet</em> dan{" "}
              <em>pull request</em> dengan intensitas yang sama.
            </p>

            {/* TABLE 1: ABOUT HIGHLIGHTS (Border explicit) */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-800 rounded-lg overflow-hidden bg-brand-dark">
              {aboutHighlights.map((h) => (
                <div
                  key={h.label}
                  className="border-r border-b border-slate-800 p-5 hover:bg-brand-dark-3 transition-colors duration-300"
                >
                  <div className="font-mono text-[10px] text-slate-500 tracking-[0.2em] mb-2">
                    {h.label}
                  </div>
                  <div className="text-white font-bold text-sm leading-snug">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* TABLE 2: TECH STACK (Border explicit) */}
        <Reveal className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <div className="font-mono text-[10px] tracking-[0.3em] text-slate-500">
              TECH STACK / TOOLKIT
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-slate-600">
              [ {techStack.length} ITEMS ]
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-800 rounded-lg overflow-hidden bg-brand-dark">
            {techStack.map((item) => (
              <div
                key={item}
                className="border-r border-b border-slate-800 p-5 group hover:bg-brand-dark-3 transition-colors duration-300"
              >
                <span className="font-mono text-sm text-white group-hover:text-brand-accent transition-colors duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
