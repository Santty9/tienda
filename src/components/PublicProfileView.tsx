"use client";

import { useEffect, useRef, useState } from "react";
import {
  Crown,
  Sparkles,
  Eye,
  CheckCircle2,
  Shield,
  Code2,
  Gem,
  Gift,
  Volume2,
  VolumeX,
  Star,
  Trophy,
} from "lucide-react";
import ProfileMusicPlayer from "@/components/ProfileMusicPlayer";
import { getVisibleSocials } from "@/lib/profile-socials";

type PublicProfileUser = {
  id?: string;
  name: string;
  username: string;
  email?: string | null;
  bio?: string | null;
  image?: string | null;

  website?: string | null;
  twitch?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
  discord?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  github?: string | null;
  kick?: string | null;
  spotify?: string | null;
  roblox?: string | null;
  valorantTracker?: string | null;

  backgroundUrl?: string | null;
  backgroundType?: string | null;
  accentColor?: string | null;

  profileSongUrl?: string | null;
  profileSongTitle?: string | null;
  profileSongCover?: string | null;

  profileOpacity?: number | null;
  profileBlur?: number | null;
  backgroundDim?: number | null;
  cardRadius?: number | null;
  glowStrength?: number | null;

  showSocialHeaders?: boolean | null;
  autoplayMusic?: boolean | null;
  showMusicControls?: boolean | null;
  showEmail?: boolean | null;

  isOwner?: boolean | null;
  isBooster?: boolean | null;
  isVerified?: boolean | null;
  isOg?: boolean | null;
  isDev?: boolean | null;
  isStaff?: boolean | null;
  isGifter?: boolean | null;
  is10k?: boolean | null;

  customBadgeText?: string | null;
  customBadgeColor?: string | null;
  customBadgeTextColor?: string | null;

  profileViews?: number | null;
};

type BadgeProps = {
  icon: React.ReactNode;
  label: string;
  bg: string;
  border: string;
  color: string;
};

