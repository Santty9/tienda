export type SocialLink = {
  platform: "twitch" | "youtube" | "tiktok" | "instagram" | "x" | "web";
  url: string;
};

export type UserProfile = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  socialLinks: SocialLink[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
};