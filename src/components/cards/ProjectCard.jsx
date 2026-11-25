import LocalImage from '../effects/LocalImage.jsx';

export default function ProjectCard({ project }) {
  const isFeatured = project.featured;
  const isWide = project.wide;
  const layoutClass = isFeatured ? 'md:col-span-8 md:min-h-[480px]' : isWide ? 'md:col-span-12 md:aspect-[21/9]' : 'md:col-span-4';
  const aspectClass = isFeatured ? 'aspect-[16/10] md:aspect-auto' : isWide ? 'aspect-[16/9]' : 'aspect-[4/3] md:aspect-auto';
  const gradientClass = isWide ? 'bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent' : 'bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent';
  const contentClass = isWide ? 'relative h-full p-6 md:p-10 flex flex-col justify-end max-w-2xl' : 'relative h-full p-6 flex flex-col justify-end';

  return (
    <article className={`reveal group relative ${layoutClass} ${aspectClass} rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition`}>
      <LocalImage src={project.image} fallback={project.fallback} alt={project.title} className={`absolute inset-0 w-full h-full object-cover mix-blend-luminosity ${isFeatured || isWide ? 'opacity-40' : 'opacity-40'} group-hover:opacity-70 group-hover:scale-105 transition-all duration-700`} />
      <div className={`absolute inset-0 ${gradientClass}`} />
      <div className={contentClass}>
        <div className="font-mono text-[10px] tracking-widest text-brand-accent mb-2">{project.number} — {project.category}</div>
        <h3 className={`${isFeatured || isWide ? 'text-2xl md:text-4xl font-black' : 'text-xl font-bold'} text-white mb-2 ${isFeatured || isWide ? 'mb-3' : ''}`}>{project.title}</h3>
        <p className={`${isFeatured || isWide ? 'text-slate-300 text-sm max-w-lg mb-5' : 'text-slate-400 text-xs mb-3'}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => <span key={tag} className={`font-mono text-[10px] ${isFeatured ? 'px-2 py-1' : 'px-2 py-0.5'} border border-slate-600 rounded text-slate-300`}>{tag}</span>)}
        </div>
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white hover:text-brand-accent transition">
            VIEW ON GITHUB <iconify-icon icon="lucide:arrow-up-right" />
          </a>
        )}
      </div>
    </article>
  );
}
