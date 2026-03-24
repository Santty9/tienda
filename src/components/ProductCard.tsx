type ProductCardProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    featured?: boolean;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0d0f14]">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          {product.category}
        </div>

        <h3 className="mt-3 text-lg font-bold text-white">{product.name}</h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-violet-300">
            ${product.price}
          </span>

          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}