import { useCart } from '@/lib/cartContext';  // Importamos el hook para acceder al carrito
import { Product } from '@/types';             // Importamos el tipo Product

export default function CartPage() {
  const { cart, removeFromCart } = useCart();  // Usamos el hook para obtener el carrito y la función de eliminar

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);  // Llamamos a la función para eliminar el producto
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);  // Calculamos el total

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Tu carrito</h1>

      {cart.length === 0 ? (
        <p className="text-zinc-400">Tu carrito está vacío.</p>  // Si el carrito está vacío
      ) : (
        <div className="space-y-4">
          {cart.map((product: Product) => (
            <div key={product.id} className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded-xl mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-zinc-400">${product.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveFromCart(product.id)}  // Eliminar producto del carrito
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white">Total: ${total}</h3>
        <button className="mt-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]">
          Proceder a pagar
        </button>
      </div>
    </div>
  );
}