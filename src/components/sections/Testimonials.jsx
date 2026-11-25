import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [paused]);

  const go = (i) => {
    setCurrent((i + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="text-center mb-12 reveal">
          <div className="font-mono text-[11px] tracking-[0.3em] text-brand-accent mb-4">
            006 — TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Kata <span className="text-stroke">Mereka</span>.
          </h2>
        </div>

        <Reveal className="max-w-3xl mx-auto relative">
          <div className="flex justify-center mb-4">
            <Icon
              icon="lucide:quote"
              className="text-brand-accent/30 text-6xl"
            />
          </div>

          <div
            className="relative min-h-[180px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className={`text-center transition-opacity duration-500 ${
                  i === current
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                  {t.quote}
                </p>
                <footer className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
                  {t.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => go(current - 1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition"
            >
              <Icon icon="lucide:arrow-left" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition ${
                    i === current ? "bg-brand-accent" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(current + 1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition"
            >
              <Icon icon="lucide:arrow-right" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
