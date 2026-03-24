"use client";

import { Crown, Sparkles } from "lucide-react";
import ProfileMusicPlayer from "@/components/ProfileMusicPlayer";
import { getVisibleSocials } from "@/lib/profile-socials";

type ProfileCardUser = {
  name: string;
  username: string;
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

  statusText?: string | null;
  showSocialHeaders?: boolean | null;
  autoplayMusic?: boolean | null;
  showMusicControls?: boolean | null;

  isOwner?: boolean | null;
  isBooster?: boolean | null;
};

function Badges({
  isOwner,
  isBooster,
}: {
  isOwner?: boolean | null;
  isBooster?: boolean | null;
}) {
  if (!isOwner && !isBooster) return null;

  return (
    <div className="mt-3 flex items-center justify-center gap-2">
      {isOwner ? (
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold tracking-wide text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,215,64,0.20), rgba(255,175,0,0.10))",
            borderColor: "rgba(255,215,64,0.28)",
            boxShadow:
              "0 0 30px rgba(255, 200, 80, 0.14), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <Crown size={14} className="text-yellow-300" />
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
            OWNER
          </span>
        </div>
      ) : null}

      {isBooster ? (
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold tracking-wide text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(236,72,153,0.10))",
            borderColor: "rgba(192,132,252,0.24)",
            boxShadow:
              "0 0 30px rgba(192,132,252,0.14), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <Sparkles size={14} className="text-fuchsia-300" />
          <span className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-pink-200 bg-clip-text text-transparent">
            BOOSTER
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default function ProfileCard({ user }: { user: ProfileCardUser }) {
  const accentColor = user.accentColor || "#a855f7";
  const socials = getVisibleSocials(user);
  const hasProfileSong = Boolean(user.profileSongUrl);

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black text-white shadow-2xl shadow-black/40">
      <div className="absolute inset-0">
        {user.backgroundType === "video" && user.backgroundUrl ? (
          <video
            className="h-full w-full object-cover"
            src={user.backgroundUrl}
            autoPlay
            loop
            playsInline
            muted={hasProfileSong}
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
      </div>

      <div className="relative z-10 p-8">
        <div
          className="mx-auto w-full max-w-[720px] border border-white/10 p-8 shadow-2xl shadow-black/40"
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
                className="relative h-28 w-28 rounded-full p-[3px]"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, #ffffff20)`,
                }}
              >
                <div className="h-full w-full overflow-hidden rounded-full bg-[#0b0d12]">
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

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight">
              {user.name}
            </h1>

            <p
              className="mt-1 text-sm font-medium"
              style={{ color: accentColor }}
            >
              @{user.username}
            </p>

            <Badges isOwner={user.isOwner} isBooster={user.isBooster} />

            {user.statusText ? (
              <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                {user.statusText}
              </p>
            ) : null}

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-300">
              {user.bio || "Este usuario todavía no agregó una biografía."}
            </p>
          </div>

          {user.showSocialHeaders && socials.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    title={social.label}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border transition hover:-translate-y-0.5"
                    style={{
                      background: social.bg,
                      color: social.color,
                      borderColor: "rgba(255,255,255,0.10)",
                      boxShadow: `0 0 0 1px ${accentColor}10 inset`,
                    }}
                  >
                    <Icon width={15} height={15} />
                  </a>
                );
              })}
            </div>
          ) : null}

          {user.profileSongTitle ? (
            <div className="mt-6">
              <ProfileMusicPlayer
                songUrl={user.profileSongUrl ?? ""}
                title={user.profileSongTitle ?? ""}
                coverUrl={user.profileSongCover ?? ""}
                autoPlay={user.autoplayMusic ?? false}
                showControls={user.showMusicControls ?? true}
                accentColor={accentColor}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}