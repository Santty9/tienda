import { Product, UserProfile } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Zapatillas Running Pro",
    description: "Ligeras, cómodas y perfectas para entrenamiento diario.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    category: "Running",
    featured: true,
  },
  {
    id: 2,
    name: "Balón de Fútbol Elite",
    description: "Balón resistente para entrenamiento y partidos.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    category: "Fútbol",
    featured: true,
  },
  {
    id: 3,
    name: "Guantes Gym Grip",
    description: "Mejor agarre y protección para pesas y cross training.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    category: "Gym",
  },
  {
    id: 4,
    name: "Mochila Deportiva Flex",
    description: "Espaciosa, moderna y resistente al uso diario.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    category: "Accesorios",
  },
];

export const mockUser: UserProfile = {
  id: 1,
  name: "Bryan Knox",
  username: "@sportfan",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  bio: "Amante del deporte, streamer ocasional y fan del running. Aquí comparto mis productos favoritos.",
  socialLinks: [
    { platform: "twitch", url: "https://twitch.tv/tu_canal" },
    { platform: "youtube", url: "https://youtube.com/@tu_canal" },
    { platform: "tiktok", url: "https://tiktok.com/@tu_canal" },
    { platform: "web", url: "https://tuweb.com" },
  ],
};