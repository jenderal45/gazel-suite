// ================================================
// GAZEL WORKSPACE — FULL SOURCE (NEXT.JS APP ROUTER)
// Single-file deliverable for ChatGPT Canvas.
// 
// HOW TO USE (Vercel-ready):
// 1) Create a Next.js 14+ project (App Router, TS optional)
// 2) Replace the files with the structure below.
// 3) Ensure Tailwind is enabled (default in many templates).
// 4) Deploy to Vercel.
//
// Notes:
// - This is a UI-first suite: Landing + Dashboard + Apps.
// - Auth is demo/local (no backend). You can wire it later.
// - Storage uses localStorage to simulate Drive/Docs/Sheets.
// - Mail is mock (inbox/outbox) with compose + search.
// - Admin Console includes users, teams, roles, audit log.
// ================================================

/*
FILE TREE
---------
/app
  /layout.tsx
  /page.tsx
  /workspace
    /layout.tsx
    /page.tsx
    /mail/page.tsx
    /drive/page.tsx
    /docs/page.tsx
    /docs/[id]/page.tsx
    /sheets/page.tsx
    /sheets/[id]/page.tsx
    /admin/page.tsx
    /point/page.tsx
/components
  /ui
    (shadcn components used by import path)
/lib
  /store.ts
  /utils.ts
  /seed.ts
  /types.ts
  /auth.ts
  /icons.tsx
  /format.ts
  /validators.ts
  /hooks.ts
/components
  /app-shell.tsx
  /topbar.tsx
  /sidebar.tsx
  /landing
    /hero.tsx
    /features.tsx
    /pricing.tsx
    /faq.tsx
    /footer.tsx
  /workspace
    /kpi-cards.tsx
    /recent.tsx
    /mail
      /mail-list.tsx
      /mail-view.tsx
      /compose.tsx
    /drive
      /drive-grid.tsx
      /uploader.tsx
    /docs
      /doc-editor.tsx
    /sheets
      /sheet-grid.tsx
      /sheet-editor.tsx
    /admin
      /users.tsx
      /teams.tsx
      /audit.tsx

/public
  (optional)

package.json
tailwind.config.js
postcss.config.js
next.config.js

*/

// =========================================================
// app/layout.tsx
// =========================================================

export const metadata = {
  title: "Gazel Workspace — Collaboration Suite",
  description:
    "Gazel Workspace is an all‑in‑one collaboration suite: Mail, Docs, Sheets, Drive, Meeting, Admin Console.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}

// =========================================================
// app/page.tsx (Landing)
// =========================================================

import Link from "next/link";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Gazel</div>
              <div className="text-xs text-slate-400">Workspace</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">
              Fitur
            </a>
            <a href="#pricing" className="hover:text-white">
              Paket
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/workspace"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              Buka Dashboard
            </Link>
          </div>
        </div>
      </header>

      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

// =========================================================
// app/workspace/layout.tsx
// =========================================================

import { AppShell } from "@/components/app-shell";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}

// =========================================================
// app/workspace/page.tsx (Suite Dashboard)
// =========================================================

import { KpiCards } from "@/components/workspace/kpi-cards";
import { Recent } from "@/components/workspace/recent";

export default function WorkspaceHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Gazel Workspace</h1>
        <p className="mt-1 text-sm text-slate-400">
          All‑in‑one suite untuk email, dokumen, spreadsheet, drive, meeting,
          dan admin.
        </p>
      </div>

      <KpiCards />
      <Recent />
    </div>
  );
}

// =========================================================
// app/workspace/mail/page.tsx
// =========================================================

import { MailPage } from "@/components/workspace/mail/mail-list";

export default function Page() {
  return <MailPage />;
}

// =========================================================
// app/workspace/drive/page.tsx
// =========================================================

import { DrivePage } from "@/components/workspace/drive/drive-grid";

export default function Page() {
  return <DrivePage />;
}

// =========================================================
// app/workspace/docs/page.tsx
// =========================================================

import { DocsPage } from "@/components/workspace/docs/doc-editor";

export default function Page() {
  return <DocsPage />;
}

// =========================================================
// app/workspace/docs/[id]/page.tsx
// =========================================================

import { DocEditorPage } from "@/components/workspace/docs/doc-editor";

export default function Page({ params }: { params: { id: string } }) {
  return <DocEditorPage docId={params.id} />;
}

// =========================================================
// app/workspace/sheets/page.tsx
// =========================================================

import { SheetsPage } from "@/components/workspace/sheets/sheet-grid";

export default function Page() {
  return <SheetsPage />;
}

// =========================================================
// app/workspace/sheets/[id]/page.tsx
// =========================================================

import { SheetEditorPage } from "@/components/workspace/sheets/sheet-editor";

export default function Page({ params }: { params: { id: string } }) {
  return <SheetEditorPage sheetId={params.id} />;
}

// =========================================================
// app/workspace/admin/page.tsx
// =========================================================

import { AdminPage } from "@/components/workspace/admin/users";

export default function Page() {
  return <AdminPage />;
}

// =========================================================
// app/workspace/point/page.tsx (Meeting)
// =========================================================

import Link from "next/link";
import { uid } from "@/lib/utils";

export default function PointPage() {
  const meetId = uid(10);
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Gazel Point</h1>
        <p className="mt-1 text-sm text-slate-400">
          Meeting internal — demo integrasi (buat link meeting & undang via
          email).
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="text-sm text-slate-400">Instant meeting link</div>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-sm text-white/90">
            https://point.gazel.app/meet/{meetId}
          </div>
          <Link
            href="/workspace/mail"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Invite via Mail
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold">Schedule</div>
          <p className="mt-1 text-sm text-slate-400">
            Coming soon: calendar, timezone, reminder.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold">Recording</div>
          <p className="mt-1 text-sm text-slate-400">
            Coming soon: storage ke Gazel Drive.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold">Security</div>
          <p className="mt-1 text-sm text-slate-400">
            Coming soon: lobby, token, role moderator.
          </p>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/app-shell.tsx
// =========================================================

"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { ensureSeed } from "@/lib/seed";
import { useEffect } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    ensureSeed();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Topbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-3 pb-10 pt-4 md:grid-cols-[280px_1fr] md:px-4">
        <Sidebar activePath={pathname || "/workspace"} />
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_90px_rgba(0,0,0,.35)] md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/topbar.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";

