import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { verifySessionToken } from "@/lib/session";
import ProfileEditor from "@/components/ProfileEditor";

export default async function PerfilPage() {
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
      <section className="relative min-h-screen overflow-hidden bg-[#08090c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.14),transparent_30%)]" />
        <div className="container-main relative z-10 py-16">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <h1 className="text-3xl font-bold text-white">Perfil no encontrado</h1>
            <p className="mt-3 text-zinc-400">
              No pudimos cargar los datos de tu cuenta.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08090c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_35%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.12),transparent_30%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container-main relative z-10 py-10">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1 text-xs font-medium tracking-wide text-violet-300">
            Mi perfil
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Personaliza tu identidad
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Edita tu nombre, username, biografía, redes, imagen, fondo, música y
            estilo visual de tu perfil público.
          </p>
        </div>

        <ProfileEditor
          user={{
            name: user.name,
            username: user.username ?? "",
            bio: user.bio ?? "",
            twitch: user.twitch ?? "",
            youtube: user.youtube ?? "",
            tiktok: user.tiktok ?? "",
            discord: user.discord ?? "",
            website: user.website ?? "",
            image: user.image ?? "",
            backgroundUrl: user.backgroundUrl ?? "",
            accentColor: user.accentColor ?? "#a855f7",
            profileTheme: user.profileTheme ?? "dark",
            profileSongUrl: user.profileSongUrl ?? "",
            profileSongTitle: user.profileSongTitle ?? "",
            profileSongCover: user.profileSongCover ?? "",
            profileLayout: user.profileLayout ?? "card",
            showEmail: user.showEmail ?? false,
            profileOpacity: user.profileOpacity ?? 18,
            profileBlur: user.profileBlur ?? 18,
            backgroundDim: user.backgroundDim ?? 55,
            cardRadius: user.cardRadius ?? 32,
            glowStrength: user.glowStrength ?? 35,
            statusText: user.statusText ?? "",
            showSocialHeaders: user.showSocialHeaders ?? true,
            autoplayMusic: user.autoplayMusic ?? false,
            showMusicControls: user.showMusicControls ?? true,
          }}
        />
      </div>
    </section>
  );
}