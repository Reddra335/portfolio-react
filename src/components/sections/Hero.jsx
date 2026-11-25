import HeroParticles from "../ui/HeroParticles";
import heroPortrait from "../../images/person/foto1.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24 pb-16 px-6 md:px-12 scroll-mt-24"
    >
      <HeroParticles />

      <div className="relative max-w-[1600px] mx-auto">
        <div className="flex justify-between font-mono text-[10px] md:text-xs tracking-[0.25em] text-slate-500 pt-8">
          <span>001 — HERO</span>
          <span>BANDUNG, ID · 2026 · V1</span>
        </div>

        <div className="relative mt-6 md:mt-12">
          {/* 📸 HERO PORTRAIT — full color + soft fade + blur on left */}
          <div className="absolute right-0 md:-right-4 top-0 w-[65%] md:w-[42%] h-[420px] md:h-[560px] overflow-hidden z-0">
            <img
              src={heroPortrait}
              alt="Rendi Damara"
              className="w-full h-full object-cover object-top contrast-105 saturate-110 hero-mask-fade"
              loading="eager"
            />
            {/* Blur overlay di tepi kiri */}
            <div className="absolute inset-y-0 left-0 w-[45%] backdrop-blur-sm hero-blur-mask pointer-events-none" />
            {/* Gradient blend ke background */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-transparent to-brand-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/50" />
          </div>

          <h1 className="relative z-10 font-black text-white tracking-[-0.05em] leading-[0.8] text-[19vw] md:text-[12rem]">
            RENDI
          </h1>
          <h1 className="relative z-10 font-black text-stroke tracking-[-0.05em] leading-[0.8] text-[19vw] md:text-[12rem] whitespace-nowrap">
            DAMARA
          </h1>
        </div>

        <div className="relative z-20 mt-10 md:mt-20 grid md:grid-cols-2 gap-8 items-end">
          <div className="max-w-md">
            <div className="font-mono text-[10px] tracking-[0.3em] text-brand-accent mb-3">
              // SOFTWARE × HARDWARE
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Backend developer & hardware engineer yang membangun sistem dari{" "}
              <span className="text-white">logika</span> hingga{" "}
              <span className="text-white">design cad</span>. Merancang API Go,
              eksperimen PCB, dan riset energi terbarukan.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="glass border border-white/10 rounded-full px-5 py-3 flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.2em] text-white">
              <span className="w-2 h-2 bg-green-500 rounded-full pulse-dot" />
              WEAK ENGINEER — AVAILABLE FOR FREELANCE
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-slate-600">
          <span className="animate-bounce">↓</span>
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}
