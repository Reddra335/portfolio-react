import { Icon } from "@iconify/react";
import { useToast } from "./ui/ToastProvider";

export default function ContactForm() {
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("PESAN TERKIRIM · TERIMA KASIH");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label
          htmlFor="cf-name"
          className="font-mono text-[10px] tracking-widest text-slate-500 mb-2 block"
        >
          NAME
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 text-sm text-white transition"
          placeholder="nama kamu"
        />
      </div>
      <div>
        <label
          htmlFor="cf-email"
          className="font-mono text-[10px] tracking-widest text-slate-500 mb-2 block"
        >
          EMAIL
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 text-sm text-white transition"
          placeholder="you@domain.com"
        />
      </div>
      <div>
        <label
          htmlFor="cf-message"
          className="font-mono text-[10px] tracking-widest text-slate-500 mb-2 block"
        >
          MESSAGE
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows="3"
          className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 text-sm text-white transition resize-none"
          placeholder="ceritakan proyekmu..."
        />
      </div>
      <button
        type="submit"
        className="w-full font-mono text-[11px] tracking-[0.25em] py-3.5 bg-brand-accent text-brand-dark font-bold rounded hover:bg-white transition flex items-center justify-center gap-2"
      >
        SEND MESSAGE
        <Icon icon="lucide:send" />
      </button>
    </form>
  );
}
