import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import {
  featuredProject,
  smallProjects,
  wideProject,
} from "../../data/projects";

function TechPill({ children }) {
  return (
    <span className="font-mono text-[10px] px-2 py-0.5 border border-slate-600 rounded text-slate-300">
      {children}
    </span>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-slate-800 scroll-mt-24"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* HEADER SECTION — Sudah diperbaiki pakai <Reveal> */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand-accent mb-4">
              004 — SIGNATURE WORK
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95]">
              Karya
              <br />
              <span className="text-stroke">Terpilih</span>.
            </h2>
          </div>
          <p className="max-w-sm text-slate-500 text-sm leading-relaxed">
            Kumpulan proyek lintas disiplin — software, hardware, dan riset
            mandiri.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured 8-col */}
          <Reveal
            as="article"
            className="md:col-span-8 group relative aspect-[16/10] md:aspect-auto md:min-h-[480px] rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition"
          >
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
            <div className="relative h-full p-6 md:p-10 flex flex-col justify-end">
              <div className="font-mono text-[10px] tracking-widest text-brand-accent mb-2">
                {featuredProject.category}
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mb-5">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.tech.map((t) => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
              <a
                href={featuredProject.link}
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white hover:text-brand-accent transition"
              >
                VIEW ON GITHUB <Icon icon="lucide:arrow-up-right" />
              </a>
            </div>
          </Reveal>

          {/* Small 4-col each */}
          {smallProjects.map((p) => (
            <Reveal
              key={p.id}
              as="article"
              className="md:col-span-4 group relative aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="font-mono text-[10px] tracking-widest text-brand-accent mb-2">
                  {p.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs mb-3">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <TechPill key={t}>{t}</TechPill>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Wide 12-col */}
          <Reveal
            as="article"
            className="md:col-span-12 group relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition"
          >
            <img
              src={wideProject.image}
              alt={wideProject.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
            <div className="relative h-full p-6 md:p-10 flex flex-col justify-end max-w-2xl">
              <div className="font-mono text-[10px] tracking-widest text-brand-accent mb-2">
                {wideProject.category}
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-3">
                {wideProject.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                {wideProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {wideProject.tech.map((t) => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
