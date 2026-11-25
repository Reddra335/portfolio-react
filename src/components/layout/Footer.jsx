import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import ContactForm from "../ContactForm";
import { mainNav, socialLinks } from "../../data/nav";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-slate-800 scroll-mt-24"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand-accent mb-4">
              007 — CONTACT
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.95] mb-6">
              Mari
              <br />
              <span className="text-stroke">Bangun</span>
              <br />
              Sesuatu.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Terbuka untuk freelance, kolaborasi riset, atau sekadar diskusi
              teknis. Respons dalam 1×24 jam.
            </p>
            <ContactForm />
          </Reveal>

          <Reveal className="md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.3em] text-slate-500 mb-6">
              NAVIGATION / SITEMAP
            </div>
            {mainNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-baseline justify-between border-t border-slate-800 py-4 md:py-5"
              >
                <span className="text-3xl md:text-5xl font-black text-white group-hover:text-brand-accent transition">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-slate-600">
                  {item.number}
                </span>
              </a>
            ))}
            <div className="border-b border-slate-800" />

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest px-4 py-2 border border-slate-700 rounded-full text-slate-400 hover:border-brand-accent hover:text-brand-accent transition"
                >
                  <Icon icon={s.icon} /> {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 md:px-12 py-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] tracking-[0.25em] text-slate-500">
          <span>© 2026 RENDI DAMARA · WEAK ENGINEER · V1 NO-VIDEO</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot" />
            SYSTEM ONLINE · BANDUNG
          </span>
        </div>
      </div>
    </footer>
  );
}
