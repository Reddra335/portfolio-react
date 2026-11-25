import { useReveal } from "../../hooks";

export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
