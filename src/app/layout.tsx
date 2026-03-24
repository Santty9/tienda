"use client";

import "./globals.css";
import { CartProvider } from '@/lib/cartContext';  // Importa el CartProvider
import Navbar from '@/components/Navbar';           // Navbar de la app
import Providers from '@/components/Providers';    // Proveedores de la app (si tienes otros)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#05060a] text-white antialiased">
        <CartProvider> {/* Aquí agregamos el CartProvider */}
          <div className="relative min-h-screen">
            <Navbar />  {/* Barra de navegación */}
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}