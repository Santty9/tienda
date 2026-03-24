import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Z" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

function TwitchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3 2 8v11h4v2h3l2-2h3l6-6V3H4Zm14 9-3 3h-3l-2 2v-2H6V5h12v7Zm-7-5h2v4h-2V7Zm4 0h2v4h-2V7Z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 12s0-3.5-.45-5.18a2.9 2.9 0 0 0-2.04-2.05C18.83 4.3 12 4.3 12 4.3s-6.83 0-8.51.47A2.9 2.9 0 0 0 1.45 6.8C1 8.5 1 12 1 12s0 3.5.45 5.18a2.9 2.9 0 0 0 2.04 2.05c1.68.47 8.51.47 8.51.47s6.83 0 8.51-.47a2.9 2.9 0 0 0 2.04-2.05C23 15.5 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 3c.5 2.3 1.8 3.7 4 4v3a7.3 7.3 0 0 1-3.8-1.1v6.1a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .8.1v3.1a2.5 2.5 0 1 0 1.7 2.3V3h2.8Z" />
    </svg>
  );
}

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 5.5A16 16 0 0 0 16.1 4l-.2.4c1.7.4 2.5 1 2.5 1a9.3 9.3 0 0 0-2.8-1 9.8 9.8 0 0 0-3.6 0 9.3 9.3 0 0 0-2.8 1s.8-.6 2.5-1l-.2-.4A16 16 0 0 0 4 5.5C1.5 9.2 1 12.8 1.2 16.3a16 16 0 0 0 4.8 2.4l1.2-1.9c-.7-.2-1.4-.6-2-.9l.5-.4c1.9.9 3.9 1.3 6.3 1.3 2.4 0 4.4-.4 6.3-1.3l.5.4c-.6.3-1.3.7-2 .9l1.2 1.9a16 16 0 0 0 4.8-2.4c.3-4-.5-7.6-3-10.8ZM9.5 13.8c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8c.9 0 1.5.8 1.5 1.8s-.7 1.8-1.5 1.8Zm5 0c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8 1.5.8 1.5 1.8-.7 1.8-1.5 1.8Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H22l-6.77 7.74L23 21h-6.1l-4.78-6.24L6.66 21H3.54l7.24-8.28L1.5 3h6.26l4.32 5.71L18.9 3Zm-1.07 16.2h1.7L6.84 4.7H5.02L17.83 19.2Z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.13-.31-.54-1.55.11-3.24 0 0 1.01-.33 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.57 3.29-1.24 3.29-1.24.66 1.69.25 2.93.12 3.24.77.85 1.23 1.92 1.23 3.24 0 4.63-2.81 5.66-5.49 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function KickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4h6v5h2l4-5h4l-5 6 5 6h-4l-4-5h-2v5H4V4Z" />
    </svg>
  );
}

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5a10.5 10.5 0 1 0 0 21a10.5 10.5 0 0 0 0-21Zm4.82 15.14a.66.66 0 0 1-.91.21c-2.5-1.52-5.64-1.86-9.33-1.03a.66.66 0 1 1-.29-1.28c4.04-.92 7.52-.52 10.3 1.16c.31.19.41.6.23.94Zm1.3-2.9a.82.82 0 0 1-1.12.27c-2.87-1.76-7.24-2.27-10.64-1.24a.82.82 0 1 1-.48-1.58c3.86-1.17 8.66-.6 11.98 1.43c.39.24.5.75.26 1.13Zm.1-3.03C14.8 8.68 9.2 8.49 6.04 9.45a.98.98 0 0 1-.57-1.87c3.63-1.1 9.67-.88 13.77 1.56a.98.98 0 0 1-1.02 1.67Z" />
    </svg>
  );
}

function RobloxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.2 2 20 5.1 16.9 22 3 18.9 6.2 2Zm3.7 5.1-1.4 7.1 5.6 1.3 1.4-7.1-5.6-1.3Z" />
    </svg>
  );
}

function ValorantIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2.5 4h4.2l5.5 9.1L9.7 20H5.8L2.5 4Zm10.6 0H21.5L14.7 20h-3.5l1.9-6.2L13.1 4Z" />
    </svg>
  );
}

export type SocialKey =
  | "website"
  | "twitch"
  | "youtube"
  | "tiktok"
  | "discord"
  | "instagram"
  | "twitter"
  | "github"
  | "kick"
  | "spotify"
  | "roblox"
  | "valorantTracker";

export type SocialItem = {
  key: SocialKey;
  label: string;
  color: string;
  bg: string;
  hover: string;
  icon: IconType;
};

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    key: "website",
    label: "Website",
    color: "#f5f5f5",
    bg: "rgba(255,255,255,0.10)",
    hover: "rgba(255,255,255,0.18)",
    icon: GlobeIcon,
  },
  {
    key: "twitch",
    label: "Twitch",
    color: "#ae7bff",
    bg: "rgba(174,123,255,0.14)",
    hover: "rgba(174,123,255,0.22)",
    icon: TwitchIcon,
  },
  {
    key: "youtube",
    label: "YouTube",
    color: "#ff4d4d",
    bg: "rgba(255,77,77,0.14)",
    hover: "rgba(255,77,77,0.22)",
    icon: YoutubeIcon,
  },
  {
    key: "tiktok",
    label: "TikTok",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.10)",
    hover: "rgba(255,255,255,0.18)",
    icon: TikTokIcon,
  },
  {
    key: "discord",
    label: "Discord",
    color: "#8ea1ff",
    bg: "rgba(88,101,242,0.14)",
    hover: "rgba(88,101,242,0.22)",
    icon: DiscordIcon,
  },
  {
    key: "instagram",
    label: "Instagram",
    color: "#ff4fd8",
    bg: "rgba(255,79,216,0.14)",
    hover: "rgba(255,79,216,0.22)",
    icon: InstagramIcon,
  },
  {
    key: "twitter",
    label: "Twitter / X",
    color: "#5ab8ff",
    bg: "rgba(90,184,255,0.14)",
    hover: "rgba(90,184,255,0.22)",
    icon: TwitterIcon,
  },
  {
    key: "github",
    label: "GitHub",
    color: "#f1f5f9",
    bg: "rgba(241,245,249,0.10)",
    hover: "rgba(241,245,249,0.16)",
    icon: GitHubIcon,
  },
  {
    key: "kick",
    label: "Kick",
    color: "#53fc18",
    bg: "rgba(83,252,24,0.14)",
    hover: "rgba(83,252,24,0.22)",
    icon: KickIcon,
  },
  {
    key: "spotify",
    label: "Spotify",
    color: "#43d854",
    bg: "rgba(67,216,84,0.14)",
    hover: "rgba(67,216,84,0.22)",
    icon: SpotifyIcon,
  },
  {
    key: "roblox",
    label: "Roblox",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.10)",
    hover: "rgba(255,255,255,0.16)",
    icon: RobloxIcon,
  },
  {
    key: "valorantTracker",
    label: "Valorant Tracker",
    color: "#ff6b81",
    bg: "rgba(255,107,129,0.14)",
    hover: "rgba(255,107,129,0.22)",
    icon: ValorantIcon,
  },
];

export function normalizeUrl(url?: string | null) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

export function getVisibleSocials(profile: Record<string, unknown>) {
  return SOCIAL_ITEMS.filter((item) => {
    const value = profile?.[item.key];
    return typeof value === "string" && value.trim().length > 0;
  }).map((item) => ({
    ...item,
    url: normalizeUrl(profile?.[item.key] as string),
  }));
}