export default function GridBackground() {
  return (
    <div
      className="grid-bg fixed inset-0 z-0 hidden md:grid grid-cols-12 pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
}
