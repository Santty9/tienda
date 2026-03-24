import Link from "next/link";

const features = [
  {
    title: "Perfil visual premium",
    text: "Crea un perfil público con avatar, fondo, badges, música, video y una estética mucho más fuerte.",
  },
  {
    title: "Gaming + identidad",
    text: "Conecta tus redes, tu presencia gamer y tu estilo en una sola página moderna, compartible y memorable.",
  },
  {
    title: "Experiencia estilo viral",
    text: "Inspirado en perfiles visuales de alto impacto, adaptado a Gamer Animal con diseño oscuro, glassmorphism y más control.",
  },
];

const stats = [
  {
    value: "∞",
    label: "Personalización visual",
  },
  {
    value: "24/7",
    label: "Perfil público compartible",
  },
  {
    value: "PRO",
    label: "Diseño premium gamer",
  },
];

const socials = ["Twitch", "YouTube", "TikTok", "Discord", "Roblox", "Tracker"];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(236,72,153,0.10),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

      <section className="relative z-10 container-main py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-violet-300">
              Gamer profile + social identity
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-6xl xl:text-7xl">
              Tu perfil gamer,
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                más visual,
              </span>
              <br />
              más premium y más memorable.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Construye un perfil público con video, música, badges, redes,
              volumen, fondo personalizado y una estética oscura inspirada en
              los perfiles más virales de internet.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/perfil"
                className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]"
              >
                Crear mi perfil
              </Link>

              <Link
                href="/register"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Crear cuenta
              </Link>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-violet-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="rounded-[30px] border border-white/10 bg-black/45 p-4">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090b10]">
                  <div className="relative min-h-[560px]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-35" />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_24%)]" />

                    <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 text-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-3xl" />
                        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[3px]">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0d12] text-2xl font-bold">
                            GA
                          </div>
                        </div>
                      </div>

                      <h2 className="mt-5 text-3xl font-extrabold">
                        Gamer Animal
                      </h2>

                      <p className="mt-1 text-sm font-medium text-violet-300">
                        @gameranimal
                      </p>

                      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                        <div className="rounded-full border border-yellow-300/20 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold text-yellow-200">
                          OWNER
                        </div>
                        <div className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold text-sky-200">
                          VERIFIED
                        </div>
                        <div className="rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1 text-[11px] font-semibold text-fuchsia-200">
                          BOOSTER
                        </div>
                      </div>

                      <div className="mt-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                        12,483 views
                      </div>

                      <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-300">
                        Gaming con propósito. Crea tu estilo, comparte tu mundo,
                        conecta tus redes y haz que tu perfil destaque de verdad.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                        {socials.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-zinc-200"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 w-full max-w-sm rounded-[26px] border border-white/10 bg-white/8 p-4 backdrop-blur-2xl">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/10" />
                          <div className="min-w-0 flex-1 text-left">
                            <p className="truncate text-sm font-semibold text-white">
                              Cuando te conocí
                            </p>
                            <p className="truncate text-xs text-white/60">
                              Unknown artist
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 rounded-full border border-white/10 bg-white px-4 py-3 text-sm text-black">
                          Reproductor activo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-zinc-400">
                  <span>Perfil público interactivo</span>
                  <span>Video + badges + views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container-main py-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
            Características
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Una presencia mucho más fuerte
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 container-main py-8 pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">
              Para creadores
            </p>
            <h3 className="mt-4 text-3xl font-bold">
              Un perfil que sí transmite presencia
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Usa fondos mp4, volumen para video, links gamer, badges
              personalizadas y una estética visual mucho más fuerte que una bio
              normal.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">
              Para comunidad
            </p>
            <h3 className="mt-4 text-3xl font-bold">
              Comparte tu identidad en segundos
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Tu username se convierte en una landing visual pública, lista para
              compartir con amigos, comunidad, Discord, TikTok o cualquier red.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 container-main py-20">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/10 p-8 backdrop-blur-2xl md:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">
            Empieza ahora
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight">
            Dale a tu comunidad un perfil que realmente se vea premium.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
            Crea tu cuenta, personaliza tu perfil y convierte tu presencia gamer
            en algo mucho más visual, más moderno y más compartible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/perfil"
              className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:opacity-90"
            >
              Ir a mi perfil
            </Link>

            <Link
              href="/register"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}