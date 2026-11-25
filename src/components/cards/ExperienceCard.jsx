import LocalImage from '../effects/LocalImage.jsx';

export default function ExperienceCard({ experience }) {
  return (
    <article className="reveal group relative border border-slate-800 rounded-lg overflow-hidden bg-brand-dark-2 hover:border-slate-700 transition">
      <div className="aspect-[16/10] overflow-hidden">
        <LocalImage src={experience.image} fallback={experience.fallback} alt={experience.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="font-mono text-[10px] tracking-widest text-brand-accent">{experience.period}</div>
          <iconify-icon icon="lucide:arrow-up-right" class="text-slate-600 group-hover:text-brand-accent transition" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{experience.description}</p>
      </div>
    </article>
  );
}
