"use client"; // Agregar esta directiva para indicar que este archivo es un componente del lado del cliente

import { createContext, useContext, useState } from "react"; // Aquí usamos las APIs del cliente
import { Product } from "@/types";

// Crear el contexto para el carrito
const CartContext = createContext<any>(null);

// Proveedor para el carrito
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al carrito
export const useCart = () => useContext(CartContext);