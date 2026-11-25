import LocalImage from '../effects/LocalImage.jsx';

export default function LabNoteCard({ note }) {
  return (
    <article className="reveal group border border-slate-800 rounded-lg overflow-hidden bg-brand-dark-2 hover:border-brand-accent/40 transition">
      <div className="aspect-[16/10] overflow-hidden">
        <LocalImage src={note.image} fallback={note.fallback} alt={note.category} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="p-6">
        <div className="font-mono text-[10px] tracking-widest text-brand-accent mb-2">{note.date} · {note.category}</div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition leading-snug">{note.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{note.description}</p>
      </div>
    </article>
  );
}
