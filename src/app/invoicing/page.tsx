import Link from "next/link";
import { GitBranch, ArrowLeft } from "lucide-react";

export default function InvoicingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* ── Header ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
        style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-screen-xl mx-auto px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#e07830] shrink-0" />
            <span className="font-bold text-[15px] tracking-tight">FreeERP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#modules" className="text-[13px] text-white/40 hover:text-white transition-colors">
              Modules
            </Link>
            <a
              href="https://github.com/byadditya"
              className="text-[13px] text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
            </a>
          </nav>

          <a
            href="https://github.com/byadditya"
            className="hidden md:block bg-white text-black text-[13px] font-semibold px-5 py-2 hover:bg-white/90 transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* ── Module Hero ─────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-screen-xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] text-white/30 hover:text-white/60 transition-colors mb-14"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          {/* Tag */}
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e07830]" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-medium">
              Module 01 · Finance
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[72px] md:text-[100px] lg:text-[120px] font-black leading-[0.88] tracking-tight mb-8 max-w-4xl">
            Invoicing
          </h1>

          {/* Description */}
          <p className="text-[16px] text-white/50 max-w-md mb-14 leading-relaxed">
            Create, send, and track invoices — with payment reminders and live status tracking built in.
          </p>

          {/* Bullet points */}
          <div className="mb-14 space-y-0 max-w-lg border-t border-white/[0.06]">
            {[
              "Create and send professional invoices in seconds",
              "Track payment status — paid, pending, or overdue",
              "Automatic payment reminders so you don't have to chase",
              "Export to PDF and share with clients via link",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.06]">
                <span className="text-[10px] text-white/20 font-mono mt-0.5 tabular-nums w-4 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-[14px] text-white/55 leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://github.com/byadditya"
            className="inline-flex items-center gap-2.5 bg-white text-black text-[13px] font-semibold px-7 py-3.5 hover:bg-white/90 transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </section>

      {/* ── Screenshots ─────────────────────────────────────── */}
      <section className="px-8 py-24 border-t border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">— Screenshots</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {["Screenshot 1", "Screenshot 2"].map((label) => (
              <div
                key={label}
                className="aspect-video bg-white/[0.03] border border-white/[0.06] flex items-center justify-center"
              >
                <span className="text-[13px] text-white/20 font-mono">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-8 px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 bg-[#e07830]" />
            <span className="font-bold text-sm text-white/45">FreeERP</span>
          </Link>
          <p className="text-white/20 text-[12px]">
            MIT License · Built with Next.js, Tailwind CSS &amp; Prisma
          </p>
          <a
            href="https://github.com/byadditya"
            className="flex items-center gap-1.5 text-white/25 hover:text-white/50 text-[12px] transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
