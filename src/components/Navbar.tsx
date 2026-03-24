"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isPublicProfilePath(pathname: string) {
  if (!pathname) return false;

  const blocked = [
    "/",
    "/login",
    "/register",
    "/perfil",
    "/tienda",
    "/dashboard",
    "/logout",
  ];

  if (blocked.includes(pathname)) return false;
  if (pathname.startsWith("/api")) return false;
  if (pathname.startsWith("/dashboard")) return false;

  const segments = pathname.split("/").filter(Boolean);
  return segments.length === 1;
}

export default function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  const isPublicProfile = isPublicProfilePath(pathname);

  return (
    <header
      className={
        isPublicProfile
          ? "fixed inset-x-0 top-0 z-50 bg-transparent"
          : "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
      }
    >
      <div className="container-main flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
          <p className="text-lg font-extrabold tracking-[0.18em] text-white">
            SPACE
          </p>
        </Link>

        {!isPublicProfile ? (
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Inicio
            </Link>
            <Link
              href="/tienda"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Tienda
            </Link>
            <Link
              href="/perfil"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Perfil
            </Link>
            <Link
              href="/dashboard/perfil"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              className="rounded-2xl border border-violet-500/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Acceder
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}