import Link from "next/link";
import { GitBranch, ArrowLeft } from "lucide-react";

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">

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
          <a
            href="https://github.com/byadditya"
            className="hidden md:block bg-white text-black text-[13px] font-semibold px-5 py-2 hover:bg-white/90 transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* ── Content ─────────────────────────────────────────── */}
      <main className="flex-1 flex items-center justify-center px-8 pt-14">
        <div className="max-w-screen-xl w-full py-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] text-white/30 hover:text-white/60 transition-colors mb-16"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-white/25 font-medium">
              Module 02 · Operations
            </span>
          </div>

          <h1 className="text-[72px] md:text-[100px] lg:text-[120px] font-black leading-[0.88] tracking-tight mb-8">
            Inventory
          </h1>

          <p className="text-[16px] text-white/35 max-w-sm leading-relaxed">
            Coming soon — follow along as we build this.
          </p>
        </div>
      </main>

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
