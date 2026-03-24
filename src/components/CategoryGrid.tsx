import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="container-main py-24 lg:py-32 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-violet-400">
            Space Store + Comunidad Animalista
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Gaming con propósito.
            <br /> Juega, comparte y apoya a los animales.
          </h1>

          <p className="mt-5 text-lg text-zinc-400 max-w-xl">
            Compra accesorios gamer, conecta tus redes como Twitch o YouTube y
            apoya causas animalistas con cada compra. Tu perfil, tu comunidad, tu propósito.
          </p>

          <div className="mt-8 flex gap-6">
            <Link
              href="/tienda"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 text-base font-semibold text-white rounded-xl shadow-lg transition hover:scale-105"
            >
              Ver tienda
            </Link>

            <Link
              href="/perfil"
              className="border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white rounded-xl transition hover:bg-white/10"
            >
              Ver perfil
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="rounded-[28px] border border-white/10 bg-black/50 p-6">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
                  alt="Gamer Animal"
                  className="rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}