import { useScrollProgress } from "../../hooks";

export default function ProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      id="progress-bar"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[2px] bg-brand-accent z-[100] transition-[width] duration-100"
    />
  );
}