function GunsBadge({ icon, label, bg, border, color }: BadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
      style={{
        background: bg,
        borderColor: border,
        color,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default function PublicProfileView({
  user,
}: {
  user: PublicProfileUser;
}) {
  const accentColor = user.accentColor || "#a855f7";
  const socials = getVisibleSocials(user);
  const hasProfileSong = Boolean(user.profileSongUrl);

  const [entered, setEntered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [muted, setMuted] = useState(hasProfileSong ? true : false);
  const [volume, setVolume] = useState(hasProfileSong ? 0 : 1);
  const [showVolumePanel, setShowVolumePanel] = useState(false);
  const [views, setViews] = useState<number>(user.profileViews ?? 0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  async function handleEnter() {
    setEntered(true);

    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0;

      if (hasProfileSong) {
        video.muted = true;
        video.volume = 0;
      } else {
        video.muted = muted;
        video.volume = muted ? 0 : volume;
      }

      await video.play();
    } catch {
      try {
        video.muted = true;
        video.volume = 0;
        await video.play();
      } catch {}
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!entered) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch {}
    }
  }, [entered]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasProfileSong) return;

    video.muted = muted;
    video.volume = muted ? 0 : volume;
  }, [muted, volume, hasProfileSong]);

  useEffect(() => {
    const username = user.username?.replace(/^@+/, "");
    if (!username) return;

    const storageKey = `profile-viewed-${username}`;
    const lastViewed = localStorage.getItem(storageKey);
    const now = Date.now();
    const cooldownMs = 1000 * 60 * 60 * 6;

    if (lastViewed && now - Number(lastViewed) < cooldownMs) {
      return;
    }

    fetch("/api/profile/view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && typeof data.views === "number") {
          setViews(data.views);
          localStorage.setItem(storageKey, String(now));
        }
      })
      .catch(() => {});
  }, [user.username]);

  const badges = [
    user.isOwner ? (
      <GunsBadge
        key="owner"
        icon={<Crown size={11} />}
        label="owner"
        bg="rgba(255, 206, 84, 0.14)"
        border="rgba(255, 206, 84, 0.28)"
        color="#ffe39a"
      />
    ) : null,
    user.isVerified ? (
      <GunsBadge
        key="verified"
        icon={<CheckCircle2 size={11} />}
        label="verified"
        bg="rgba(75, 163, 255, 0.14)"
        border="rgba(75, 163, 255, 0.28)"
        color="#b9ddff"
      />
    ) : null,
    user.isBooster ? (
      <GunsBadge
        key="booster"
        icon={<Sparkles size={11} />}
        label="booster"
        bg="rgba(203, 92, 255, 0.14)"
        border="rgba(203, 92, 255, 0.28)"
        color="#efc2ff"
      />
    ) : null,
    user.isOg ? (
      <GunsBadge
        key="og"
        icon={<Gem size={11} />}
        label="og"
        bg="rgba(255, 120, 120, 0.14)"
        border="rgba(255, 120, 120, 0.28)"
        color="#ffc1c1"
      />
    ) : null,
    user.isDev ? (
      <GunsBadge
        key="dev"
        icon={<Code2 size={11} />}
        label="dev"
        bg="rgba(97, 255, 169, 0.12)"
        border="rgba(97, 255, 169, 0.24)"
        color="#b8ffd6"
      />
    ) : null,
    user.isStaff ? (
      <GunsBadge
        key="staff"
        icon={<Shield size={11} />}
        label="staff"
        bg="rgba(255,255,255,0.10)"
        border="rgba(255,255,255,0.18)"
        color="#f4f4f5"
      />
    ) : null,
    user.isGifter ? (
      <GunsBadge
        key="gifter"
        icon={<Gift size={11} />}
        label="gifter"
        bg="rgba(255, 119, 204, 0.14)"
        border="rgba(255, 119, 204, 0.28)"
        color="#ffc4e8"
      />
    ) : null,
    user.is10k ? (
      <GunsBadge
        key="10k"
        icon={<Trophy size={11} />}
        label="10k user"
        bg="rgba(255, 170, 61, 0.14)"
        border="rgba(255, 170, 61, 0.28)"
        color="#ffd7a6"
      />
    ) : null,
    user.customBadgeText ? (
      <GunsBadge
        key="custom"
        icon={<Star size={11} />}
        label={user.customBadgeText}
        bg={user.customBadgeColor || "rgba(255,255,255,0.10)"}
        border={user.customBadgeColor || "rgba(255,255,255,0.18)"}
        color={user.customBadgeTextColor || "#ffffff"}
      />
    ) : null,
  ].filter(Boolean);

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {user.backgroundType === "video" && user.backgroundUrl ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={user.backgroundUrl}
            loop
            playsInline
            preload="auto"
            muted
            onCanPlay={() => setVideoReady(true)}
          />
        ) : user.backgroundUrl ? (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${user.backgroundUrl})` }}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_30%)]" />
        )}

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(0,0,0,${(user.backgroundDim ?? 55) / 100})`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_26%)]" />
      </div>

      {entered && !hasProfileSong && user.backgroundType === "video" ? (
        <div className="absolute left-4 top-24 z-40">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowVolumePanel((prev) => !prev)}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-white shadow-2xl backdrop-blur-xl transition hover:bg-black/45"
            >
              {muted || volume <= 0 ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>

            {showVolumePanel ? (
              <div className="absolute left-0 top-16 w-44 rounded-2xl border border-white/10 bg-black/55 p-3 shadow-2xl backdrop-blur-2xl">
                <div className="mb-2 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                  Volume
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMuted((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  >
                    {muted || volume <= 0 ? (
                      <VolumeX size={16} />
                    ) : (
                      <Volume2 size={16} />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={muted ? 0 : volume}
                    onChange={(e) => {
                      const nextVolume = Number(e.target.value);
                      setVolume(nextVolume);
                      setMuted(nextVolume <= 0);
                    }}
                    className="w-full"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {!entered ? (
        <button
          type="button"
          onClick={handleEnter}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/45 backdrop-blur-[3px] transition hover:bg-black/40"
        >
          <div className="flex flex-col items-center px-6 text-center">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.34em] text-white/70">
              Gamer Animal
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-4xl">
              click to enter
            </h2>

            <p className="mt-3 max-w-md text-sm text-white/60">
              {user.backgroundType === "video"
                ? hasProfileSong
                  ? "Haz click para entrar al perfil."
                  : "Haz click para entrar y reproducir el video con sonido."
                : "Haz click para entrar al perfil."}
            </p>

            <div
              className="mt-5 rounded-full border px-3 py-1.5 text-[11px] font-medium text-white/85"
              style={{
                borderColor: `${accentColor}55`,
                background: `${accentColor}14`,
                boxShadow: `0 0 24px ${accentColor}18`,
              }}
            >
              {user.backgroundType === "video"
                ? videoReady
                  ? "ready"
                  : "loading..."
                : "ready"}
            </div>
          </div>
        </button>
      ) : null}

      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-24 pb-4">
        <div
          className="w-full max-w-[350px] border border-white/10 p-5 shadow-2xl shadow-black/40"
          style={{
            borderRadius: `${user.cardRadius ?? 32}px`,
            backgroundColor: `rgba(10,10,14,${
              ((user.profileOpacity ?? 18) + 12) / 100
            })`,
            backdropFilter: `blur(${user.profileBlur ?? 18}px)`,
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  backgroundColor: accentColor,
                  opacity: (user.glowStrength ?? 35) / 100,
                }}
              />
              <div
                className="relative rounded-full p-[3px]"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, #ffffff20)`,
                }}
              >
                <div className="h-[88px] w-[88px] overflow-hidden rounded-full bg-[#0b0d12]">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                      {user.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <h1 className="mt-4 text-[26px] font-extrabold tracking-tight">
              {user.name}
            </h1>

            <p
              className="mt-1 text-sm font-medium"
              style={{ color: accentColor }}
            >
              @{user.username}
            </p>

            {badges.length > 0 ? (
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {badges}
              </div>
            ) : null}

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
              <Eye size={13} />
              {views.toLocaleString()} views
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-300">
              {user.bio || "Este usuario todavía no agregó una biografía."}
            </p>
          </div>

          {user.showSocialHeaders && socials.length > 0 ? (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border transition hover:-translate-y-0.5"
                    style={{
                      background: social.bg,
                      color: social.color,
                      borderColor: "rgba(255,255,255,0.10)",
                      boxShadow: `0 0 0 1px ${accentColor}10 inset`,
                    }}
                  >
                    <Icon width={14} height={14} />
                  </a>
                );
              })}
            </div>
          ) : null}

          {user.profileSongTitle ? (
            <div className="mt-5">
              <ProfileMusicPlayer
                songUrl={user.profileSongUrl ?? ""}
                title={user.profileSongTitle ?? ""}
                coverUrl={user.profileSongCover ?? ""}
                autoPlay={entered && (user.autoplayMusic ?? false)}
                showControls={user.showMusicControls ?? true}
                accentColor={accentColor}
              />
            </div>
          ) : null}

          {user.showEmail && user.email ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-zinc-300">
              {user.email}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}