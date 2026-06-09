import Link from "next/link";
import Image from "next/image";
import { FileText, Package, Users, UserCheck, FolderKanban, GitBranch, ArrowUpRight } from "lucide-react";

const modules = [
  {
    num: "01",
    label: "Invoicing",
    tag: "Finance",
    description: "Create, send, and track invoices with payment reminders and live status tracking.",
    href: "/invoicing",
    comingSoon: false,
  },
  {
    num: "02",
    label: "Inventory",
    tag: "Operations",
    description: "Track stock levels, manage products, and monitor warehouse movements in real time.",
    href: "/inventory",
    comingSoon: true,
  },
  {
    num: "03",
    label: "CRM",
    tag: "Sales",
    description: "Manage leads, contacts, and deals across a visual pipeline from prospect to close.",
    href: "/crm",
    comingSoon: true,
  },
  {
    num: "04",
    label: "HR & Payroll",
    tag: "People",
    description: "Onboard employees, manage leave requests, and run payroll without the spreadsheets.",
    href: "/hr",
    comingSoon: true,
  },
  {
    num: "05",
    label: "Projects",
    tag: "Delivery",
    description: "Plan tasks, track milestones, and keep your team aligned on every deadline.",
    href: "/projects",
    comingSoon: true,
  },
];

const benefits = [
  "100% free and open source",
  "No per-user licensing fees",
  "Self-host on your own server",
  "Full data ownership and privacy",
  "MIT License — use it however you want",
  "Regular updates and new features",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* ── Header ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
        style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-screen-xl mx-auto px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="FreeERP" width={120} height={36} className="brightness-0 invert" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#modules" className="text-[13px] text-white/40 hover:text-white transition-colors">
              Modules
            </Link>
            <Link href="#why" className="text-[13px] text-white/40 hover:text-white transition-colors">
              Why
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

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Tag */}
          <div className="flex items-center gap-2.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a82c4]" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-medium">
              Open Source ERP
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[72px] md:text-[100px] lg:text-[120px] font-black leading-[0.88] tracking-tight mb-10 max-w-4xl">
            Run your whole
            <br />
            business.
            <br />
            <span className="text-white/25">Pay nothing.</span>
          </h1>

          {/* Body copy */}
          <p className="text-[15px] text-white/40 max-w-sm mb-10 leading-relaxed">
            A complete ERP for small and medium businesses. Invoicing, inventory, CRM, HR, and
            projects — without the enterprise price tag.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-8 mb-24">
            <Link
              href="#modules"
              className="bg-[#4a82c4] text-white text-[13px] font-semibold px-6 py-3 hover:bg-[#3a6aaa] transition-colors"
            >
              Explore Modules →
            </Link>
            <a
              href="https://github.com/byadditya"
              className="flex items-center gap-2 text-[13px] text-white/35 hover:text-white/65 transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              View on GitHub
            </a>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/[0.08] pt-8 flex flex-wrap items-center gap-5 text-[12px] text-white/25 tracking-wide">
            <span>5 Modules</span>
            <span className="text-white/10">—</span>
            <span>Free Forever</span>
            <span className="text-white/10">—</span>
            <span>Open Source</span>
            <span className="text-white/10">—</span>
            <span>Self-Hosted</span>
            <span className="text-white/10">—</span>
            <span>MIT License</span>
          </div>
        </div>
      </section>

      {/* ── Modules ────────────────────────────────────────── */}
      <section id="modules" className="px-8 py-24 border-t border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">— Modules</span>
            <span className="text-[10px] text-white/15 font-mono tracking-wider">05 total</span>
          </div>

          <div>
            {modules.map((mod) => (
              <Link
                key={mod.label}
                href={mod.href}
                className="group flex items-start gap-6 md:gap-12 py-7 border-b border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
              >
                <span className="text-[11px] text-white/20 font-mono mt-1.5 w-6 shrink-0 tabular-nums">
                  {mod.num}
                </span>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                  <h3 className="text-[18px] font-semibold text-white/65 group-hover:text-white transition-colors leading-tight">
                    {mod.label}
                  </h3>
                  <p className="text-[13px] text-white/30 leading-relaxed max-w-sm self-start mt-0.5">
                    {mod.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-1 shrink-0">
                  {mod.comingSoon ? (
                    <span className="text-[10px] tracking-[0.1em] uppercase text-white/25 border border-white/10 px-2 py-0.5 font-medium">
                      Soon
                    </span>
                  ) : (
                    <span className="hidden md:block text-[10px] tracking-[0.15em] uppercase text-white/15 font-medium">
                      {mod.tag}
                    </span>
                  )}
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-[#4a82c4] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ────────────────────────────────────────────── */}
      <section id="why" className="px-8 py-24 border-t border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-[1fr_380px] gap-16 md:gap-24">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium block mb-10">
                — Why FreeERP
              </span>
              <h2 className="text-[52px] md:text-[72px] font-black leading-[0.9] tracking-tight mb-8">
                Zero cost.
                <br />
                <span className="text-white/25">Full control.</span>
              </h2>
              <p className="text-[14px] text-white/35 max-w-xs leading-relaxed mb-10">
                SAP, Oracle, and Odoo charge per-user fees that quickly reach tens of thousands per
                year. FreeERP gives you the same functionality — free, forever.
              </p>
              <a
                href="https://github.com/byadditya"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-white border border-white/15 px-6 py-3 hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <GitBranch className="w-3.5 h-3.5" />
                View on GitHub →
              </a>
            </div>

            <div className="md:pt-[76px]">
              {benefits.map((b, i) => (
                <div key={b} className="flex items-start gap-4 py-4 border-b border-white/[0.06]">
                  <span className="text-[10px] text-white/20 font-mono mt-0.5 tabular-nums w-4 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-[13px] text-white/45 leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="px-8 py-24 border-t border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium mb-6">
                — Get started
              </p>
              <h2 className="text-[48px] md:text-[64px] font-black leading-[0.9] tracking-tight">
                Your business.
                <br />
                <span className="text-white/25">Your data.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/byadditya"
                className="bg-[#4a82c4] text-white text-[13px] font-semibold px-10 py-4 hover:bg-[#3a6aaa] transition-colors text-center flex items-center justify-center gap-2"
              >
                <GitBranch className="w-3.5 h-3.5" />
                Star on GitHub →
              </a>
              <p className="text-[11px] text-white/20 text-center">Free. Open source. MIT License.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-8 px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="FreeERP" width={90} height={28} className="brightness-0 invert opacity-45" />
          </div>
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
