import { Product, UserProfile } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Teclado mecánico RGB Space K1",
    description:
      "Teclado gamer mecánico con switches rápidos, iluminación RGB y acabado premium.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
    category: "Teclados",
    featured: true,
  },
  {
    id: 2,
    name: "Mouse ultralight Phantom X",
    description:
      "Mouse gaming liviano con sensor preciso para shooters, tracking rápido y grip cómodo.",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
    category: "Mouse",
    featured: true,
  },
  {
    id: 3,
    name: "Auriculares Nova Sound Pro",
    description:
      "Audio envolvente para gaming, música y streaming con diseño premium y micrófono nítido.",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    category: "Audio",
    featured: true,
  },
  {
    id: 4,
    name: 'Monitor 27" Space Vision',
    description:
      "Monitor gamer de alta fluidez para setups competitivos y estética visual moderna.",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    category: "Monitores",
  },
  {
    id: 5,
    name: "Mousepad XXL Nebula",
    description:
      "Superficie amplia, cómoda y precisa para teclado + mouse, con estética dark premium.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1616628182509-6e9824e5ed98?auto=format&fit=crop&w=1200&q=80",
    category: "Accesorios",
  },
  {
    id: 6,
    name: "Silla gamer Orbit",
    description:
      "Comodidad para sesiones largas, soporte lumbar y presencia visual para tu setup.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
    category: "Setup",
  },
];

export const mockUser: UserProfile = {
  id: 1,
  name: "Bryan Knox",
  username: "@spacecreator",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  bio: "Gamer, creador y fan del diseño visual premium. Comparto setup, links y productos recomendados.",
  socialLinks: [
    { platform: "twitch", url: "https://twitch.tv/tu_canal" },
    { platform: "youtube", url: "https://youtube.com/@tu_canal" },
    { platform: "tiktok", url: "https://tiktok.com/@tu_canal" },
    { platform: "web", url: "https://tuweb.com" },
  ],
};