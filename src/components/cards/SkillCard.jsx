export default function SkillCard({ skill }) {
  return (
    <div className="bg-brand-dark p-5 flex items-center justify-between group hover:bg-brand-dark-3 transition">
      <span className="font-mono text-sm text-white">{skill}</span>
      <span className="text-brand-accent opacity-0 group-hover:opacity-100 transition">●</span>
    </div>
  );
}
