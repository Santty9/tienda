import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { verifySessionToken } from "@/lib/session";

export default async function DashboardPerfilPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  if (!token) {
    redirect("/login");
  }

  let payload: Awaited<ReturnType<typeof verifySessionToken>>;
  try {
    payload = await verifySessionToken(token);
  } catch {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    return (
      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <h1 className="text-3xl font-bold text-white">Perfil no encontrado</h1>
        <p className="mt-3 text-zinc-400">
          No pudimos cargar los datos de tu cuenta.
        </p>
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.22em] text-violet-300">
          Panel de perfil
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Resumen de tu cuenta
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          Desde aquí podrás controlar los datos principales de tu cuenta y luego
          conectar esto con edición avanzada, analytics y marketplace personal.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Nombre
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{user.name}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Username
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              @{user.username}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Views
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {user.profileViews.toLocaleString()}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <h3 className="text-2xl font-bold text-white">Biografía</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {user.bio || "Todavía no agregaste una biografía a tu perfil."}
        </p>
      </section>
    </div>
  );
}