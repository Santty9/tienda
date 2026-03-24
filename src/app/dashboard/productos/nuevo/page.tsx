import { useCart } from '@/lib/cartContext';  // Importamos el hook para acceder al carrito
import { Product } from '@/types';             // Importamos el tipo Product
import { products } from '@/lib/data';         // Aquí puedes obtener los productos de tu base de datos o archivo local

export default function ProductosPage() {
  const { cart, addToCart } = useCart();  // Usamos el hook para obtener el carrito y la función de agregar productos

  const handleAddToCart = (product: Product) => {
    addToCart(product);  // Llamamos a la función para agregar el producto al carrito
  };

  return (
    <div className="space-y-6">
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

              <h3 className="mt-3 text-lg font-bold text-white">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{product.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-violet-300">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}  // Llamar a la función para agregar al carrito
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}