export function Topbar() {
  const { org, currentUser } = useWorkspaceStore();
  const [open, setOpen] = useState(false);

  const initials = useMemo(() => {
    const name = currentUser?.name || "Gazel User";
    return name
      .split(" ")
      .slice(0, 2)
      .map((s) => s[0])
      .join("")
      .toUpperCase();
  }, [currentUser?.name]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 md:px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Gazel Workspace</div>
            <div className="text-xs text-slate-400">{org.name}</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/workspace"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 md:inline-flex"
          >
            Suite
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            <span className="hidden text-slate-300 md:inline">
              {currentUser?.name}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-2xl bg-white text-xs font-bold text-slate-950">
              {initials}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 text-sm md:px-4">
            <div className="text-slate-400">
              Demo mode • Data tersimpan di browser (localStorage)
            </div>
            <Link
              href="/"
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              Landing
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

// =========================================================
// components/sidebar.tsx
// =========================================================

"use client";

import Link from "next/link";
import {
  IconAdmin,
  IconDashboard,
  IconDocs,
  IconDrive,
  IconMail,
  IconPoint,
  IconSheets,
} from "@/lib/icons";

const nav = [
  { href: "/workspace", label: "Dashboard", icon: IconDashboard },
  { href: "/workspace/mail", label: "Mail", icon: IconMail },
  { href: "/workspace/docs", label: "Docs", icon: IconDocs },
  { href: "/workspace/sheets", label: "Sheets", icon: IconSheets },
  { href: "/workspace/drive", label: "Drive", icon: IconDrive },
  { href: "/workspace/point", label: "Meeting (Point)", icon: IconPoint },
  { href: "/workspace/admin", label: "Admin Console", icon: IconAdmin },
];

export function Sidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
      <div className="px-2 pb-3 pt-2">
        <div className="text-xs font-semibold text-slate-400">APPS</div>
      </div>

      <nav className="space-y-1">
        {nav.map((item) => {
          const active =
            item.href === "/workspace"
              ? activePath === "/workspace"
              : activePath.startsWith(item.href);

          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition " +
                (active
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white")
              }
            >
              <Icon className={active ? "opacity-90" : "opacity-80"} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4">
        <div className="text-sm font-semibold">Suite Mode</div>
        <p className="mt-1 text-xs text-slate-400">
          Semua aplikasi terhubung dengan SSO (demo). Siap dihubungkan ke
          backend.
        </p>
      </div>
    </aside>
  );
}

// =========================================================
// components/landing/hero.tsx
// =========================================================

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Workspace suite untuk tim modern
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Gazel Workspace
            <span className="block text-slate-300">
              Mail, Docs, Sheets, Drive, Meeting, Admin.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-slate-400">
            Satu suite untuk kolaborasi internal perusahaan: email, dokumen,
            spreadsheet, file storage, meeting, dan kontrol admin. Dibuat untuk
            ekosistem Astria Group.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/workspace"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Masuk Dashboard
            </Link>
            <a
              href="#features"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Lihat Fitur
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              SSO
              <div className="mt-1 text-sm font-semibold text-white">1 Akun</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              Storage
              <div className="mt-1 text-sm font-semibold text-white">Drive</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              Security
              <div className="mt-1 text-sm font-semibold text-white">Admin</div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 shadow-[0_40px_120px_rgba(0,0,0,.45)]">
          <div className="rounded-[26px] border border-white/10 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Suite Preview</div>
              <div className="text-xs text-slate-400">Demo UI</div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                "Mail",
                "Docs",
                "Sheets",
                "Drive",
                "Meeting",
                "Admin Console",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-xs text-slate-400">App</div>
                  <div className="mt-1 text-sm font-semibold">{x}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs text-slate-400">Status</div>
              <div className="mt-1 text-sm font-semibold">
                Ready for Vercel Deployment
              </div>
              <p className="mt-1 text-xs text-slate-400">
                UI lengkap + data demo. Backend bisa ditambahkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/features.tsx
// =========================================================

export function Features() {
  const items = [
    {
      title: "Mail",
      desc: "Inbox, compose, search, labels. Siap integrasi SMTP/IMAP.",
    },
    {
      title: "Docs",
      desc: "Editor dokumen ringan, autosave, share, export.",
    },
    {
      title: "Sheets",
      desc: "Spreadsheet ringan, formula basic, filter, export.",
    },
    {
      title: "Drive",
      desc: "File manager, folder, shared, preview, versioning (demo).",
    },
    {
      title: "Meeting (Point)",
      desc: "Generate link meeting + undangan via mail.",
    },
    {
      title: "Admin Console",
      desc: "Users, roles, teams, audit log, org structure.",
    },
  ];

  return (
    <section id="features" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Satu suite. Satu akun.</h2>
          <p className="mt-2 text-sm text-slate-400">
            Gazel Workspace menyatukan aplikasi kolaborasi perusahaan ke satu
            dashboard yang konsisten.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-sm font-semibold">{x.title}</div>
              <p className="mt-1 text-sm text-slate-400">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/pricing.tsx
// =========================================================

export function Pricing() {
  const tiers = [
    {
      name: "Internal",
      price: "Rp0",
      badge: "Recommended",
      items: [
        "SSO demo",
        "Drive internal",
        "Docs + Sheets ringan",
        "Mail demo",
        "Admin console",
      ],
    },
    {
      name: "Business",
      price: "Custom",
      items: [
        "Mail real (SMTP/IMAP)",
        "Permission enterprise",
        "Audit log lengkap",
        "2FA",
        "SLA + support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      items: [
        "SAML SSO",
        "DLP",
        "Encryption policy",
        "Compliance",
        "Dedicated infra",
      ],
    },
  ];

  return (
    <section id="pricing" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Paket</h2>
          <p className="mt-2 text-sm text-slate-400">
            Mulai dari internal suite. Naikkan ke business/enterprise saat
            backend siap.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "rounded-3xl border p-5 " +
                (t.badge
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.03]")
              }
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{t.name}</div>
                {t.badge ? (
                  <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-950">
                    {t.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-2 text-3xl font-semibold">{t.price}</div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                {t.items.map((x) => (
                  <div key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/faq.tsx
// =========================================================

export function FAQ() {
  const q = [
    {
      a: "Apakah ini sudah bisa dipakai?",
      b: "UI sudah siap dipakai internal (demo). Untuk produksi, tinggal hubungkan auth, database, dan mail provider.",
    },
    {
      a: "Apakah bisa pakai domain email perusahaan?",
      b: "Bisa. Untuk produksi sebaiknya pakai provider mail enterprise atau server mail yang terkelola.",
    },
    {
      a: "Apakah Docs/Sheets bisa realtime kolaborasi?",
      b: "Versi ini fokus single-user + share permission. Realtime collaboration bisa ditambahkan dengan Yjs/Liveblocks.",
    },
  ];

  return (
    <section id="faq" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <p className="mt-2 text-sm text-slate-400">
            Pertanyaan umum sebelum dipakai internal.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {q.map((x) => (
            <div
              key={x.a}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-sm font-semibold">{x.a}</div>
              <p className="mt-1 text-sm text-slate-400">{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/footer.tsx
// =========================================================

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Gazel Workspace • Astria Group Ecosystem
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/workspace" className="text-slate-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/" className="text-slate-300 hover:text-white">
            Landing
          </Link>
        </div>
      </div>
    </footer>
  );
}

// =========================================================
// components/workspace/kpi-cards.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useWorkspaceStore } from "@/lib/store";

export function KpiCards() {
  const { mails, docs, sheets, drive } = useWorkspaceStore();

  const cards = [
    {
      title: "Mail",
      value: `${mails.length} messages`,
      href: "/workspace/mail",
      hint: "Inbox + Compose",
    },
    {
      title: "Docs",
      value: `${docs.length} docs`,
      href: "/workspace/docs",
      hint: "Editor + share",
    },
    {
      title: "Sheets",
      value: `${sheets.length} sheets`,
      href: "/workspace/sheets",
      hint: "Grid + formula",
    },
    {
      title: "Drive",
      value: `${drive.items.length} files`,
      href: "/workspace/drive",
      hint: "Folders + upload",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {cards.map((c) => (
        <Link
          key={c.title}
          href={c.href}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
        >
          <div className="text-xs text-slate-400">{c.title}</div>
          <div className="mt-2 text-2xl font-semibold">{c.value}</div>
          <div className="mt-1 text-sm text-slate-400">{c.hint}</div>
        </Link>
      ))}
    </div>
  );
}

// =========================================================
// components/workspace/recent.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useWorkspaceStore } from "@/lib/store";
import { fmtDate } from "@/lib/format";

export function Recent() {
  const { docs, sheets, drive } = useWorkspaceStore();

  const recentDocs = [...docs].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 5);
  const recentSheets = [...sheets]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 5);
  const recentFiles = [...drive.items]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 5);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Recent Docs</div>
          <Link href="/workspace/docs" className="text-xs text-slate-400 hover:text-white">
            Open
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {recentDocs.map((d) => (
            <Link
              key={d.id}
              href={`/workspace/docs/${d.id}`}
              className="block rounded-2xl border border-white/10 bg-white/[0.02] p-3 hover:bg-white/[0.05]"
            >
              <div className="text-sm font-semibold">{d.title}</div>
              <div className="mt-1 text-xs text-slate-400">Updated {fmtDate(d.updatedAt)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Recent Sheets</div>
          <Link href="/workspace/sheets" className="text-xs text-slate-400 hover:text-white">
            Open
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {recentSheets.map((s) => (
            <Link
              key={s.id}
              href={`/workspace/sheets/${s.id}`}
              className="block rounded-2xl border border-white/10 bg-white/[0.02] p-3 hover:bg-white/[0.05]"
            >
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-slate-400">Updated {fmtDate(s.updatedAt)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Recent Files</div>
          <Link href="/workspace/drive" className="text-xs text-slate-400 hover:text-white">
            Open
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {recentFiles.map((f) => (
            <div
              key={f.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-3"
            >
              <div className="text-sm font-semibold">{f.name}</div>
              <div className="mt-1 text-xs text-slate-400">{f.type} • {fmtDate(f.updatedAt)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/mail/mail-list.tsx
// =========================================================

"use client";

import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { ComposeModal } from "@/components/workspace/mail/compose";
import { MailView } from "@/components/workspace/mail/mail-view";
import { fmtDate } from "@/lib/format";

export function MailPage() {
  const { mails, markMailRead } = useWorkspaceStore();
  const [q, setQ] = useState("");
  const [compose, setCompose] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(mails[0]?.id || null);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return mails;
    return mails.filter((m) =>
      [m.from, m.to, m.subject, m.body].join(" ").toLowerCase().includes(s)
    );
  }, [mails, q]);

  const active = useMemo(
    () => mails.find((m) => m.id === activeId) || null,
    [mails, activeId]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Mail</h1>
          <p className="mt-1 text-sm text-slate-400">
            Demo inbox • Compose • Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search mail..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => setCompose(true)}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Compose
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[360px_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
          <div className="px-2 pb-2 text-xs font-semibold text-slate-400">
            INBOX ({filtered.length})
          </div>
          <div className="space-y-2">
            {filtered.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setActiveId(m.id);
                  markMailRead(m.id);
                }}
                className={
                  "w-full rounded-2xl border p-3 text-left transition " +
                  (m.id === activeId
                    ? "border-white/20 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]")
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="truncate text-sm font-semibold">
                    {m.subject}
                  </div>
                  <div className="text-xs text-slate-500">
                    {fmtDate(m.createdAt)}
                  </div>
                </div>
                <div className="mt-1 truncate text-xs text-slate-400">
                  From: {m.from}
                </div>
                <div className="mt-1 truncate text-xs text-slate-500">
                  {m.body}
                </div>
                {!m.read ? (
                  <div className="mt-2 inline-flex items-center gap-2 text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Unread
                  </div>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <MailView mail={active} />
        </div>
      </div>

      <ComposeModal open={compose} onClose={() => setCompose(false)} />
    </div>
  );
}

// =========================================================
// components/workspace/mail/mail-view.tsx
// =========================================================

"use client";

import { MailItem } from "@/lib/types";
import { fmtDateTime } from "@/lib/format";

export function MailView({ mail }: { mail: MailItem | null }) {
  if (!mail) {
    return (
      <div className="text-sm text-slate-400">
        Pilih email dari list untuk melihat isi.
      </div>
    );
  }

  return (
    <div>
      <div className="text-xl font-semibold">{mail.subject}</div>
      <div className="mt-2 grid gap-1 text-sm text-slate-400">
        <div>
          <span className="text-slate-500">From:</span> {mail.from}
        </div>
        <div>
          <span className="text-slate-500">To:</span> {mail.to}
        </div>
        <div>
          <span className="text-slate-500">Date:</span> {fmtDateTime(mail.createdAt)}
        </div>
      </div>

      <div className="mt-4 whitespace-pre-wrap rounded-3xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-200">
        {mail.body}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/mail/compose.tsx
// =========================================================

"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/lib/store";

export function ComposeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { sendMail, currentUser } = useWorkspaceStore();
  const [to, setTo] = useState("admin@gazel.id");
  const [subject, setSubject] = useState("Meeting Invitation");
  const [body, setBody] = useState(
    "Halo,\n\nSaya ingin mengundang Anda meeting via Gazel Point.\n\nTerima kasih."
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-slate-950 p-5 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Compose Mail</div>
          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="grid gap-2 md:grid-cols-[80px_1fr] md:items-center">
            <div className="text-xs text-slate-400">From</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm">
              {currentUser.email}
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-[80px_1fr] md:items-center">
            <div className="text-xs text-slate-400">To</div>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-[80px_1fr] md:items-center">
            <div className="text-xs text-slate-400">Subject</div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-[80px_1fr]">
            <div className="text-xs text-slate-400">Body</div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={10}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                sendMail({
                  to,
                  subject,
                  body,
                });
                onClose();
              }}
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/drive/drive-grid.tsx
// =========================================================

"use client";

import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { fmtBytes, fmtDate } from "@/lib/format";
import { uid } from "@/lib/utils";

export function DrivePage() {
  const { drive, addDriveItem, deleteDriveItem } = useWorkspaceStore();
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return drive.items;
    return drive.items.filter((f) =>
      [f.name, f.type].join(" ").toLowerCase().includes(s)
    );
  }, [drive.items, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Drive</h1>
          <p className="mt-1 text-sm text-slate-400">
            File manager demo • Upload (mock) • Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search files..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => {
              addDriveItem({
                id: uid(12),
                name: `New File ${drive.items.length + 1}.pdf`,
                type: "pdf",
                size: 220_000,
              });
            }}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">{f.name}</div>
                <div className="mt-1 text-xs text-slate-400">
                  {f.type.toUpperCase()} • {fmtBytes(f.size)}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Updated {fmtDate(f.updatedAt)}
                </div>
              </div>
              <button
                onClick={() => deleteDriveItem(f.id)}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
              >
                Delete
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-400">
              Preview placeholder (integrasi viewer nanti)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/docs/doc-editor.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";
import { fmtDate } from "@/lib/format";

export function DocsPage() {
  const { docs, createDoc } = useWorkspaceStore();
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return docs;
    return docs.filter((d) => d.title.toLowerCase().includes(s));
  }, [docs, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Docs</h1>
          <p className="mt-1 text-sm text-slate-400">
            Dokumen ringan • Autosave • Share (demo)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search docs..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => createDoc({ id: uid(12) })}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            New Doc
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {list.map((d) => (
          <Link
            key={d.id}
            href={`/workspace/docs/${d.id}`}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="text-sm font-semibold">{d.title}</div>
            <div className="mt-1 text-xs text-slate-400">
              Updated {fmtDate(d.updatedAt)}
            </div>
            <div className="mt-3 line-clamp-3 text-xs text-slate-500">
              {d.content || "(empty)"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function DocEditorPage({ docId }: { docId: string }) {
  const { docs, updateDocTitle, updateDocContent } = useWorkspaceStore();
  const doc = docs.find((d) => d.id === docId);

  if (!doc) {
    return (
      <div className="text-sm text-slate-400">
        Doc tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Edit Doc</h1>
          <p className="mt-1 text-sm text-slate-400">
            Autosave (local) • Share (coming soon)
          </p>
        </div>
        <Link
          href="/workspace/docs"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Back
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="grid gap-2">
          <div className="text-xs font-semibold text-slate-400">TITLE</div>
          <input
            value={doc.title}
            onChange={(e) => updateDocTitle(doc.id, e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
          />

          <div className="mt-3 text-xs font-semibold text-slate-400">CONTENT</div>
          <textarea
            value={doc.content}
            onChange={(e) => updateDocContent(doc.id, e.target.value)}
            rows={16}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            placeholder="Mulai menulis..."
          />

          <div className="mt-2 text-xs text-slate-500">
            Tip: untuk versi production, editor bisa diganti ke TipTap /
            Lexical + realtime collaboration.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/sheets/sheet-grid.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";
import { fmtDate } from "@/lib/format";

export function SheetsPage() {
  const { sheets, createSheet } = useWorkspaceStore();
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return sheets;
    return sheets.filter((d) => d.title.toLowerCase().includes(s));
  }, [sheets, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sheets</h1>
          <p className="mt-1 text-sm text-slate-400">
            Spreadsheet ringan • Grid • Export (coming soon)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search sheets..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => createSheet({ id: uid(12) })}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            New Sheet
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {list.map((s) => (
          <Link
            key={s.id}
            href={`/workspace/sheets/${s.id}`}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="text-sm font-semibold">{s.title}</div>
            <div className="mt-1 text-xs text-slate-400">
              Updated {fmtDate(s.updatedAt)}
            </div>
            <div className="mt-3 text-xs text-slate-500">
              {s.rows.length} rows • {s.cols.length} cols
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/sheets/sheet-editor.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useWorkspaceStore } from "@/lib/store";

export function SheetEditorPage({ sheetId }: { sheetId: string }) {
  const { sheets, updateSheetTitle, updateSheetCell } = useWorkspaceStore();
  const sheet = useMemo(() => sheets.find((s) => s.id === sheetId), [sheets, sheetId]);

  if (!sheet) {
    return <div className="text-sm text-slate-400">Sheet tidak ditemukan.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Edit Sheet</h1>
          <p className="mt-1 text-sm text-slate-400">
            Grid sederhana • Simpan otomatis (local)
          </p>
        </div>
        <Link
          href="/workspace/sheets"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Back
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="grid gap-2">
          <div className="text-xs font-semibold text-slate-400">TITLE</div>
          <input
            value={sheet.title}
            onChange={(e) => updateSheetTitle(sheet.id, e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
          />

          <div className="mt-4 overflow-auto rounded-3xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-[760px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 border-b border-white/10 bg-slate-950/80 px-3 py-2 text-left text-xs text-slate-400">
                    #
                  </th>
                  {sheet.cols.map((c) => (
                    <th
                      key={c}
                      className="border-b border-white/10 bg-slate-950/80 px-3 py-2 text-left text-xs text-slate-400"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sheet.rows.map((r, ri) => (
                  <tr key={r.id}>
                    <td className="sticky left-0 z-10 border-b border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-500">
                      {ri + 1}
                    </td>
                    {sheet.cols.map((c) => {
                      const v = r.cells[c] ?? "";
                      return (
                        <td key={c} className="border-b border-white/10">
                          <input
                            value={v}
                            onChange={(e) =>
                              updateSheetCell(sheet.id, r.id, c, e.target.value)
                            }
                            className="w-full bg-transparent px-3 py-2 text-sm outline-none"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Catatan: formula advanced belum aktif. Untuk production bisa
            integrasi engine formula.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/admin/users.tsx (Admin Page)
// =========================================================

"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";
import { TeamsPanel } from "@/components/workspace/admin/teams";
import { AuditPanel } from "@/components/workspace/admin/audit";

export function AdminPage() {
  const { users, createUser, deleteUser, setUserRole } = useWorkspaceStore();
  const [tab, setTab] = useState<"users" | "teams" | "audit">("users");

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Admin Console</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage users, roles, teams, dan audit log.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {[
          { k: "users", label: "Users" },
          { k: "teams", label: "Teams" },
          { k: "audit", label: "Audit" },
        ].map((x) => (
          <button
            key={x.k}
            onClick={() => setTab(x.k as any)}
            className={
              "rounded-2xl border px-4 py-2 text-sm " +
              (tab === x.k
                ? "border-white/20 bg-white text-slate-950"
                : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10")
            }
          >
            {x.label}
          </button>
        ))}
      </div>

      {tab === "users" ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Users</div>
            <button
              onClick={() =>
                createUser({
                  id: uid(10),
                  name: `User ${users.length + 1}`,
                  email: `user${users.length + 1}@gazel.id`,
                })
              }
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Add User
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <table className="w-full">
              <thead className="bg-white/[0.03]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-slate-400">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-400">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-400">
                    Role
                  </th>
                  <th className="px-4 py-3 text-right text-xs text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-sm">{u.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-300">
                      {u.email}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={u.role}
                        onChange={(e) => setUserRole(u.id, e.target.value as any)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                      >
                        <option value="admin">admin</option>
                        <option value="manager">manager</option>
                        <option value="staff">staff</option>
                        <option value="viewer">viewer</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => deleteUser(u.id)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "teams" ? <TeamsPanel /> : null}
      {tab === "audit" ? <AuditPanel /> : null}
    </div>
  );
}

// =========================================================
// components/workspace/admin/teams.tsx
// =========================================================

"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";

export function TeamsPanel() {
  const { teams, createTeam, deleteTeam } = useWorkspaceStore();
  const [name, setName] = useState("Product");

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">Teams</div>

      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm md:w-[320px]"
          placeholder="Team name"
        />
        <button
          onClick={() => {
            createTeam({ id: uid(10), name });
            setName("");
          }}
          className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          Add Team
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {teams.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold">{t.name}</div>
              <button
                onClick={() => deleteTeam(t.id)}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
              >
                Delete
              </button>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              Shared Drive + permission (coming soon)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/admin/audit.tsx
// =========================================================

"use client";

import { useWorkspaceStore } from "@/lib/store";
import { fmtDateTime } from "@/lib/format";

export function AuditPanel() {
  const { audit } = useWorkspaceStore();

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">Audit Log</div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full">
          <thead className="bg-white/[0.03]">
            <tr>
              <th className="px-4 py-3 text-left text-xs text-slate-400">
                Time
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">
                Actor
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {audit.map((a) => (
              <tr key={a.id} className="border-t border-white/10">
                <td className="px-4 py-3 text-sm text-slate-300">
                  {fmtDateTime(a.at)}
                </td>
                <td className="px-4 py-3 text-sm">{a.actor}</td>
                <td className="px-4 py-3 text-sm text-slate-300">
                  {a.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-slate-500">
        Untuk production, audit log wajib masuk database + immutable storage.
      </div>
    </div>
  );
}

// =========================================================
// lib/types.ts
// =========================================================

export type Role = "admin" | "manager" | "staff" | "viewer";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type Team = {
  id: string;
  name: string;
};

export type MailItem = {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  read: boolean;
  createdAt: number;
};

export type DocItem = {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
};

export type SheetRow = {
  id: string;
  cells: Record<string, string>;
};

export type SheetItem = {
  id: string;
  title: string;
  cols: string[];
  rows: SheetRow[];
  updatedAt: number;
};

export type DriveItem = {
  id: string;
  name: string;
  type: string;
  size: number;
  updatedAt: number;
};

export type DriveState = {
  items: DriveItem[];
};

export type AuditItem = {
  id: string;
  at: number;
  actor: string;
  action: string;
};

export type Org = {
  name: string;
  domain: string;
};

export type WorkspaceState = {
  org: Org;
  currentUser: User;

  users: User[];
  teams: Team[];
  audit: AuditItem[];

  mails: MailItem[];
  docs: DocItem[];
  sheets: SheetItem[];
  drive: DriveState;

  // actions
  markMailRead: (id: string) => void;
  sendMail: (payload: { to: string; subject: string; body: string }) => void;

  createDoc: (payload: { id: string }) => void;
  updateDocTitle: (id: string, title: string) => void;
  updateDocContent: (id: string, content: string) => void;

  createSheet: (payload: { id: string }) => void;
  updateSheetTitle: (id: string, title: string) => void;
  updateSheetCell: (
    sheetId: string,
    rowId: string,
    col: string,
    value: string
  ) => void;

  addDriveItem: (item: { id: string; name: string; type: string; size: number }) => void;
  deleteDriveItem: (id: string) => void;

  createUser: (u: { id: string; name: string; email: string }) => void;
  deleteUser: (id: string) => void;
  setUserRole: (id: string, role: Role) => void;

  createTeam: (t: { id: string; name: string }) => void;
  deleteTeam: (id: string) => void;
};

// =========================================================
// lib/utils.ts
// =========================================================

export function uid(len = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// =========================================================
// lib/format.ts
// =========================================================

export function fmtDate(ts: number) {
  const d = new Date(ts);
  return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
}

export function fmtDateTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function fmtBytes(n: number) {
  const units = ["B", "KB", "MB", "GB"];
  let u = 0;
  let v = n;
  while (v >= 1024 && u < units.length - 1) {
    v /= 1024;
    u++;
  }
  return `${v.toFixed(u === 0 ? 0 : 1)} ${units[u]}`;
}

// =========================================================
// lib/seed.ts
// =========================================================

import { uid } from "@/lib/utils";

const KEY = "gazel_workspace_v1";

export function ensureSeed() {
  if (typeof window === "undefined") return;
  const existing = localStorage.getItem(KEY);
  if (existing) return;

  const now = Date.now();

  const seed = {
    org: { name: "Astria Group", domain: "gazel.id" },
    currentUser: {
      id: "u_admin",
      name: "Gazel Admin",
      email: "admin@gazel.id",
      role: "admin",
    },
    users: [
      { id: "u_admin", name: "Gazel Admin", email: "admin@gazel.id", role: "admin" },
      { id: "u_mgr", name: "Ops Manager", email: "ops@gazel.id", role: "manager" },
      { id: "u_staff", name: "Finance Staff", email: "finance@gazel.id", role: "staff" },
    ],
    teams: [
      { id: "t_ops", name: "Operations" },
      { id: "t_fin", name: "Finance" },
      { id: "t_prod", name: "Product" },
    ],
    audit: [
      { id: uid(10), at: now - 1000 * 60 * 40, actor: "system", action: "Workspace initialized" },
      { id: uid(10), at: now - 1000 * 60 * 18, actor: "admin@gazel.id", action: "Created team: Product" },
    ],
    mails: [
      {
        id: uid(12),
        from: "ceo@astria.group",
        to: "admin@gazel.id",
        subject: "Kickoff Gazel Workspace",
        body: "Halo Admin,\n\nTolong siapkan workspace suite untuk internal.\n\nThanks.",
        read: false,
        createdAt: now - 1000 * 60 * 60 * 7,
      },
      {
        id: uid(12),
        from: "hr@astria.group",
        to: "admin@gazel.id",
        subject: "New Employee Onboarding",
        body: "Mohon dibuatkan akun email untuk 2 staff baru minggu ini.",
        read: true,
        createdAt: now - 1000 * 60 * 60 * 20,
      },
      {
        id: uid(12),
        from: "security@gazel.id",
        to: "admin@gazel.id",
        subject: "Policy: Drive Access",
        body: "Reminder: gunakan role-based access untuk folder Finance.",
        read: true,
        createdAt: now - 1000 * 60 * 60 * 26,
      },
    ],
    docs: [
      {
        id: "d_001",
        title: "Company SOP — Internal",
        content: "SOP internal perusahaan.\n\n1) Access\n2) Security\n3) Approvals\n",
        updatedAt: now - 1000 * 60 * 55,
      },
      {
        id: "d_002",
        title: "Project Brief — Gazel Workspace",
        content: "Tujuan: membangun suite kolaborasi internal.\n\nScope: Mail, Docs, Sheets, Drive, Point, Admin.",
        updatedAt: now - 1000 * 60 * 140,
      },
    ],
    sheets: [
      {
        id: "s_001",
        title: "Monthly Budget",
        cols: ["Item", "Amount", "Notes"],
        rows: [
          { id: "r1", cells: { Item: "Cloud", Amount: "1500000", Notes: "Vercel + Storage" } },
          { id: "r2", cells: { Item: "Domain", Amount: "250000", Notes: "gazel.id" } },
          { id: "r3", cells: { Item: "Ops", Amount: "3000000", Notes: "Support" } },
        ],
        updatedAt: now - 1000 * 60 * 80,
      },
    ],
    drive: {
      items: [
        { id: "f_1", name: "SOP.pdf", type: "pdf", size: 420_000, updatedAt: now - 1000 * 60 * 400 },
        { id: "f_2", name: "BrandGuideline.png", type: "png", size: 880_000, updatedAt: now - 1000 * 60 * 220 },
        { id: "f_3", name: "Budget.xlsx", type: "xlsx", size: 120_000, updatedAt: now - 1000 * 60 * 120 },
      ],
    },
  };

  localStorage.setItem(KEY, JSON.stringify(seed));
}

export { KEY as WORKSPACE_STORAGE_KEY };

// =========================================================
// lib/store.ts (Zustand)
// =========================================================

"use client";

import { create } from "zustand";
import {
  AuditItem,
  DocItem,
  DriveItem,
  Role,
  SheetItem,
  Team,
  User,
  WorkspaceState,
} from "@/lib/types";
import { uid } from "@/lib/utils";
import { WORKSPACE_STORAGE_KEY } from "@/lib/seed";

function load() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(WORKSPACE_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function save(state: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(state));
}

function auditPush(state: any, actor: string, action: string) {
  const item: AuditItem = { id: uid(10), at: Date.now(), actor, action };
  state.audit = [item, ...state.audit].slice(0, 200);
}

const fallback = {
  org: { name: "Astria Group", domain: "gazel.id" },
  currentUser: { id: "u_admin", name: "Gazel Admin", email: "admin@gazel.id", role: "admin" },
  users: [],
  teams: [],
  audit: [],
  mails: [],
  docs: [],
  sheets: [],
  drive: { items: [] },
};

export const useWorkspaceStore = create<WorkspaceState>((set, get) => {
  const initial = load() || fallback;

  return {
    ...initial,

    markMailRead: (id) =>
      set(() => {
        const s = load() || get();
        s.mails = s.mails.map((m: any) => (m.id === id ? { ...m, read: true } : m));
        auditPush(s, s.currentUser.email, `Read mail: ${id}`);
        save(s);
        return s;
      }),

    sendMail: ({ to, subject, body }) =>
      set(() => {
        const s = load() || get();
        s.mails = [
          {
            id: uid(12),
            from: s.currentUser.email,
            to,
            subject,
            body,
            read: true,
            createdAt: Date.now(),
          },
          ...s.mails,
        ];
        auditPush(s, s.currentUser.email, `Sent mail to ${to}: ${subject}`);
        save(s);
        return s;
      }),

    createDoc: ({ id }) =>
      set(() => {
        const s = load() || get();
        const d: DocItem = {
          id,
          title: `Untitled Doc ${s.docs.length + 1}`,
          content: "",
          updatedAt: Date.now(),
        };
        s.docs = [d, ...s.docs];
        auditPush(s, s.currentUser.email, `Created doc: ${d.title}`);
        save(s);
        return s;
      }),

    updateDocTitle: (id, title) =>
      set(() => {
        const s = load() || get();
        s.docs = s.docs.map((d: DocItem) =>
          d.id === id ? { ...d, title, updatedAt: Date.now() } : d
        );
        save(s);
        return s;
      }),

    updateDocContent: (id, content) =>
      set(() => {
        const s = load() || get();
        s.docs = s.docs.map((d: DocItem) =>
          d.id === id ? { ...d, content, updatedAt: Date.now() } : d
        );
        save(s);
        return s;
      }),

    createSheet: ({ id }) =>
      set(() => {
        const s = load() || get();
        const sheet: SheetItem = {
          id,
          title: `Untitled Sheet ${s.sheets.length + 1}`,
          cols: ["A", "B", "C", "D"],
          rows: Array.from({ length: 12 }).map((_, i) => ({
            id: `row_${i + 1}`,
            cells: { A: "", B: "", C: "", D: "" },
          })),
          updatedAt: Date.now(),
        };
        s.sheets = [sheet, ...s.sheets];
        auditPush(s, s.currentUser.email, `Created sheet: ${sheet.title}`);
        save(s);
        return s;
      }),

    updateSheetTitle: (id, title) =>
      set(() => {
        const s = load() || get();
        s.sheets = s.sheets.map((x: SheetItem) =>
          x.id === id ? { ...x, title, updatedAt: Date.now() } : x
        );
        save(s);
        return s;
      }),

    updateSheetCell: (sheetId, rowId, col, value) =>
      set(() => {
        const s = load() || get();
        s.sheets = s.sheets.map((sh: SheetItem) => {
          if (sh.id !== sheetId) return sh;
          const rows = sh.rows.map((r) =>
            r.id === rowId ? { ...r, cells: { ...r.cells, [col]: value } } : r
          );
          return { ...sh, rows, updatedAt: Date.now() };
        });
        save(s);
        return s;
      }),

    addDriveItem: (item) =>
      set(() => {
        const s = load() || get();
        const f: DriveItem = { ...item, updatedAt: Date.now() };
        s.drive.items = [f, ...s.drive.items];
        auditPush(s, s.currentUser.email, `Uploaded file: ${f.name}`);
        save(s);
        return s;
      }),

    deleteDriveItem: (id) =>
      set(() => {
        const s = load() || get();
        const before = s.drive.items.length;
        s.drive.items = s.drive.items.filter((x: DriveItem) => x.id !== id);
        if (s.drive.items.length !== before) {
          auditPush(s, s.currentUser.email, `Deleted file: ${id}`);
        }
        save(s);
        return s;
      }),

    createUser: ({ id, name, email }) =>
      set(() => {
        const s = load() || get();
        const u: User = { id, name, email, role: "staff" };
        s.users = [...s.users, u];
        auditPush(s, s.currentUser.email, `Created user: ${email}`);
        save(s);
        return s;
      }),

    deleteUser: (id) =>
      set(() => {
        const s = load() || get();
        const u = s.users.find((x: User) => x.id === id);
        s.users = s.users.filter((x: User) => x.id !== id);
        if (u) auditPush(s, s.currentUser.email, `Deleted user: ${u.email}`);
        save(s);
        return s;
      }),

    setUserRole: (id, role: Role) =>
      set(() => {
        const s = load() || get();
        s.users = s.users.map((x: User) => (x.id === id ? { ...x, role } : x));
        auditPush(s, s.currentUser.email, `Set role: ${id} => ${role}`);
        save(s);
        return s;
      }),

    createTeam: ({ id, name }) =>
      set(() => {
        const s = load() || get();
        const t: Team = { id, name };
        s.teams = [...s.teams, t];
        auditPush(s, s.currentUser.email, `Created team: ${name}`);
        save(s);
        return s;
      }),

    deleteTeam: (id) =>
      set(() => {
        const s = load() || get();
        const t = s.teams.find((x: Team) => x.id === id);
        s.teams = s.teams.filter((x: Team) => x.id !== id);
        if (t) auditPush(s, s.currentUser.email, `Deleted team: ${t.name}`);
        save(s);
        return s;
      }),
  };
});

// =========================================================
// lib/icons.tsx (tiny inline icons)
// =========================================================

export function IconBase({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconDashboard({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M3 13h8V3H3v10z" />
      <path d="M13 21h8V11h-8v10z" />
      <path d="M13 3h8v6h-8V3z" />
      <path d="M3 17h8v4H3v-4z" />
    </IconBase>
  );
}

export function IconMail({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 4h16v16H4V4z" />
      <path d="M4 6l8 7 8-7" />
    </IconBase>
  );
}

export function IconDocs({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M6 2h9l3 3v17H6V2z" />
      <path d="M15 2v5h5" />
      <path d="M8 11h8" />
      <path d="M8 15h8" />
      <path d="M8 19h6" />
    </IconBase>
  );
}

export function IconSheets({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 4h16v16H4V4z" />
      <path d="M8 4v16" />
      <path d="M4 8h16" />
      <path d="M4 12h16" />
      <path d="M4 16h16" />
    </IconBase>
  );
}

export function IconDrive({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M8 4h8l4 7H4l4-7z" />
      <path d="M4 11l4 9h8l4-9" />
    </IconBase>
  );
}

export function IconPoint({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M23 7l-7 5 7 5V7z" />
      <path d="M1 5h15v14H1V5z" />
    </IconBase>
  );
}

export function IconAdmin({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 1l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5z" />
    </IconBase>
  );
}

// =========================================================
// package.json (important deps)
// =========================================================

/*
{
  "name": "gazel-workspace",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.4.5"
  }
}
*/

// =========================================================
// tailwind.config.js
// =========================================================

/*
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
*/

// =========================================================
// postcss.config.js
// =========================================================

/*
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
*/

// =========================================================
// app/globals.css
// =========================================================

/*
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  height: 100%;
}

* {
  -webkit-tap-highlight-color: transparent;
}
*/


  // ================================================
// GAZEL WORKSPACE — FULL SOURCE (NEXT.JS APP ROUTER)
// Single-file deliverable for ChatGPT Canvas.
// 
// HOW TO USE (Vercel-ready):
// 1) Create a Next.js 14+ project (App Router, TS optional)
// 2) Replace the files with the structure below.
// 3) Ensure Tailwind is enabled (default in many templates).
// 4) Deploy to Vercel.
//
// Notes:
// - This is a UI-first suite: Landing + Dashboard + Apps.
// - Auth is demo/local (no backend). You can wire it later.
// - Storage uses localStorage to simulate Drive/Docs/Sheets.
// - Mail is mock (inbox/outbox) with compose + search.
// - Admin Console includes users, teams, roles, audit log.
// ================================================

/*
FILE TREE
---------
/app
  /layout.tsx
  /page.tsx
  /workspace
    /layout.tsx
    /page.tsx
    /mail/page.tsx
    /drive/page.tsx
    /docs/page.tsx
    /docs/[id]/page.tsx
    /sheets/page.tsx
    /sheets/[id]/page.tsx
    /admin/page.tsx
    /point/page.tsx
/components
  /ui
    (shadcn components used by import path)
/lib
  /store.ts
  /utils.ts
  /seed.ts
  /types.ts
  /auth.ts
  /icons.tsx
  /format.ts
  /validators.ts
  /hooks.ts
/components
  /app-shell.tsx
  /topbar.tsx
  /sidebar.tsx
  /landing
    /hero.tsx
    /features.tsx
    /pricing.tsx
    /faq.tsx
    /footer.tsx
  /workspace
    /kpi-cards.tsx
    /recent.tsx
    /mail
      /mail-list.tsx
      /mail-view.tsx
      /compose.tsx
    /drive
      /drive-grid.tsx
      /uploader.tsx
    /docs
      /doc-editor.tsx
    /sheets
      /sheet-grid.tsx
      /sheet-editor.tsx
    /admin
      /users.tsx
      /teams.tsx
      /audit.tsx

/public
  (optional)

package.json
tailwind.config.js
postcss.config.js
next.config.js

*/

// =========================================================
// app/layout.tsx
// =========================================================

export const metadata = {
  title: "Gazel Workspace — Collaboration Suite",
  description:
    "Gazel Workspace is an all‑in‑one collaboration suite: Mail, Docs, Sheets, Drive, Meeting, Admin Console.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}

// =========================================================
// app/page.tsx (Landing)
// =========================================================

import Link from "next/link";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Gazel</div>
              <div className="text-xs text-slate-400">Workspace</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">
              Fitur
            </a>
            <a href="#pricing" className="hover:text-white">
              Paket
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/workspace"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              Buka Dashboard
            </Link>
          </div>
        </div>
      </header>

      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

// =========================================================
// app/workspace/layout.tsx
// =========================================================

import { AppShell } from "@/components/app-shell";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}

// =========================================================
// app/workspace/page.tsx (Suite Dashboard)
// =========================================================

import { KpiCards } from "@/components/workspace/kpi-cards";
import { Recent } from "@/components/workspace/recent";

export default function WorkspaceHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Gazel Workspace</h1>
        <p className="mt-1 text-sm text-slate-400">
          All‑in‑one suite untuk email, dokumen, spreadsheet, drive, meeting,
          dan admin.
        </p>
      </div>

      <KpiCards />
      <Recent />
    </div>
  );
}

// =========================================================
// app/workspace/mail/page.tsx
// =========================================================

import { MailPage } from "@/components/workspace/mail/mail-list";

export default function Page() {
  return <MailPage />;
}

// =========================================================
// app/workspace/drive/page.tsx
// =========================================================

import { DrivePage } from "@/components/workspace/drive/drive-grid";

export default function Page() {
  return <DrivePage />;
}

// =========================================================
// app/workspace/docs/page.tsx
// =========================================================

import { DocsPage } from "@/components/workspace/docs/doc-editor";

export default function Page() {
  return <DocsPage />;
}

// =========================================================
// app/workspace/docs/[id]/page.tsx
// =========================================================

import { DocEditorPage } from "@/components/workspace/docs/doc-editor";

export default function Page({ params }: { params: { id: string } }) {
  return <DocEditorPage docId={params.id} />;
}

// =========================================================
// app/workspace/sheets/page.tsx
// =========================================================

import { SheetsPage } from "@/components/workspace/sheets/sheet-grid";

export default function Page() {
  return <SheetsPage />;
}

// =========================================================
// app/workspace/sheets/[id]/page.tsx
// =========================================================

import { SheetEditorPage } from "@/components/workspace/sheets/sheet-editor";

export default function Page({ params }: { params: { id: string } }) {
  return <SheetEditorPage sheetId={params.id} />;
}

// =========================================================
// app/workspace/admin/page.tsx
// =========================================================

import { AdminPage } from "@/components/workspace/admin/users";

export default function Page() {
  return <AdminPage />;
}

// =========================================================
// app/workspace/point/page.tsx (Meeting)
// =========================================================

import Link from "next/link";
import { uid } from "@/lib/utils";

export default function PointPage() {
  const meetId = uid(10);
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Gazel Point</h1>
        <p className="mt-1 text-sm text-slate-400">
          Meeting internal — demo integrasi (buat link meeting & undang via
          email).
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="text-sm text-slate-400">Instant meeting link</div>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-sm text-white/90">
            https://point.gazel.app/meet/{meetId}
          </div>
          <Link
            href="/workspace/mail"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Invite via Mail
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold">Schedule</div>
          <p className="mt-1 text-sm text-slate-400">
            Coming soon: calendar, timezone, reminder.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold">Recording</div>
          <p className="mt-1 text-sm text-slate-400">
            Coming soon: storage ke Gazel Drive.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold">Security</div>
          <p className="mt-1 text-sm text-slate-400">
            Coming soon: lobby, token, role moderator.
          </p>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/app-shell.tsx
// =========================================================

"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { ensureSeed } from "@/lib/seed";
import { useEffect } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    ensureSeed();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Topbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-3 pb-10 pt-4 md:grid-cols-[280px_1fr] md:px-4">
        <Sidebar activePath={pathname || "/workspace"} />
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_90px_rgba(0,0,0,.35)] md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/topbar.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";

export function Topbar() {
  const { org, currentUser } = useWorkspaceStore();
  const [open, setOpen] = useState(false);

  const initials = useMemo(() => {
    const name = currentUser?.name || "Gazel User";
    return name
      .split(" ")
      .slice(0, 2)
      .map((s) => s[0])
      .join("")
      .toUpperCase();
  }, [currentUser?.name]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 md:px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Gazel Workspace</div>
            <div className="text-xs text-slate-400">{org.name}</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/workspace"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 md:inline-flex"
          >
            Suite
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            <span className="hidden text-slate-300 md:inline">
              {currentUser?.name}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-2xl bg-white text-xs font-bold text-slate-950">
              {initials}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 text-sm md:px-4">
            <div className="text-slate-400">
              Demo mode • Data tersimpan di browser (localStorage)
            </div>
            <Link
              href="/"
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              Landing
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

// =========================================================
// components/sidebar.tsx
// =========================================================

"use client";

import Link from "next/link";
import {
  IconAdmin,
  IconDashboard,
  IconDocs,
  IconDrive,
  IconMail,
  IconPoint,
  IconSheets,
} from "@/lib/icons";

const nav = [
  { href: "/workspace", label: "Dashboard", icon: IconDashboard },
  { href: "/workspace/mail", label: "Mail", icon: IconMail },
  { href: "/workspace/docs", label: "Docs", icon: IconDocs },
  { href: "/workspace/sheets", label: "Sheets", icon: IconSheets },
  { href: "/workspace/drive", label: "Drive", icon: IconDrive },
  { href: "/workspace/point", label: "Meeting (Point)", icon: IconPoint },
  { href: "/workspace/admin", label: "Admin Console", icon: IconAdmin },
];

export function Sidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
      <div className="px-2 pb-3 pt-2">
        <div className="text-xs font-semibold text-slate-400">APPS</div>
      </div>

      <nav className="space-y-1">
        {nav.map((item) => {
          const active =
            item.href === "/workspace"
              ? activePath === "/workspace"
              : activePath.startsWith(item.href);

          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition " +
                (active
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white")
              }
            >
              <Icon className={active ? "opacity-90" : "opacity-80"} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4">
        <div className="text-sm font-semibold">Suite Mode</div>
        <p className="mt-1 text-xs text-slate-400">
          Semua aplikasi terhubung dengan SSO (demo). Siap dihubungkan ke
          backend.
        </p>
      </div>
    </aside>
  );
}

// =========================================================
// components/landing/hero.tsx
// =========================================================

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Workspace suite untuk tim modern
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Gazel Workspace
            <span className="block text-slate-300">
              Mail, Docs, Sheets, Drive, Meeting, Admin.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-slate-400">
            Satu suite untuk kolaborasi internal perusahaan: email, dokumen,
            spreadsheet, file storage, meeting, dan kontrol admin. Dibuat untuk
            ekosistem Astria Group.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/workspace"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Masuk Dashboard
            </Link>
            <a
              href="#features"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Lihat Fitur
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              SSO
              <div className="mt-1 text-sm font-semibold text-white">1 Akun</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              Storage
              <div className="mt-1 text-sm font-semibold text-white">Drive</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              Security
              <div className="mt-1 text-sm font-semibold text-white">Admin</div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 shadow-[0_40px_120px_rgba(0,0,0,.45)]">
          <div className="rounded-[26px] border border-white/10 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Suite Preview</div>
              <div className="text-xs text-slate-400">Demo UI</div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                "Mail",
                "Docs",
                "Sheets",
                "Drive",
                "Meeting",
                "Admin Console",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-xs text-slate-400">App</div>
                  <div className="mt-1 text-sm font-semibold">{x}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs text-slate-400">Status</div>
              <div className="mt-1 text-sm font-semibold">
                Ready for Vercel Deployment
              </div>
              <p className="mt-1 text-xs text-slate-400">
                UI lengkap + data demo. Backend bisa ditambahkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/features.tsx
// =========================================================

export function Features() {
  const items = [
    {
      title: "Mail",
      desc: "Inbox, compose, search, labels. Siap integrasi SMTP/IMAP.",
    },
    {
      title: "Docs",
      desc: "Editor dokumen ringan, autosave, share, export.",
    },
    {
      title: "Sheets",
      desc: "Spreadsheet ringan, formula basic, filter, export.",
    },
    {
      title: "Drive",
      desc: "File manager, folder, shared, preview, versioning (demo).",
    },
    {
      title: "Meeting (Point)",
      desc: "Generate link meeting + undangan via mail.",
    },
    {
      title: "Admin Console",
      desc: "Users, roles, teams, audit log, org structure.",
    },
  ];

  return (
    <section id="features" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Satu suite. Satu akun.</h2>
          <p className="mt-2 text-sm text-slate-400">
            Gazel Workspace menyatukan aplikasi kolaborasi perusahaan ke satu
            dashboard yang konsisten.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-sm font-semibold">{x.title}</div>
              <p className="mt-1 text-sm text-slate-400">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/pricing.tsx
// =========================================================

export function Pricing() {
  const tiers = [
    {
      name: "Internal",
      price: "Rp0",
      badge: "Recommended",
      items: [
        "SSO demo",
        "Drive internal",
        "Docs + Sheets ringan",
        "Mail demo",
        "Admin console",
      ],
    },
    {
      name: "Business",
      price: "Custom",
      items: [
        "Mail real (SMTP/IMAP)",
        "Permission enterprise",
        "Audit log lengkap",
        "2FA",
        "SLA + support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      items: [
        "SAML SSO",
        "DLP",
        "Encryption policy",
        "Compliance",
        "Dedicated infra",
      ],
    },
  ];

  return (
    <section id="pricing" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Paket</h2>
          <p className="mt-2 text-sm text-slate-400">
            Mulai dari internal suite. Naikkan ke business/enterprise saat
            backend siap.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "rounded-3xl border p-5 " +
                (t.badge
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.03]")
              }
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{t.name}</div>
                {t.badge ? (
                  <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-950">
                    {t.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-2 text-3xl font-semibold">{t.price}</div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                {t.items.map((x) => (
                  <div key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/faq.tsx
// =========================================================

export function FAQ() {
  const q = [
    {
      a: "Apakah ini sudah bisa dipakai?",
      b: "UI sudah siap dipakai internal (demo). Untuk produksi, tinggal hubungkan auth, database, dan mail provider.",
    },
    {
      a: "Apakah bisa pakai domain email perusahaan?",
      b: "Bisa. Untuk produksi sebaiknya pakai provider mail enterprise atau server mail yang terkelola.",
    },
    {
      a: "Apakah Docs/Sheets bisa realtime kolaborasi?",
      b: "Versi ini fokus single-user + share permission. Realtime collaboration bisa ditambahkan dengan Yjs/Liveblocks.",
    },
  ];

  return (
    <section id="faq" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <p className="mt-2 text-sm text-slate-400">
            Pertanyaan umum sebelum dipakai internal.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {q.map((x) => (
            <div
              key={x.a}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-sm font-semibold">{x.a}</div>
              <p className="mt-1 text-sm text-slate-400">{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// components/landing/footer.tsx
// =========================================================

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Gazel Workspace • Astria Group Ecosystem
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/workspace" className="text-slate-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/" className="text-slate-300 hover:text-white">
            Landing
          </Link>
        </div>
      </div>
    </footer>
  );
}

// =========================================================
// components/workspace/kpi-cards.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useWorkspaceStore } from "@/lib/store";

export function KpiCards() {
  const { mails, docs, sheets, drive } = useWorkspaceStore();

  const cards = [
    {
      title: "Mail",
      value: `${mails.length} messages`,
      href: "/workspace/mail",
      hint: "Inbox + Compose",
    },
    {
      title: "Docs",
      value: `${docs.length} docs`,
      href: "/workspace/docs",
      hint: "Editor + share",
    },
    {
      title: "Sheets",
      value: `${sheets.length} sheets`,
      href: "/workspace/sheets",
      hint: "Grid + formula",
    },
    {
      title: "Drive",
      value: `${drive.items.length} files`,
      href: "/workspace/drive",
      hint: "Folders + upload",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {cards.map((c) => (
        <Link
          key={c.title}
          href={c.href}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
        >
          <div className="text-xs text-slate-400">{c.title}</div>
          <div className="mt-2 text-2xl font-semibold">{c.value}</div>
          <div className="mt-1 text-sm text-slate-400">{c.hint}</div>
        </Link>
      ))}
    </div>
  );
}

// =========================================================
// components/workspace/recent.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useWorkspaceStore } from "@/lib/store";
import { fmtDate } from "@/lib/format";

export function Recent() {
  const { docs, sheets, drive } = useWorkspaceStore();

  const recentDocs = [...docs].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 5);
  const recentSheets = [...sheets]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 5);
  const recentFiles = [...drive.items]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 5);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Recent Docs</div>
          <Link href="/workspace/docs" className="text-xs text-slate-400 hover:text-white">
            Open
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {recentDocs.map((d) => (
            <Link
              key={d.id}
              href={`/workspace/docs/${d.id}`}
              className="block rounded-2xl border border-white/10 bg-white/[0.02] p-3 hover:bg-white/[0.05]"
            >
              <div className="text-sm font-semibold">{d.title}</div>
              <div className="mt-1 text-xs text-slate-400">Updated {fmtDate(d.updatedAt)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Recent Sheets</div>
          <Link href="/workspace/sheets" className="text-xs text-slate-400 hover:text-white">
            Open
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {recentSheets.map((s) => (
            <Link
              key={s.id}
              href={`/workspace/sheets/${s.id}`}
              className="block rounded-2xl border border-white/10 bg-white/[0.02] p-3 hover:bg-white/[0.05]"
            >
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-slate-400">Updated {fmtDate(s.updatedAt)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Recent Files</div>
          <Link href="/workspace/drive" className="text-xs text-slate-400 hover:text-white">
            Open
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {recentFiles.map((f) => (
            <div
              key={f.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-3"
            >
              <div className="text-sm font-semibold">{f.name}</div>
              <div className="mt-1 text-xs text-slate-400">{f.type} • {fmtDate(f.updatedAt)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/mail/mail-list.tsx
// =========================================================

"use client";

import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { ComposeModal } from "@/components/workspace/mail/compose";
import { MailView } from "@/components/workspace/mail/mail-view";
import { fmtDate } from "@/lib/format";

export function MailPage() {
  const { mails, markMailRead } = useWorkspaceStore();
  const [q, setQ] = useState("");
  const [compose, setCompose] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(mails[0]?.id || null);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return mails;
    return mails.filter((m) =>
      [m.from, m.to, m.subject, m.body].join(" ").toLowerCase().includes(s)
    );
  }, [mails, q]);

  const active = useMemo(
    () => mails.find((m) => m.id === activeId) || null,
    [mails, activeId]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Mail</h1>
          <p className="mt-1 text-sm text-slate-400">
            Demo inbox • Compose • Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search mail..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => setCompose(true)}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Compose
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[360px_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
          <div className="px-2 pb-2 text-xs font-semibold text-slate-400">
            INBOX ({filtered.length})
          </div>
          <div className="space-y-2">
            {filtered.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setActiveId(m.id);
                  markMailRead(m.id);
                }}
                className={
                  "w-full rounded-2xl border p-3 text-left transition " +
                  (m.id === activeId
                    ? "border-white/20 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]")
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="truncate text-sm font-semibold">
                    {m.subject}
                  </div>
                  <div className="text-xs text-slate-500">
                    {fmtDate(m.createdAt)}
                  </div>
                </div>
                <div className="mt-1 truncate text-xs text-slate-400">
                  From: {m.from}
                </div>
                <div className="mt-1 truncate text-xs text-slate-500">
                  {m.body}
                </div>
                {!m.read ? (
                  <div className="mt-2 inline-flex items-center gap-2 text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Unread
                  </div>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <MailView mail={active} />
        </div>
      </div>

      <ComposeModal open={compose} onClose={() => setCompose(false)} />
    </div>
  );
}

// =========================================================
// components/workspace/mail/mail-view.tsx
// =========================================================

"use client";

import { MailItem } from "@/lib/types";
import { fmtDateTime } from "@/lib/format";

export function MailView({ mail }: { mail: MailItem | null }) {
  if (!mail) {
    return (
      <div className="text-sm text-slate-400">
        Pilih email dari list untuk melihat isi.
      </div>
    );
  }

  return (
    <div>
      <div className="text-xl font-semibold">{mail.subject}</div>
      <div className="mt-2 grid gap-1 text-sm text-slate-400">
        <div>
          <span className="text-slate-500">From:</span> {mail.from}
        </div>
        <div>
          <span className="text-slate-500">To:</span> {mail.to}
        </div>
        <div>
          <span className="text-slate-500">Date:</span> {fmtDateTime(mail.createdAt)}
        </div>
      </div>

      <div className="mt-4 whitespace-pre-wrap rounded-3xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-200">
        {mail.body}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/mail/compose.tsx
// =========================================================

"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/lib/store";

export function ComposeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { sendMail, currentUser } = useWorkspaceStore();
  const [to, setTo] = useState("admin@gazel.id");
  const [subject, setSubject] = useState("Meeting Invitation");
  const [body, setBody] = useState(
    "Halo,\n\nSaya ingin mengundang Anda meeting via Gazel Point.\n\nTerima kasih."
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-slate-950 p-5 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Compose Mail</div>
          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="grid gap-2 md:grid-cols-[80px_1fr] md:items-center">
            <div className="text-xs text-slate-400">From</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm">
              {currentUser.email}
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-[80px_1fr] md:items-center">
            <div className="text-xs text-slate-400">To</div>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-[80px_1fr] md:items-center">
            <div className="text-xs text-slate-400">Subject</div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-[80px_1fr]">
            <div className="text-xs text-slate-400">Body</div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={10}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                sendMail({
                  to,
                  subject,
                  body,
                });
                onClose();
              }}
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/drive/drive-grid.tsx
// =========================================================

"use client";

import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { fmtBytes, fmtDate } from "@/lib/format";
import { uid } from "@/lib/utils";

export function DrivePage() {
  const { drive, addDriveItem, deleteDriveItem } = useWorkspaceStore();
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return drive.items;
    return drive.items.filter((f) =>
      [f.name, f.type].join(" ").toLowerCase().includes(s)
    );
  }, [drive.items, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Drive</h1>
          <p className="mt-1 text-sm text-slate-400">
            File manager demo • Upload (mock) • Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search files..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => {
              addDriveItem({
                id: uid(12),
                name: `New File ${drive.items.length + 1}.pdf`,
                type: "pdf",
                size: 220_000,
              });
            }}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">{f.name}</div>
                <div className="mt-1 text-xs text-slate-400">
                  {f.type.toUpperCase()} • {fmtBytes(f.size)}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Updated {fmtDate(f.updatedAt)}
                </div>
              </div>
              <button
                onClick={() => deleteDriveItem(f.id)}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
              >
                Delete
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-400">
              Preview placeholder (integrasi viewer nanti)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/docs/doc-editor.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";
import { fmtDate } from "@/lib/format";

export function DocsPage() {
  const { docs, createDoc } = useWorkspaceStore();
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return docs;
    return docs.filter((d) => d.title.toLowerCase().includes(s));
  }, [docs, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Docs</h1>
          <p className="mt-1 text-sm text-slate-400">
            Dokumen ringan • Autosave • Share (demo)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search docs..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => createDoc({ id: uid(12) })}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            New Doc
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {list.map((d) => (
          <Link
            key={d.id}
            href={`/workspace/docs/${d.id}`}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="text-sm font-semibold">{d.title}</div>
            <div className="mt-1 text-xs text-slate-400">
              Updated {fmtDate(d.updatedAt)}
            </div>
            <div className="mt-3 line-clamp-3 text-xs text-slate-500">
              {d.content || "(empty)"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function DocEditorPage({ docId }: { docId: string }) {
  const { docs, updateDocTitle, updateDocContent } = useWorkspaceStore();
  const doc = docs.find((d) => d.id === docId);

  if (!doc) {
    return (
      <div className="text-sm text-slate-400">
        Doc tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Edit Doc</h1>
          <p className="mt-1 text-sm text-slate-400">
            Autosave (local) • Share (coming soon)
          </p>
        </div>
        <Link
          href="/workspace/docs"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Back
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="grid gap-2">
          <div className="text-xs font-semibold text-slate-400">TITLE</div>
          <input
            value={doc.title}
            onChange={(e) => updateDocTitle(doc.id, e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
          />

          <div className="mt-3 text-xs font-semibold text-slate-400">CONTENT</div>
          <textarea
            value={doc.content}
            onChange={(e) => updateDocContent(doc.id, e.target.value)}
            rows={16}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            placeholder="Mulai menulis..."
          />

          <div className="mt-2 text-xs text-slate-500">
            Tip: untuk versi production, editor bisa diganti ke TipTap /
            Lexical + realtime collaboration.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/sheets/sheet-grid.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";
import { fmtDate } from "@/lib/format";

export function SheetsPage() {
  const { sheets, createSheet } = useWorkspaceStore();
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return sheets;
    return sheets.filter((d) => d.title.toLowerCase().includes(s));
  }, [sheets, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sheets</h1>
          <p className="mt-1 text-sm text-slate-400">
            Spreadsheet ringan • Grid • Export (coming soon)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search sheets..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 md:w-[320px]"
          />
          <button
            onClick={() => createSheet({ id: uid(12) })}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            New Sheet
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {list.map((s) => (
          <Link
            key={s.id}
            href={`/workspace/sheets/${s.id}`}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="text-sm font-semibold">{s.title}</div>
            <div className="mt-1 text-xs text-slate-400">
              Updated {fmtDate(s.updatedAt)}
            </div>
            <div className="mt-3 text-xs text-slate-500">
              {s.rows.length} rows • {s.cols.length} cols
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/sheets/sheet-editor.tsx
// =========================================================

"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useWorkspaceStore } from "@/lib/store";

export function SheetEditorPage({ sheetId }: { sheetId: string }) {
  const { sheets, updateSheetTitle, updateSheetCell } = useWorkspaceStore();
  const sheet = useMemo(() => sheets.find((s) => s.id === sheetId), [sheets, sheetId]);

  if (!sheet) {
    return <div className="text-sm text-slate-400">Sheet tidak ditemukan.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Edit Sheet</h1>
          <p className="mt-1 text-sm text-slate-400">
            Grid sederhana • Simpan otomatis (local)
          </p>
        </div>
        <Link
          href="/workspace/sheets"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Back
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="grid gap-2">
          <div className="text-xs font-semibold text-slate-400">TITLE</div>
          <input
            value={sheet.title}
            onChange={(e) => updateSheetTitle(sheet.id, e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
          />

          <div className="mt-4 overflow-auto rounded-3xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-[760px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 border-b border-white/10 bg-slate-950/80 px-3 py-2 text-left text-xs text-slate-400">
                    #
                  </th>
                  {sheet.cols.map((c) => (
                    <th
                      key={c}
                      className="border-b border-white/10 bg-slate-950/80 px-3 py-2 text-left text-xs text-slate-400"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sheet.rows.map((r, ri) => (
                  <tr key={r.id}>
                    <td className="sticky left-0 z-10 border-b border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-500">
                      {ri + 1}
                    </td>
                    {sheet.cols.map((c) => {
                      const v = r.cells[c] ?? "";
                      return (
                        <td key={c} className="border-b border-white/10">
                          <input
                            value={v}
                            onChange={(e) =>
                              updateSheetCell(sheet.id, r.id, c, e.target.value)
                            }
                            className="w-full bg-transparent px-3 py-2 text-sm outline-none"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Catatan: formula advanced belum aktif. Untuk production bisa
            integrasi engine formula.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/admin/users.tsx (Admin Page)
// =========================================================

"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";
import { TeamsPanel } from "@/components/workspace/admin/teams";
import { AuditPanel } from "@/components/workspace/admin/audit";

export function AdminPage() {
  const { users, createUser, deleteUser, setUserRole } = useWorkspaceStore();
  const [tab, setTab] = useState<"users" | "teams" | "audit">("users");

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Admin Console</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage users, roles, teams, dan audit log.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {[
          { k: "users", label: "Users" },
          { k: "teams", label: "Teams" },
          { k: "audit", label: "Audit" },
        ].map((x) => (
          <button
            key={x.k}
            onClick={() => setTab(x.k as any)}
            className={
              "rounded-2xl border px-4 py-2 text-sm " +
              (tab === x.k
                ? "border-white/20 bg-white text-slate-950"
                : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10")
            }
          >
            {x.label}
          </button>
        ))}
      </div>

      {tab === "users" ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Users</div>
            <button
              onClick={() =>
                createUser({
                  id: uid(10),
                  name: `User ${users.length + 1}`,
                  email: `user${users.length + 1}@gazel.id`,
                })
              }
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Add User
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <table className="w-full">
              <thead className="bg-white/[0.03]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-slate-400">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-400">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-400">
                    Role
                  </th>
                  <th className="px-4 py-3 text-right text-xs text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-sm">{u.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-300">
                      {u.email}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={u.role}
                        onChange={(e) => setUserRole(u.id, e.target.value as any)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                      >
                        <option value="admin">admin</option>
                        <option value="manager">manager</option>
                        <option value="staff">staff</option>
                        <option value="viewer">viewer</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => deleteUser(u.id)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "teams" ? <TeamsPanel /> : null}
      {tab === "audit" ? <AuditPanel /> : null}
    </div>
  );
}

// =========================================================
// components/workspace/admin/teams.tsx
// =========================================================

"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";

export function TeamsPanel() {
  const { teams, createTeam, deleteTeam } = useWorkspaceStore();
  const [name, setName] = useState("Product");

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">Teams</div>

      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm md:w-[320px]"
          placeholder="Team name"
        />
        <button
          onClick={() => {
            createTeam({ id: uid(10), name });
            setName("");
          }}
          className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          Add Team
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {teams.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold">{t.name}</div>
              <button
                onClick={() => deleteTeam(t.id)}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
              >
                Delete
              </button>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              Shared Drive + permission (coming soon)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// components/workspace/admin/audit.tsx
// =========================================================

"use client";

import { useWorkspaceStore } from "@/lib/store";
import { fmtDateTime } from "@/lib/format";

export function AuditPanel() {
  const { audit } = useWorkspaceStore();

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">Audit Log</div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full">
          <thead className="bg-white/[0.03]">
            <tr>
              <th className="px-4 py-3 text-left text-xs text-slate-400">
                Time
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">
                Actor
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {audit.map((a) => (
              <tr key={a.id} className="border-t border-white/10">
                <td className="px-4 py-3 text-sm text-slate-300">
                  {fmtDateTime(a.at)}
                </td>
                <td className="px-4 py-3 text-sm">{a.actor}</td>
                <td className="px-4 py-3 text-sm text-slate-300">
                  {a.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-slate-500">
        Untuk production, audit log wajib masuk database + immutable storage.
      </div>
    </div>
  );
}

// =========================================================
// lib/types.ts
// =========================================================

export type Role = "admin" | "manager" | "staff" | "viewer";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type Team = {
  id: string;
  name: string;
};

export type MailItem = {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  read: boolean;
  createdAt: number;
};

export type DocItem = {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
};

export type SheetRow = {
  id: string;
  cells: Record<string, string>;
};

export type SheetItem = {
  id: string;
  title: string;
  cols: string[];
  rows: SheetRow[];
  updatedAt: number;
};

export type DriveItem = {
  id: string;
  name: string;
  type: string;
  size: number;
  updatedAt: number;
};

export type DriveState = {
  items: DriveItem[];
};

export type AuditItem = {
  id: string;
  at: number;
  actor: string;
  action: string;
};

export type Org = {
  name: string;
  domain: string;
};

export type WorkspaceState = {
  org: Org;
  currentUser: User;

  users: User[];
  teams: Team[];
  audit: AuditItem[];

  mails: MailItem[];
  docs: DocItem[];
  sheets: SheetItem[];
  drive: DriveState;

  // actions
  markMailRead: (id: string) => void;
  sendMail: (payload: { to: string; subject: string; body: string }) => void;

  createDoc: (payload: { id: string }) => void;
  updateDocTitle: (id: string, title: string) => void;
  updateDocContent: (id: string, content: string) => void;

  createSheet: (payload: { id: string }) => void;
  updateSheetTitle: (id: string, title: string) => void;
  updateSheetCell: (
    sheetId: string,
    rowId: string,
    col: string,
    value: string
  ) => void;

  addDriveItem: (item: { id: string; name: string; type: string; size: number }) => void;
  deleteDriveItem: (id: string) => void;

  createUser: (u: { id: string; name: string; email: string }) => void;
  deleteUser: (id: string) => void;
  setUserRole: (id: string, role: Role) => void;

  createTeam: (t: { id: string; name: string }) => void;
  deleteTeam: (id: string) => void;
};

// =========================================================
// lib/utils.ts
// =========================================================

export function uid(len = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// =========================================================
// lib/format.ts
// =========================================================

export function fmtDate(ts: number) {
  const d = new Date(ts);
  return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
}

export function fmtDateTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function fmtBytes(n: number) {
  const units = ["B", "KB", "MB", "GB"];
  let u = 0;
  let v = n;
  while (v >= 1024 && u < units.length - 1) {
    v /= 1024;
    u++;
  }
  return `${v.toFixed(u === 0 ? 0 : 1)} ${units[u]}`;
}

// =========================================================
// lib/seed.ts
// =========================================================

import { uid } from "@/lib/utils";

const KEY = "gazel_workspace_v1";

export function ensureSeed() {
  if (typeof window === "undefined") return;
  const existing = localStorage.getItem(KEY);
  if (existing) return;

  const now = Date.now();

  const seed = {
    org: { name: "Astria Group", domain: "gazel.id" },
    currentUser: {
      id: "u_admin",
      name: "Gazel Admin",
      email: "admin@gazel.id",
      role: "admin",
    },
    users: [
      { id: "u_admin", name: "Gazel Admin", email: "admin@gazel.id", role: "admin" },
      { id: "u_mgr", name: "Ops Manager", email: "ops@gazel.id", role: "manager" },
      { id: "u_staff", name: "Finance Staff", email: "finance@gazel.id", role: "staff" },
    ],
    teams: [
      { id: "t_ops", name: "Operations" },
      { id: "t_fin", name: "Finance" },
      { id: "t_prod", name: "Product" },
    ],
    audit: [
      { id: uid(10), at: now - 1000 * 60 * 40, actor: "system", action: "Workspace initialized" },
      { id: uid(10), at: now - 1000 * 60 * 18, actor: "admin@gazel.id", action: "Created team: Product" },
    ],
    mails: [
      {
        id: uid(12),
        from: "ceo@astria.group",
        to: "admin@gazel.id",
        subject: "Kickoff Gazel Workspace",
        body: "Halo Admin,\n\nTolong siapkan workspace suite untuk internal.\n\nThanks.",
        read: false,
        createdAt: now - 1000 * 60 * 60 * 7,
      },
      {
        id: uid(12),
        from: "hr@astria.group",
        to: "admin@gazel.id",
        subject: "New Employee Onboarding",
        body: "Mohon dibuatkan akun email untuk 2 staff baru minggu ini.",
        read: true,
        createdAt: now - 1000 * 60 * 60 * 20,
      },
      {
        id: uid(12),
        from: "security@gazel.id",
        to: "admin@gazel.id",
        subject: "Policy: Drive Access",
        body: "Reminder: gunakan role-based access untuk folder Finance.",
        read: true,
        createdAt: now - 1000 * 60 * 60 * 26,
      },
    ],
    docs: [
      {
        id: "d_001",
        title: "Company SOP — Internal",
        content: "SOP internal perusahaan.\n\n1) Access\n2) Security\n3) Approvals\n",
        updatedAt: now - 1000 * 60 * 55,
      },
      {
        id: "d_002",
        title: "Project Brief — Gazel Workspace",
        content: "Tujuan: membangun suite kolaborasi internal.\n\nScope: Mail, Docs, Sheets, Drive, Point, Admin.",
        updatedAt: now - 1000 * 60 * 140,
      },
    ],
    sheets: [
      {
        id: "s_001",
        title: "Monthly Budget",
        cols: ["Item", "Amount", "Notes"],
        rows: [
          { id: "r1", cells: { Item: "Cloud", Amount: "1500000", Notes: "Vercel + Storage" } },
          { id: "r2", cells: { Item: "Domain", Amount: "250000", Notes: "gazel.id" } },
          { id: "r3", cells: { Item: "Ops", Amount: "3000000", Notes: "Support" } },
        ],
        updatedAt: now - 1000 * 60 * 80,
      },
    ],
    drive: {
      items: [
        { id: "f_1", name: "SOP.pdf", type: "pdf", size: 420_000, updatedAt: now - 1000 * 60 * 400 },
        { id: "f_2", name: "BrandGuideline.png", type: "png", size: 880_000, updatedAt: now - 1000 * 60 * 220 },
        { id: "f_3", name: "Budget.xlsx", type: "xlsx", size: 120_000, updatedAt: now - 1000 * 60 * 120 },
      ],
    },
  };

  localStorage.setItem(KEY, JSON.stringify(seed));
}

export { KEY as WORKSPACE_STORAGE_KEY };

// =========================================================
// lib/store.ts (Zustand)
// =========================================================

"use client";

import { create } from "zustand";
import {
  AuditItem,
  DocItem,
  DriveItem,
  Role,
  SheetItem,
  Team,
  User,
  WorkspaceState,
} from "@/lib/types";
import { uid } from "@/lib/utils";
import { WORKSPACE_STORAGE_KEY } from "@/lib/seed";

function load() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(WORKSPACE_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function save(state: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(state));
}

function auditPush(state: any, actor: string, action: string) {
  const item: AuditItem = { id: uid(10), at: Date.now(), actor, action };
  state.audit = [item, ...state.audit].slice(0, 200);
}

const fallback = {
  org: { name: "Astria Group", domain: "gazel.id" },
  currentUser: { id: "u_admin", name: "Gazel Admin", email: "admin@gazel.id", role: "admin" },
  users: [],
  teams: [],
  audit: [],
  mails: [],
  docs: [],
  sheets: [],
  drive: { items: [] },
};

export const useWorkspaceStore = create<WorkspaceState>((set, get) => {
  const initial = load() || fallback;

  return {
    ...initial,

    markMailRead: (id) =>
      set(() => {
        const s = load() || get();
        s.mails = s.mails.map((m: any) => (m.id === id ? { ...m, read: true } : m));
        auditPush(s, s.currentUser.email, `Read mail: ${id}`);
        save(s);
        return s;
      }),

    sendMail: ({ to, subject, body }) =>
      set(() => {
        const s = load() || get();
        s.mails = [
          {
            id: uid(12),
            from: s.currentUser.email,
            to,
            subject,
            body,
            read: true,
            createdAt: Date.now(),
          },
          ...s.mails,
        ];
        auditPush(s, s.currentUser.email, `Sent mail to ${to}: ${subject}`);
        save(s);
        return s;
      }),

    createDoc: ({ id }) =>
      set(() => {
        const s = load() || get();
        const d: DocItem = {
          id,
          title: `Untitled Doc ${s.docs.length + 1}`,
          content: "",
          updatedAt: Date.now(),
        };
        s.docs = [d, ...s.docs];
        auditPush(s, s.currentUser.email, `Created doc: ${d.title}`);
        save(s);
        return s;
      }),

    updateDocTitle: (id, title) =>
      set(() => {
        const s = load() || get();
        s.docs = s.docs.map((d: DocItem) =>
          d.id === id ? { ...d, title, updatedAt: Date.now() } : d
        );
        save(s);
        return s;
      }),

    updateDocContent: (id, content) =>
      set(() => {
        const s = load() || get();
        s.docs = s.docs.map((d: DocItem) =>
          d.id === id ? { ...d, content, updatedAt: Date.now() } : d
        );
        save(s);
        return s;
      }),

    createSheet: ({ id }) =>
      set(() => {
        const s = load() || get();
        const sheet: SheetItem = {
          id,
          title: `Untitled Sheet ${s.sheets.length + 1}`,
          cols: ["A", "B", "C", "D"],
          rows: Array.from({ length: 12 }).map((_, i) => ({
            id: `row_${i + 1}`,
            cells: { A: "", B: "", C: "", D: "" },
          })),
          updatedAt: Date.now(),
        };
        s.sheets = [sheet, ...s.sheets];
        auditPush(s, s.currentUser.email, `Created sheet: ${sheet.title}`);
        save(s);
        return s;
      }),

    updateSheetTitle: (id, title) =>
      set(() => {
        const s = load() || get();
        s.sheets = s.sheets.map((x: SheetItem) =>
          x.id === id ? { ...x, title, updatedAt: Date.now() } : x
        );
        save(s);
        return s;
      }),

    updateSheetCell: (sheetId, rowId, col, value) =>
      set(() => {
        const s = load() || get();
        s.sheets = s.sheets.map((sh: SheetItem) => {
          if (sh.id !== sheetId) return sh;
          const rows = sh.rows.map((r) =>
            r.id === rowId ? { ...r, cells: { ...r.cells, [col]: value } } : r
          );
          return { ...sh, rows, updatedAt: Date.now() };
        });
        save(s);
        return s;
      }),

    addDriveItem: (item) =>
      set(() => {
        const s = load() || get();
        const f: DriveItem = { ...item, updatedAt: Date.now() };
        s.drive.items = [f, ...s.drive.items];
        auditPush(s, s.currentUser.email, `Uploaded file: ${f.name}`);
        save(s);
        return s;
      }),

    deleteDriveItem: (id) =>
      set(() => {
        const s = load() || get();
        const before = s.drive.items.length;
        s.drive.items = s.drive.items.filter((x: DriveItem) => x.id !== id);
        if (s.drive.items.length !== before) {
          auditPush(s, s.currentUser.email, `Deleted file: ${id}`);
        }
        save(s);
        return s;
      }),

    createUser: ({ id, name, email }) =>
      set(() => {
        const s = load() || get();
        const u: User = { id, name, email, role: "staff" };
        s.users = [...s.users, u];
        auditPush(s, s.currentUser.email, `Created user: ${email}`);
        save(s);
        return s;
      }),

    deleteUser: (id) =>
      set(() => {
        const s = load() || get();
        const u = s.users.find((x: User) => x.id === id);
        s.users = s.users.filter((x: User) => x.id !== id);
        if (u) auditPush(s, s.currentUser.email, `Deleted user: ${u.email}`);
        save(s);
        return s;
      }),

    setUserRole: (id, role: Role) =>
      set(() => {
        const s = load() || get();
        s.users = s.users.map((x: User) => (x.id === id ? { ...x, role } : x));
        auditPush(s, s.currentUser.email, `Set role: ${id} => ${role}`);
        save(s);
        return s;
      }),

    createTeam: ({ id, name }) =>
      set(() => {
        const s = load() || get();
        const t: Team = { id, name };
        s.teams = [...s.teams, t];
        auditPush(s, s.currentUser.email, `Created team: ${name}`);
        save(s);
        return s;
      }),

    deleteTeam: (id) =>
      set(() => {
        const s = load() || get();
        const t = s.teams.find((x: Team) => x.id === id);
        s.teams = s.teams.filter((x: Team) => x.id !== id);
        if (t) auditPush(s, s.currentUser.email, `Deleted team: ${t.name}`);
        save(s);
        return s;
      }),
  };
});

// =========================================================
// lib/icons.tsx (tiny inline icons)
// =========================================================

export function IconBase({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconDashboard({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M3 13h8V3H3v10z" />
      <path d="M13 21h8V11h-8v10z" />
      <path d="M13 3h8v6h-8V3z" />
      <path d="M3 17h8v4H3v-4z" />
    </IconBase>
  );
}

export function IconMail({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 4h16v16H4V4z" />
      <path d="M4 6l8 7 8-7" />
    </IconBase>
  );
}

export function IconDocs({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M6 2h9l3 3v17H6V2z" />
      <path d="M15 2v5h5" />
      <path d="M8 11h8" />
      <path d="M8 15h8" />
      <path d="M8 19h6" />
    </IconBase>
  );
}

export function IconSheets({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 4h16v16H4V4z" />
      <path d="M8 4v16" />
      <path d="M4 8h16" />
      <path d="M4 12h16" />
      <path d="M4 16h16" />
    </IconBase>
  );
}

export function IconDrive({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M8 4h8l4 7H4l4-7z" />
      <path d="M4 11l4 9h8l4-9" />
    </IconBase>
  );
}

export function IconPoint({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M23 7l-7 5 7 5V7z" />
      <path d="M1 5h15v14H1V5z" />
    </IconBase>
  );
}

export function IconAdmin({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 1l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5z" />
    </IconBase>
  );
}

// =========================================================
// package.json (important deps)
// =========================================================

/*
{
  "name": "gazel-workspace",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.4.5"
  }
}
*/

// =========================================================
// tailwind.config.js
// =========================================================

/*
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
*/

// =========================================================
// postcss.config.js
// =========================================================

/*
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
*/

// =========================================================
// app/globals.css
// =========================================================

/*
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  height: 100%;
}

* {
  -webkit-tap-highlight-color: transparent;
}
*/

// =========================================================
// DONE.
// =========================================================

  

// =========================================================
// DONE.
// =========================================================

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/workspace/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";

const colLetters = (n: number) => {
  let s = "";
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
};

const parseNumber = (v: string) => {
  const t = (v ?? "").toString().trim();
  if (!t) return null;
  const x = Number(t.replaceAll(",", ""));
  return Number.isFinite(x) ? x : null;
};

function evalFormula(
  formula: string,
  getCell: (r: number, c: number) => string
) {
  const f = formula.trim();
  if (!f.startsWith("=")) return formula;

  const body = f.slice(1).trim();

  const rangeMatch = body.match(/^(SUM|AVG|MIN|MAX)\(([^\)]+)\)$/i);
  if (rangeMatch) {
    const fn = rangeMatch[1].toUpperCase();
    const arg = rangeMatch[2].trim();

    const m = arg.match(/^([A-Z]+)(\d+)\s*:\s*([A-Z]+)(\d+)$/i);
    if (!m) return "#ERR";

    const c1 = m[1].toUpperCase();
    const r1 = Number(m[2]);
    const c2 = m[3].toUpperCase();
    const r2 = Number(m[4]);

    const colToNum = (letters: string) => {
      let n = 0;
      for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
      return n;
    };

    const startC = Math.min(colToNum(c1), colToNum(c2));
    const endC = Math.max(colToNum(c1), colToNum(c2));
    const startR = Math.min(r1, r2);
    const endR = Math.max(r1, r2);

    const vals: number[] = [];
    for (let rr = startR; rr <= endR; rr++) {
      for (let cc = startC; cc <= endC; cc++) {
        const v = parseNumber(getCell(rr - 1, cc - 1));
        if (v !== null) vals.push(v);
      }
    }

    if (!vals.length) return "0";
    if (fn === "SUM") return String(vals.reduce((a, b) => a + b, 0));
    if (fn === "AVG") return String(vals.reduce((a, b) => a + b, 0) / vals.length);
    if (fn === "MIN") return String(Math.min(...vals));
    if (fn === "MAX") return String(Math.max(...vals));
    return "#ERR";
  }

  const opMatch = body.match(/^(.+?)\s*([\+\-\*\/])\s*(.+)$/);
  if (opMatch) {
    const left = opMatch[1].trim();
    const op = opMatch[2];
    const right = opMatch[3].trim();

    const readToken = (t: string) => {
      const cm = t.match(/^([A-Z]+)(\d+)$/i);
      if (cm) {
        const colToNum = (letters: string) => {
          let n = 0;
          for (const ch of letters)
            n = n * 26 + (ch.toUpperCase().charCodeAt(0) - 64);
          return n;
        };
        const c = colToNum(cm[1]);
        const r = Number(cm[2]);
        return parseNumber(getCell(r - 1, c - 1)) ?? 0;
      }
      return parseNumber(t) ?? 0;
    };

    const a = readToken(left);
    const b = readToken(right);

    if (op === "+") return String(a + b);
    if (op === "-") return String(a - b);
    if (op === "*") return String(a * b);
    if (op === "/") return b === 0 ? "#DIV/0" : String(a / b);
  }

  const n = parseNumber(body);
  if (n !== null) return String(n);

  return "#ERR";
}

export default function SheetsPage() {
  const { sheets, upsertSheet, updateSheetCell, deleteSheet } =
    useWorkspaceStore();

  const [activeId, setActiveId] = useState<string>(sheets[0]?.id ?? "");
  const active = useMemo(
    () => sheets.find((s) => s.id === activeId) ?? sheets[0],
    [sheets, activeId]
  );

  useEffect(() => {
    if (!activeId && sheets[0]?.id) setActiveId(sheets[0].id);
  }, [activeId, sheets]);

  const create = () => {
    const id = uid("sheet");
    upsertSheet({
      id,
      name: `Sheet ${sheets.length + 1}`,
      rows: 30,
      cols: 12,
      cells: {},
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    setActiveId(id);
  };

  const [selected, setSelected] = useState<{ r: number; c: number } | null>(
    null
  );
  const [editValue, setEditValue] = useState<string>("");

  useEffect(() => {
    if (!active) return;
    if (!selected) return;
    const key = `${selected.r}:${selected.c}`;
    const raw = active.cells[key] ?? "";
    setEditValue(raw);
  }, [active?.id, selected?.r, selected?.c]);

  const getCellRaw = (r: number, c: number) => {
    if (!active) return "";
    return active.cells[`${r}:${c}`] ?? "";
  };

  const getCellDisplay = (r: number, c: number) => {
    const raw = getCellRaw(r, c);
    if (!raw) return "";
    if (raw.trim().startsWith("=")) {
      return evalFormula(raw, (rr, cc) => getCellRaw(rr, cc));
    }
    return raw;
  };

  const saveCell = () => {
    if (!active || !selected) return;
    updateSheetCell(active.id, selected.r, selected.c, editValue);
  };

  const deleteActive = () => {
    if (!active) return;
    const ok = confirm(`Delete sheet “${active.name}”?`);
    if (!ok) return;
    deleteSheet(active.id);
    setActiveId("");
  };

  return (
    <AppShell title="Sheets" subtitle="Light spreadsheet for quick ops & finance tables.">
      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Your Sheets</div>
                <div className="text-xs text-slate-500">Create, edit, and export.</div>
              </div>
              <Button className="rounded-xl" onClick={create}>
                New
              </Button>
            </div>

            <div className="mt-4">
              <Select value={active?.id ?? ""} onValueChange={(v) => setActiveId(v)}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select a sheet" />
                </SelectTrigger>
                <SelectContent>
                  {sheets.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {active ? (
                <div className="mt-3 grid gap-2">
                  <div className="rounded-xl border bg-slate-50 p-3">
                    <div className="text-xs text-slate-500">Sheet</div>
                    <div className="mt-0.5 text-sm font-semibold">{active.name}</div>
                    <div className="mt-1 text-xs text-slate-500">
                      {active.rows} rows • {active.cols} cols
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="text-xs font-semibold text-slate-700">Cell Editor</div>
                    <Input
                      className="rounded-xl"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      placeholder={selected ? "Type value or formula (=SUM(A1:A5))" : "Select a cell"}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveCell();
                      }}
                      disabled={!selected}
                    />
                    <div className="flex gap-2">
                      <Button className="rounded-xl" onClick={saveCell} disabled={!selected}>
                        Save
                      </Button>
                      <Button
                        className="rounded-xl"
                        variant="secondary"
                        onClick={() => {
                          if (!active || !selected) return;
                          setEditValue("");
                          updateSheetCell(active.id, selected.r, selected.c, "");
                        }}
                        disabled={!selected}
                      >
                        Clear
                      </Button>
                    </div>
                    <div className="text-xs text-slate-500">
                      Supported: =SUM(A1:A10), =AVG(), =MIN(), =MAX(), =A1+B1, =A1/2
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full rounded-xl" variant="destructive" onClick={deleteActive}>
                      Delete Sheet
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mt-3 text-sm text-slate-500">Create a sheet to begin.</div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="p-3">
            {!active ? (
              <div className="p-6 text-sm text-slate-500">No sheet selected.</div>
            ) : (
              <div className="overflow-auto rounded-xl border">
                <table className="min-w-[900px] w-full border-collapse text-sm">
                  <thead className="sticky top-0 z-10 bg-white">
                    <tr>
                      <th className="w-14 border-b border-r bg-slate-50 px-2 py-2 text-xs text-slate-500">#</th>
                      {Array.from({ length: active.cols }).map((_, c) => (
                        <th key={c} className="border-b border-r bg-slate-50 px-2 py-2 text-xs text-slate-600">
                          {colLetters(c + 1)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: active.rows }).map((_, r) => (
                      <tr key={r}>
                        <td className="border-b border-r bg-slate-50 px-2 py-2 text-xs text-slate-500">{r + 1}</td>
                        {Array.from({ length: active.cols }).map((_, c) => {
                          const isSel = selected?.r === r && selected?.c === c;
                          const display = getCellDisplay(r, c);
                          return (
                            <td
                              key={c}
                              className={`border-b border-r px-2 py-2 align-top ${
                                isSel ? "bg-indigo-50 outline outline-2 outline-indigo-400" : "bg-white"
                              }`}
                              onClick={() => setSelected({ r, c })}
                            >
                              <div className="min-h-[20px] whitespace-pre-wrap break-words">{display}</div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

"use client";

import React, { useMemo, useState } from "react";
import { AppShell } from "@/components/workspace/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWorkspaceStore } from "@/lib/store";
import { uid } from "@/lib/utils";

export default function AdminConsolePage() {
  const {
    org,
    users,
    invites,
    audit,
    upsertOrg,
    addUser,
    updateUser,
    removeUser,
    createInvite,
    revokeInvite,
    logAudit,
  } = useWorkspaceStore();

  const [tab, setTab] = useState("users");

  const userStats = useMemo(() => {
    const total = users.length;
    const admins = users.filter((u) => u.role === "admin").length;
    const active = users.filter((u) => u.status === "active").length;
    return { total, admins, active };
  }, [users]);

  const [orgName, setOrgName] = useState(org.name);
  const [orgDomain, setOrgDomain] = useState(org.domain);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "member">("member");

  const [inviteEmail, setInviteEmail] = useState("");

  const saveOrg = () => {
    upsertOrg({
      name: orgName.trim() || "Gazel Workspace",
      domain: orgDomain.trim() || "gazel.id",
    });
    logAudit({
      id: uid("audit"),
      ts: Date.now(),
      actor: "System Admin",
      action: "Update organization settings",
      meta: { name: orgName, domain: orgDomain },
    });
  };

  const createUser = () => {
    const fn = fullName.trim();
    const em = email.trim().toLowerCase();
    if (!fn || !em) return alert("Name & email required");

    addUser({
      id: uid("usr"),
      fullName: fn,
      email: em,
      role,
      status: "active",
      createdAt: Date.now(),
      lastLoginAt: Date.now(),
    });

    logAudit({
      id: uid("audit"),
      ts: Date.now(),
      actor: "System Admin",
      action: "Create user",
      meta: { fullName: fn, email: em, role },
    });

    setFullName("");
    setEmail("");
    setRole("member");
  };

  const sendInvite = () => {
    const em = inviteEmail.trim().toLowerCase();
    if (!em) return;

    const token = uid("inv");
    createInvite({
      id: uid("invite"),
      email: em,
      token,
      status: "pending",
      createdAt: Date.now(),
    });

    logAudit({
      id: uid("audit"),
      ts: Date.now(),
      actor: "System Admin",
      action: "Create invite",
      meta: { email: em, token },
    });

    setInviteEmail("");
  };

  return (
    <AppShell title="Admin Console" subtitle="Manage users, org settings, invites, and audit logs.">
      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="rounded-xl">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="invites">Invites</TabsTrigger>
                <TabsTrigger value="org">Org</TabsTrigger>
                <TabsTrigger value="audit">Audit</TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-3 rounded-2xl border bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Create User</div>
                    <div className="grid gap-2">
                      <Input
                        className="rounded-xl"
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <Input
                        className="rounded-xl"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Select value={role} onValueChange={(v: any) => setRole(v)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="member">Member</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="rounded-xl" onClick={createUser}>
                        Create
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-auto rounded-2xl border">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-xs text-slate-600">
                        <tr>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Email</th>
                          <th className="px-3 py-2 text-left">Role</th>
                          <th className="px-3 py-2 text-left">Status</th>
                          <th className="px-3 py-2 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((u) => (
                          <tr key={u.id} className="border-t">
                            <td className="px-3 py-2 font-medium">{u.fullName}</td>
                            <td className="px-3 py-2 text-slate-600">{u.email}</td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-xs ${
                                  u.role === "admin"
                                    ? "bg-indigo-100 text-indigo-700"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {u.role}
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-xs ${
                                  u.status === "active"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {u.status}
                              </span>
                            </td>
                            <td className="px-3 py-2 text-right">
                              <div className="inline-flex gap-2">
                                <Button
                                  className="rounded-xl"
                                  variant="secondary"
                                  onClick={() => {
                                    const newRole = u.role === "admin" ? "member" : "admin";
                                    updateUser(u.id, { role: newRole });
                                    logAudit({
                                      id: uid("audit"),
                                      ts: Date.now(),
                                      actor: "System Admin",
                                      action: "Update user role",
                                      meta: { email: u.email, role: newRole },
                                    });
                                  }}
                                >
                                  Toggle Role
                                </Button>
                                <Button
                                  className="rounded-xl"
                                  variant="destructive"
                                  onClick={() => {
                                    const ok = confirm(`Remove user ${u.fullName}?`);
                                    if (!ok) return;
                                    removeUser(u.id);
                                    logAudit({
                                      id: uid("audit"),
                                      ts: Date.now(),
                                      actor: "System Admin",
                                      action: "Remove user",
                                      meta: { email: u.email },
                                    });
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="invites" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-3 rounded-2xl border bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Invite User</div>
                    <div className="grid gap-2">
                      <Input
                        className="rounded-xl"
                        placeholder="Email"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                      />
                      <Button className="rounded-xl" onClick={sendInvite}>
                        Send Invite
                      </Button>
                      <div className="text-xs text-slate-500">
                        For demo: invite creates a token. In real system this sends email.
                      </div>
                    </div>
                  </div>

                  <div className="overflow-auto rounded-2xl border">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-xs text-slate-600">
                        <tr>
                          <th className="px-3 py-2 text-left">Email</th>
                          <th className="px-3 py-2 text-left">Status</th>
                          <th className="px-3 py-2 text-left">Token</th>
                          <th className="px-3 py-2 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invites.map((inv) => (
                          <tr key={inv.id} className="border-t">
                            <td className="px-3 py-2 font-medium">{inv.email}</td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-xs ${
                                  inv.status === "pending"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {inv.status}
                              </span>
                            </td>
                            <td className="px-3 py-2 font-mono text-xs text-slate-600">
                              {inv.token}
                            </td>
                            <td className="px-3 py-2 text-right">
                              <Button
                                className="rounded-xl"
                                variant="destructive"
                                onClick={() => {
                                  revokeInvite(inv.id);
                                  logAudit({
                                    id: uid("audit"),
                                    ts: Date.now(),
                                    actor: "System Admin",
                                    action: "Revoke invite",
                                    meta: { email: inv.email },
                                  });
                                }}
                              >
                                Revoke
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="org" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2 rounded-2xl border bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Organization</div>
                    <Input
                      className="rounded-xl"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="Organization name"
                    />
                    <Input
                      className="rounded-xl"
                      value={orgDomain}
                      onChange={(e) => setOrgDomain(e.target.value)}
                      placeholder="Primary domain (e.g. gazel.id)"
                    />
                    <Button className="rounded-xl" onClick={saveOrg}>
                      Save Settings
                    </Button>
                    <div className="text-xs text-slate-500">
                      Used for email suggestions and tenant display.
                    </div>
                  </div>

                  <div className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold">Security (Demo)</div>
                    <div className="mt-2 grid gap-2 text-sm text-slate-600">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        Require strong passwords
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        Enable audit logs
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        Force 2FA (coming soon)
                      </label>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="audit" className="mt-4">
                <div className="overflow-auto rounded-2xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-xs text-slate-600">
                      <tr>
                        <th className="px-3 py-2 text-left">Time</th>
                        <th className="px-3 py-2 text-left">Actor</th>
                        <th className="px-3 py-2 text-left">Action</th>
                        <th className="px-3 py-2 text-left">Meta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {audit
                        .slice()
                        .sort((a, b) => b.ts - a.ts)
                        .map((a) => (
                          <tr key={a.id} className="border-t">
                            <td className="px-3 py-2 text-xs text-slate-500">
                              {new Date(a.ts).toLocaleString()}
                            </td>
                            <td className="px-3 py-2 font-medium">{a.actor}</td>
                            <td className="px-3 py-2">{a.action}</td>
                            <td className="px-3 py-2 font-mono text-xs text-slate-600">
                              {JSON.stringify(a.meta ?? {})}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="rounded-2xl">
            <CardContent className="p-4">
              <div className="text-sm font-semibold">Quick Stats</div>
              <div className="mt-3 grid gap-3">
                <div className="rounded-xl border bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Users</div>
                  <div className="text-2xl font-semibold">{userStats.total}</div>
                </div>
                <div className="rounded-xl border bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Admins</div>
                  <div className="text-2xl font-semibold">{userStats.admins}</div>
                </div>
                <div className="rounded-xl border bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Active</div>
                  <div className="text-2xl font-semibold">{userStats.active}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-4">
              <div className="text-sm font-semibold">Tips</div>
              <div className="mt-2 text-sm text-slate-600">
                This is a UI-first Admin Console. For production, connect it to:
                <div className="mt-2 grid gap-1 text-sm">
                  <div>• PostgreSQL + Prisma</div>
                  <div>• NextAuth (SSO)</div>
                  <div>• RBAC + Audit pipeline</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}



export type MailFolder = "inbox" | "sent" | "draft" | "spam";

export type MailMessage = {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  folder: MailFolder;
  read: boolean;
  createdAt: number;
};

export type DocItem = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type DriveItem = {
  id: string;
  name: string;
  type: "folder" | "file";
  size: number;
  mime?: string;
  parentId: string | null;
  createdAt: number;
};

export type Meeting = {
  id: string;
  title: string;
  link: string;
  createdAt: number;
  scheduledFor?: number;
  invited?: string[];
};

export type Sheet = {
  id: string;
  name: string;
  rows: number;
  cols: number;
  cells: Record<string, string>;
  createdAt: number;
  updatedAt: number;
};

export type Org = {
  name: string;
  domain: string;
};

export type WorkspaceUser = {
  id: string;
  fullName: string;
  email: string;
  role: "admin" | "member";
  status: "active" | "suspended";
  createdAt: number;
  lastLoginAt?: number;
};

export type Invite = {
  id: string;
  email: string;
  token: string;
  status: "pending" | "revoked" | "accepted";
  createdAt: number;
};

export type AuditEvent = {
  id: string;
  ts: number;
  actor: string;
  action: string;
  meta?: Record<string, any>;
};

export type WorkspaceState = {
  org: Org;
  mail: MailMessage[];
  docs: DocItem[];
  drive: DriveItem[];
  meetings: Meeting[];
  sheets: Sheet[];
  users: WorkspaceUser[];
  invites: Invite[];
  audit: AuditEvent[];
};


export const uid = (prefix = "id") => {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
};

export const formatBytes = (bytes: number) => {
  if (!bytes || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const v = bytes / Math.pow(1024, i);
  return `${v.toFixed(v >= 10 ? 0 : 1)} ${units[i]}`;
};

export const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));


"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  AuditEvent,
  DocItem,
  DriveItem,
  Invite,
  MailMessage,
  Meeting,
  Org,
  Sheet,
  WorkspaceState,
  WorkspaceUser,
} from "@/lib/types";
import { uid } from "@/lib/utils";

type WorkspaceActions = {
  upsertOrg: (org: Org) => void;

  addMail: (m: MailMessage) => void;
  updateMail: (id: string, patch: Partial<MailMessage>) => void;
  deleteMail: (id: string) => void;

  upsertDoc: (d: DocItem) => void;
  deleteDoc: (id: string) => void;

  addDriveItem: (i: DriveItem) => void;
  deleteDriveItem: (id: string) => void;

  addMeeting: (m: Meeting) => void;
  deleteMeeting: (id: string) => void;

  upsertSheet: (s: Sheet) => void;
  updateSheetCell: (sheetId: string, r: number, c: number, value: string) => void;
  deleteSheet: (sheetId: string) => void;

  addUser: (u: WorkspaceUser) => void;
  updateUser: (id: string, patch: Partial<WorkspaceUser>) => void;
  removeUser: (id: string) => void;

  createInvite: (inv: Invite) => void;
  revokeInvite: (id: string) => void;

  logAudit: (e: AuditEvent) => void;

  resetDemo: () => void;
};

const seed: WorkspaceState = {
  org: { name: "Gazel Workspace", domain: "gazel.id" },

  mail: [
    {
      id: uid("mail"),
      from: "hr@gazel.id",
      to: "you@gazel.id",
      subject: "Welcome to Gazel Workspace",
      body:
        "Hi!\n\nYour Gazel Workspace is ready.\n\n- Mail\n- Docs\n- Sheets\n- Drive\n- Point\n- Admin Console\n\nLet’s build the future.\n\n— Gazel Team",
      folder: "inbox",
      read: false,
      createdAt: Date.now() - 1000 * 60 * 60 * 12,
    },
    {
      id: uid("mail"),
      from: "ops@gazel.id",
      to: "you@gazel.id",
      subject: "Drive storage policy",
      body: "Reminder: Internal files must be stored in Gazel Drive.\n\n— Ops",
      folder: "inbox",
      read: true,
      createdAt: Date.now() - 1000 * 60 * 60 * 24,
    },
  ],

  docs: [
    {
      id: uid("doc"),
      title: "Company Handbook",
      content:
        "# Gazel Workspace Handbook\n\nThis is a demo document.\n\n## Rules\n- Keep files organized\n- Use Drive for all internal docs\n- Use Point for meetings\n\n## Security\n- Do not share tokens\n- Use strong passwords\n",
      createdAt: Date.now() - 1000 * 60 * 60 * 72,
      updatedAt: Date.now() - 1000 * 60 * 60 * 2,
    },
  ],

  drive: [
    { id: uid("drv"), name: "Company", type: "folder", size: 0, parentId: null, createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10 },
    { id: uid("drv"), name: "Finance", type: "folder", size: 0, parentId: null, createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9 },
    { id: uid("drv"), name: "Brand Assets", type: "folder", size: 0, parentId: null, createdAt: Date.now() - 1000 * 60 * 60 * 24 * 8 },
    { id: uid("drv"), name: "Gazel Workspace Overview.pdf", type: "file", size: 2_140_000, mime: "application/pdf", parentId: null, createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2 },
  ],

  meetings: [
    {
      id: uid("meet"),
      title: "Weekly Sync",
      link: "https://gazel-point.vercel.app/meet/weekly-sync",
      createdAt: Date.now() - 1000 * 60 * 60 * 36,
      invited: ["ops@gazel.id", "hr@gazel.id"],
    },
  ],

  sheets: [
    {
      id: uid("sheet"),
      name: "Budget 2026",
      rows: 30,
      cols: 12,
      cells: {
        "0:0": "Category",
        "0:1": "Jan",
        "0:2": "Feb",
        "0:3": "Mar",
        "1:0": "Marketing",
        "1:1": "12000000",
        "1:2": "9000000",
        "1:3": "11000000",
        "2:0": "Engineering",
        "2:1": "25000000",
        "2:2": "24000000",
        "2:3": "26000000",
        "3:0": "Total",
        "3:1": "=SUM(B2:B3)",
        "3:2": "=SUM(C2:C3)",
        "3:3": "=SUM(D2:D3)",
      },
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
      updatedAt: Date.now() - 1000 * 60 * 10,
    },
  ],

  users: [
    {
      id: uid("usr"),
      fullName: "System Admin",
      email: "admin@gazel.id",
      role: "admin",
      status: "active",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
      lastLoginAt: Date.now() - 1000 * 60 * 12,
    },
    {
      id: uid("usr"),
      fullName: "Operations",
      email: "ops@gazel.id",
      role: "member",
      status: "active",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 18,
      lastLoginAt: Date.now() - 1000 * 60 * 60 * 5,
    },
  ],

  invites: [
    {
      id: uid("invite"),
      email: "finance@gazel.id",
      token: uid("inv"),
      status: "pending",
      createdAt: Date.now() - 1000 * 60 * 60 * 20,
    },
  ],

  audit: [
    { id: uid("audit"), ts: Date.now() - 1000 * 60 * 60 * 10, actor: "System Admin", action: "Create workspace", meta: { tenant: "gazel.id" } },
    { id: uid("audit"), ts: Date.now() - 1000 * 60 * 60 * 6, actor: "System Admin", action: "Invite user", meta: { email: "finance@gazel.id" } },
  ],
};

export const useWorkspaceStore = create<WorkspaceState & WorkspaceActions>()(
  persist(
    (set, get) => ({
      ...seed,

      upsertOrg: (org) => set({ org }),

      addMail: (m) => set({ mail: [m, ...get().mail] }),
      updateMail: (id, patch) =>
        set({ mail: get().mail.map((m) => (m.id === id ? { ...m, ...patch } : m)) }),
      deleteMail: (id) => set({ mail: get().mail.filter((m) => m.id !== id) }),

      upsertDoc: (d) => {
        const docs = get().docs.slice();
        const idx = docs.findIndex((x) => x.id === d.id);
        if (idx >= 0) docs[idx] = { ...docs[idx], ...d, updatedAt: Date.now() };
        else docs.unshift(d);
        set({ docs });
      },
      deleteDoc: (id) => set({ docs: get().docs.filter((d) => d.id !== id) }),

      addDriveItem: (i) => set({ drive: [i, ...get().drive] }),
      deleteDriveItem: (id) => set({ drive: get().drive.filter((x) => x.id !== id) }),

      addMeeting: (m) => set({ meetings: [m, ...get().meetings] }),
      deleteMeeting: (id) => set({ meetings: get().meetings.filter((m) => m.id !== id) }),

      upsertSheet: (s) => {
        const list = get().sheets.slice();
        const idx = list.findIndex((x) => x.id === s.id);
        if (idx >= 0) list[idx] = { ...list[idx], ...s, updatedAt: Date.now() };
        else list.unshift(s);
        set({ sheets: list });
      },
      updateSheetCell: (sheetId, r, c, value) => {
        const list = get().sheets.slice();
        const idx = list.findIndex((x) => x.id === sheetId);
        if (idx < 0) return;
        const s = list[idx];
        const key = `${r}:${c}`;
        const cells = { ...s.cells, [key]: value };
        list[idx] = { ...s, cells, updatedAt: Date.now() };
        set({ sheets: list });
      },
      deleteSheet: (sheetId) => set({ sheets: get().sheets.filter((s) => s.id !== sheetId) }),

      addUser: (u) => set({ users: [u, ...get().users] }),
      updateUser: (id, patch) =>
        set({ users: get().users.map((u) => (u.id === id ? { ...u, ...patch } : u)) }),
      removeUser: (id) => set({ users: get().users.filter((u) => u.id !== id) }),

      createInvite: (inv) => set({ invites: [inv, ...get().invites] }),
      revokeInvite: (id) =>
        set({ invites: get().invites.map((i) => (i.id === id ? { ...i, status: "revoked" } : i)) }),

      logAudit: (e) => set({ audit: [e, ...get().audit].slice(0, 300) }),

      resetDemo: () => set({ ...seed }),
    }),
    { name: "gazel-workspace-demo", version: 1 }
  )
);


"use client";

import React from "react";
import { AppShell } from "@/components/workspace/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWorkspaceStore } from "@/lib/store";

export default function ResetDemoPage() {
  const { resetDemo } = useWorkspaceStore();

  return (
    <AppShell title="Reset Demo" subtitle="Clear all local demo data and restore seed.">
      <Card className="rounded-2xl">
        <CardContent className="p-6">
          <div className="text-sm text-slate-600">
            This project uses <span className="font-semibold">localStorage</span> to store demo data.
            Reset will restore the default seed.
          </div>
          <div className="mt-4 flex gap-2">
            <Button
              className="rounded-xl"
              variant="destructive"
              onClick={() => {
                const ok = confirm("Reset demo data?");
                if (!ok) return;
                resetDemo();
                alert("Demo data restored.");
              }}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </AppShell>
  );
}

