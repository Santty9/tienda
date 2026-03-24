import { getAllProducts } from "@/lib/product";
import Link from "next/link";

export default async function DashboardProductosPage() {
  const products = await getAllProducts();

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-violet-300">
            Space Store
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Mis productos
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
            Aquí vas a poder administrar todos los artículos que publiques en tu
            tienda personal dentro de Space.
          </p>
        </div>

        <Link
          href="/dashboard/productos/nuevo"
          className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]"
        >
          Nuevo producto
        </Link>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <div className="overflow-hidden rounded-[22px] border border-white/10">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                {product.category}
              </div>

              <h3 className="mt-3 text-lg font-bold text-white">
                {product.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-violet-300">
                  ${product.price}
                </span>

                <Link
                  href={`/dashboard/productos/editar/${product.id}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}