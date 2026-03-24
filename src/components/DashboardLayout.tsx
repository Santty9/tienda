"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { LayoutDashboard, User, ShoppingBag, Settings, ArrowLeft } from "lucide-react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const items = [
  {
    label: "Perfil",
    href: "/dashboard/perfil",
    icon: User,
  },
  {
    label: "Productos",
    href: "/dashboard/productos",
    icon: ShoppingBag,
  },
  {
    label: "Ajustes",
    href: "/dashboard/ajustes",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_24%),linear-gradient(180deg,#08080d_0%,#05060a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.08]" />
        <div className="absolute left-[12%] top-[8%] h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[110px]" />
        <div className="absolute bottom-[8%] right-[10%] h-[240px] w-[240px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <aside className="hidden w-[280px] shrink-0 border-r border-white/10 bg-black/30 backdrop-blur-2xl lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <Link href="/" className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20" />
              <div>
                <p className="text-lg font-extrabold tracking-[0.18em] text-white">
                  SPACE
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  dashboard
                </p>
              </div>
            </Link>
          </div>

          <div className="flex-1 px-4 py-6">
            <div className="mb-4 px-3 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Panel
            </div>

            <nav className="space-y-2">
              {items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      active
                        ? "flex items-center gap-3 rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-white shadow-lg shadow-violet-500/10"
                        : "flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-zinc-400 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-white/10 p-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:hidden">
                  <LayoutDashboard size={18} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-violet-300">
                    Space
                  </p>
                  <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    Dashboard
                  </h1>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <Link
                  href="/perfil"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  Mi perfil
                </Link>
                <Link
                  href="/tienda"
                  className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]"
                >
                  Ver tienda
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}