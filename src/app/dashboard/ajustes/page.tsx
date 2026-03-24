export default function DashboardAjustesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.22em] text-violet-300">
          Configuración
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Ajustes de la cuenta
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          Aquí luego conectaremos seguridad, preferencias del perfil, visibilidad
          de tienda, personalización avanzada y más.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-semibold text-white">Seguridad</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Cambio de contraseña, sesiones y protección de cuenta.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-semibold text-white">Preferencias</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Opciones de perfil, diseño, visibilidad y experiencia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}