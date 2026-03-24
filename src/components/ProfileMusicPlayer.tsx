"use client";

import { Music4 } from "lucide-react";

type ProfileMusicPlayerProps = {
  title?: string | null;
  artist?: string | null;

  songUrl?: string | null;
  coverUrl?: string | null;

  src?: string | null;
  cover?: string | null;

  autoPlay?: boolean;
  compact?: boolean;
  showControls?: boolean;
  accentColor?: string | null;
};

export default function ProfileMusicPlayer({
  title,
  artist,
  songUrl,
  coverUrl,
  src,
  cover,
  autoPlay = false,
  compact = false,
  showControls = true,
  accentColor,
}: ProfileMusicPlayerProps) {
  const resolvedSongUrl = songUrl ?? src ?? "";
  const resolvedCover = coverUrl ?? cover ?? "";
  const hasContent = Boolean(title || artist || resolvedSongUrl);

  if (!hasContent) return null;

  return (
    <div
      className={`rounded-[24px] border backdrop-blur-2xl ${
        compact ? "p-3" : "p-4"
      }`}
      style={{
        background: "rgba(255,255,255,0.08)",
        borderColor: "rgba(255,255,255,0.12)",
        boxShadow: `0 16px 40px rgba(0,0,0,0.26), 0 0 30px ${
          accentColor ?? "#8b5cf6"
        }20`,
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 ${
            compact ? "h-14 w-14" : "h-16 w-16"
          }`}
        >
          {resolvedCover ? (
            <img
              src={resolvedCover}
              alt={title || "Song cover"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Music4 className="text-white/70" size={compact ? 18 : 22} />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`truncate font-semibold text-white ${
              compact ? "text-xs" : "text-sm"
            }`}
          >
            {title || "Untitled track"}
          </p>
          <p className={`truncate text-white/65 ${compact ? "text-[11px]" : "text-xs"}`}>
            {artist || "Unknown artist"}
          </p>
        </div>
      </div>

      {resolvedSongUrl ? (
        <div className={compact ? "mt-3" : "mt-4"}>
          <audio
            src={resolvedSongUrl}
            controls={showControls}
            autoPlay={autoPlay}
            className="w-full"
          />
        </div>
      ) : null}
    </div>
  );
}