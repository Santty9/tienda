import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

const categories = [
  "Todos",
  "Teclados",
  "Mouse",
  "Audio",
  "Monitores",
  "Accesorios",
  "Setup",
];

export default function TiendaPage() {
  const featuredProducts = products.filter((product) => product.featured);
  const allProducts = products;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] pt-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_26%),linear-gradient(180deg,#08080d_0%,#05060a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.08]" />
      </div>

      <section className="container-main relative z-10 py-16 lg:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-violet-300">
            Space Store
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">
            Una tienda gamer con estética premium.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Space mezcla el estilo visual de un perfil social fuerte con una
            tienda tipo creator/shop, donde más adelante cada usuario podrá
            vender sus propios productos.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="container-main relative z-10 pb-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
            Destacados
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Productos top de Space
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container-main relative z-10 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">
            Marketplace
          </p>
          <h3 className="mt-4 text-3xl font-bold">
            Próximamente: vende desde tu propio perfil
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
            La idea de Space es que cada usuario pueda tener su perfil estilo
            guns.lol y también montar su propia mini tienda para vender
            periféricos, artículos gamer, setup gear, ropa o cualquier producto
            que quiera mostrar.
          </p>
        </div>
      </section>

      <section className="container-main relative z-10 pb-20">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
            Catálogo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Todo Space
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProducts.map((product) => (
            <ProductCard key={`all-${product.id}`} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}