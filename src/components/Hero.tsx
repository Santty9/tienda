import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="container-main grid items-center gap-10 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-violet-400">
            Space Store + Perfil Social
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Un perfil visual premium.
            <br /> Una tienda gamer con identidad propia.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-zinc-400">
            Space combina una estética tipo guns.lol con una tienda moderna para
            productos gamer, setup gear y artículos que cada creador podrá
            mostrar o vender desde su presencia online.
          </p>

          <div className="mt-8 flex gap-6">
            <Link
              href="/tienda"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Ver tienda
            </Link>

            <Link
              href="/perfil"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Crear perfil
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="rounded-[28px] border border-white/10 bg-black/50 p-6">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80"
                  alt="Space Store"
                  className="w-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}