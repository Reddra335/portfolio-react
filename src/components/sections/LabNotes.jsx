import Reveal from "../ui/Reveal";
import { labNotes } from "../../data/labNotes";

export default function LabNotes() {
  return (
    <section
      id="blog"
      className="relative border-t border-slate-800 scroll-mt-24"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand-accent mb-4">
              005 — LAB NOTES
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95]">
              Catatan
              <br />
              <span className="text-stroke">Riset</span>.
            </h2>
          </div>
          <p className="max-w-sm text-slate-500 text-sm leading-relaxed">
            Tulisan pendek tentang hal-hal yang belum jadi proyek utuh — tapi
            sudah mengganggu pikiran.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {labNotes.map((note) => (
            <Reveal
              key={note.id}
              as="article"
              className="group border border-slate-800 rounded-lg overflow-hidden bg-brand-dark-2 hover:border-brand-accent/40 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={note.image}
                  alt={note.title}
                  loading="lazy"
                  className="w-full h-full object-cover contrast-105 saturate-110 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] tracking-widest text-brand-accent mb-2">
                  {note.date} · {note.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition leading-snug">
                  {note.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {note.excerpt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
