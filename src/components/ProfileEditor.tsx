"use client";

import {
  useMemo,
  useRef,
  useState,
  startTransition,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import ProfileMusicPlayer from "@/components/ProfileMusicPlayer";
import { getVisibleSocials } from "@/lib/profile-socials";

type ProfileEditorProps = {
  user: {
    name: string;
    username: string;
    bio: string;
    twitch: string;
    youtube: string;
    tiktok: string;
    discord: string;
    website: string;
    image?: string;
    backgroundUrl?: string;
    backgroundType?: string;
    accentColor?: string;
    profileTheme?: string;
    profileSongUrl?: string;
    profileSongTitle?: string;
    profileSongCover?: string;
    profileLayout?: string;
    showEmail?: boolean;
    profileOpacity?: number;
    profileBlur?: number;
    backgroundDim?: number;
    cardRadius?: number;
    glowStrength?: number;
    showSocialHeaders?: boolean;
    autoplayMusic?: boolean;
    showMusicControls?: boolean;
    instagram?: string;
    twitter?: string;
    github?: string;
    kick?: string;
    spotify?: string;
    roblox?: string;
    valorantTracker?: string;
  };
};

type EditorForm = {
  name: string;
  username: string;
  bio: string;
  twitch: string;
  youtube: string;
  tiktok: string;
  discord: string;
  website: string;
  image: string;
  backgroundUrl: string;
  backgroundType: string;
  accentColor: string;
  profileTheme: string;
  profileSongUrl: string;
  profileSongTitle: string;
  profileSongCover: string;
  profileLayout: string;
  showEmail: boolean;
  profileOpacity: number;
  profileBlur: number;
  backgroundDim: number;
  cardRadius: number;
  glowStrength: number;
  showSocialHeaders: boolean;
  autoplayMusic: boolean;
  showMusicControls: boolean;
  instagram: string;
  twitter: string;
  github: string;
  kick: string;
  spotify: string;
  roblox: string;
  valorantTracker: string;
};

function readFileAsBase64(file: File, callback: (value: string) => void) {
  const reader = new FileReader();
  reader.onloadend = () => callback(String(reader.result));
  reader.readAsDataURL(file);
}

async function compressImageFile(
  file: File,
  maxSize = 1200,
  quality = 0.82
) {
  const originalBase64 = await new Promise<string>((resolve) => {
    readFileAsBase64(file, resolve);
  });

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = originalBase64;
  });

  const canvas = document.createElement("canvas");
  let { width, height } = img;

  if (width > maxSize || height > maxSize) {
    if (width > height) {
      height = Math.round((height * maxSize) / width);
      width = maxSize;
    } else {
      width = Math.round((width * maxSize) / height);
      height = maxSize;
    }
  }

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return originalBase64;

  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL("image/jpeg", quality);
}

function StyledUpload({
  label,
  accept,
  onChange,
  id,
}: {
  label: string;
  accept: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-200">
        {label}
      </label>
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
      >
        Subir archivo
      </label>
      <input
        id={id}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
}

function createInitialForm(user: ProfileEditorProps["user"]): EditorForm {
  return {
    name: user.name ?? "",
    username: user.username ?? "",
    bio: user.bio ?? "",
    twitch: user.twitch ?? "",
    youtube: user.youtube ?? "",
    tiktok: user.tiktok ?? "",
    discord: user.discord ?? "",
    website: user.website ?? "",
    image: user.image ?? "",
    backgroundUrl: user.backgroundUrl ?? "",
    backgroundType: user.backgroundType ?? "image",
    accentColor: user.accentColor ?? "#a855f7",
    profileTheme: user.profileTheme ?? "dark",
    profileSongUrl: user.profileSongUrl ?? "",
    profileSongTitle: user.profileSongTitle ?? "",
    profileSongCover: user.profileSongCover ?? "",
    profileLayout: user.profileLayout ?? "card",
    showEmail: user.showEmail ?? false,
    profileOpacity: user.profileOpacity ?? 18,
    profileBlur: user.profileBlur ?? 18,
    backgroundDim: user.backgroundDim ?? 55,
    cardRadius: user.cardRadius ?? 32,
    glowStrength: user.glowStrength ?? 35,
    showSocialHeaders: user.showSocialHeaders ?? true,
    autoplayMusic: user.autoplayMusic ?? false,
    showMusicControls: user.showMusicControls ?? true,
    instagram: user.instagram ?? "",
    twitter: user.twitter ?? "",
    github: user.github ?? "",
    kick: user.kick ?? "",
    spotify: user.spotify ?? "",
    roblox: user.roblox ?? "",
    valorantTracker: user.valorantTracker ?? "",
  };
}

function buildChangedPayload(
  initial: EditorForm,
  current: EditorForm
): Partial<EditorForm> {
  const changed: Partial<EditorForm> = {};

  (Object.keys(current) as (keyof EditorForm)[]).forEach((key) => {
    if (current[key] !== initial[key]) {
      changed[key] = current[key];
    }
  });

  return changed;
}

export default function ProfileEditor({ user }: ProfileEditorProps) {
  const router = useRouter();
  const initialFormRef = useRef<EditorForm>(createInitialForm(user));

  const [form, setForm] = useState<EditorForm>(initialFormRef.current);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;

    if (type === "range") {
      setForm((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setMessage("");

    try {
      const compressed = await compressImageFile(file, 900, 0.82);
      setForm((prev) => ({
        ...prev,
        image: compressed,
      }));
    } catch {
      setError("No se pudo procesar la imagen de perfil.");
    }
  }

  function handleBackgroundUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setMessage("");

    if (file.type.startsWith("video/") && file.size > 18 * 1024 * 1024) {
      setError("El video es muy pesado. Usa uno menor a 18MB para que cargue más rápido.");
      return;
    }

    if (file.type.startsWith("image/")) {
      compressImageFile(file, 1600, 0.82)
        .then((value) => {
          setForm((prev) => ({
            ...prev,
            backgroundUrl: value,
            backgroundType: "image",
          }));
        })
        .catch(() => {
          setError("No se pudo procesar la imagen de fondo.");
        });
      return;
    }

    readFileAsBase64(file, (value) => {
      setForm((prev) => ({
        ...prev,
        backgroundUrl: value,
        backgroundType: file.type.startsWith("video/") ? "video" : "image",
      }));
    });
  }

  function handleAudioUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setMessage("");

    if (file.size > 10 * 1024 * 1024) {
      setError("El audio es muy pesado. Usa uno menor a 10MB para que guarde más rápido.");
      return;
    }

    readFileAsBase64(file, (value) => {
      setForm((prev) => ({
        ...prev,
        profileSongUrl: value,
        profileSongTitle:
          prev.profileSongTitle || file.name.replace(/\.[^/.]+$/, ""),
      }));
    });
  }

  async function handleSongCoverUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setMessage("");

    try {
      const compressed = await compressImageFile(file, 700, 0.82);
      setForm((prev) => ({
        ...prev,
        profileSongCover: compressed,
      }));
    } catch {
      setError("No se pudo procesar el cover de la canción.");
    }
  }

  function removeProfileMusic() {
    setForm((prev) => ({
      ...prev,
      profileSongUrl: "",
      profileSongTitle: "",
      profileSongCover: "",
      autoplayMusic: false,
    }));
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const changedPayload = buildChangedPayload(initialFormRef.current, form);

      if (Object.keys(changedPayload).length === 0) {
        setMessage("No hay cambios para guardar.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
        body: JSON.stringify(changedPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "No se pudo actualizar el perfil.");
        setLoading(false);
        return;
      }

      initialFormRef.current = { ...form };
      setMessage("Perfil actualizado correctamente.");

      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("Ocurrió un error al guardar.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePasswordSubmit(e: FormEvent) {
    e.preventDefault();
    setPasswordError("");
    setPasswordMessage("");

    try {
      const res = await fetch("/api/profile/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passwordForm),
      });

      const data = await res.json();

      if (!res.ok) {
        setPasswordError(data.error || "No se pudo cambiar la contraseña.");
        return;
      }

      setPasswordMessage("Contraseña actualizada correctamente.");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch {
      setPasswordError("Ocurrió un error al cambiar la contraseña.");
    }
  }

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  }

  const previewSocials = useMemo(() => getVisibleSocials(form), [form]);
  const hasProfileSong = Boolean(form.profileSongUrl);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
        <form
          onSubmit={handleSave}
          className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
            Edición
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Editar perfil</h2>

          <div className="mt-6 grid gap-5">
            <div className="grid gap-4 md:grid-cols-2">
              <StyledUpload
                id="profile-image-upload"
                label="Foto de perfil"
                accept="image/*"
                onChange={handleImageUpload}
              />

              <StyledUpload
                id="song-cover-upload"
                label="Cover de la canción"
                accept="image/*"
                onChange={handleSongCoverUpload}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <StyledUpload
                id="song-audio-upload"
                label="Canción desde tu PC"
                accept="audio/*"
                onChange={handleAudioUpload}
              />

              <StyledUpload
                id="background-upload"
                label="Fondo (imagen o video)"
                accept="image/*,video/*"
                onChange={handleBackgroundUpload}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  URL del fondo
                </label>
                <input
                  name="backgroundUrl"
                  value={form.backgroundUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Tipo de fondo
                </label>
                <select
                  name="backgroundType"
                  value={form.backgroundType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#11131a] px-4 py-3 text-white outline-none focus:border-violet-500"
                >
                  <option value="image">Imagen</option>
                  <option value="video">Video</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Nombre
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Username
                </label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="tuusuario"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200">
                Biografía
              </label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Website
                </label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Twitch
                </label>
                <input
                  name="twitch"
                  value={form.twitch}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  YouTube
                </label>
                <input
                  name="youtube"
                  value={form.youtube}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  TikTok
                </label>
                <input
                  name="tiktok"
                  value={form.tiktok}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Discord
                </label>
                <input
                  name="discord"
                  value={form.discord}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Instagram
                </label>
                <input
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Twitter / X
                </label>
                <input
                  name="twitter"
                  value={form.twitter}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  GitHub
                </label>
                <input
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Kick
                </label>
                <input
                  name="kick"
                  value={form.kick}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Spotify
                </label>
                <input
                  name="spotify"
                  value={form.spotify}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Roblox profile
                </label>
                <input
                  name="roblox"
                  value={form.roblox}
                  onChange={handleChange}
                  placeholder="https://www.roblox.com/users/..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Valorant tracker
                </label>
                <input
                  name="valorantTracker"
                  value={form.valorantTracker}
                  onChange={handleChange}
                  placeholder="https://tracker.gg/valorant/profile/..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-200">
                  Título de la canción
                </label>
                <input
                  name="profileSongTitle"
                  value={form.profileSongTitle}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div className="md:col-span-3">
                <button
                  type="button"
                  onClick={removeProfileMusic}
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/15"
                >
                  Quitar música del perfil
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Card</p>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Transparencia: {form.profileOpacity}%
                  </label>
                  <input
                    type="range"
                    name="profileOpacity"
                    min="5"
                    max="40"
                    value={form.profileOpacity}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Blur: {form.profileBlur}px
                  </label>
                  <input
                    type="range"
                    name="profileBlur"
                    min="0"
                    max="40"
                    value={form.profileBlur}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Redondeado: {form.cardRadius}px
                  </label>
                  <input
                    type="range"
                    name="cardRadius"
                    min="18"
                    max="48"
                    value={form.cardRadius}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Fondo y glow</p>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Oscurecer fondo: {form.backgroundDim}%
                  </label>
                  <input
                    type="range"
                    name="backgroundDim"
                    min="20"
                    max="85"
                    value={form.backgroundDim}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Glow: {form.glowStrength}%
                  </label>
                  <input
                    type="range"
                    name="glowStrength"
                    min="0"
                    max="80"
                    value={form.glowStrength}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Opciones</p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                <input
                  type="checkbox"
                  name="showEmail"
                  checked={form.showEmail}
                  onChange={handleCheckboxChange}
                />
                Mostrar correo
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                <input
                  type="checkbox"
                  name="autoplayMusic"
                  checked={form.autoplayMusic}
                  onChange={handleCheckboxChange}
                />
                Autoplay música
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                <input
                  type="checkbox"
                  name="showMusicControls"
                  checked={form.showMusicControls}
                  onChange={handleCheckboxChange}
                />
                Mostrar controles
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                <input
                  type="checkbox"
                  name="showSocialHeaders"
                  checked={form.showSocialHeaders}
                  onChange={handleCheckboxChange}
                />
                Mostrar redes
              </label>
            </div>
          </div>

          {message ? (
            <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              {message}
            </div>
          ) : null}

          {error ? (
            <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white disabled:opacity-70"
            >
              {loading ? "Guardando..." : "Guardar cambios"}
            </button>

            <a
              href={`/${form.username.replace(/^@+/, "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ver perfil público
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Cerrar sesión
            </button>
          </div>
        </form>

        <div className="xl:sticky xl:top-24 xl:h-fit">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
              Preview
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">Vista previa</h3>

            <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-black">
              <div className="relative min-h-[640px]">
                {form.backgroundType === "video" && form.backgroundUrl ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={form.backgroundUrl}
                    autoPlay
                    loop
                    playsInline
                    muted={hasProfileSong}
                  />
                ) : form.backgroundUrl ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${form.backgroundUrl})`,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.16),transparent_30%)]" />
                )}

                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: `rgba(0,0,0,${form.backgroundDim / 100})`,
                  }}
                />

                <div className="relative z-10 flex min-h-[640px] items-center justify-center p-5">
                  <div
                    className="w-full max-w-[320px] border border-white/10 p-6 shadow-2xl shadow-black/40"
                    style={{
                      borderRadius: `${form.cardRadius}px`,
                      backgroundColor: `rgba(10,10,14,${
                        form.profileOpacity / 100 + 0.15
                      })`,
                      backdropFilter: `blur(${form.profileBlur}px)`,
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="relative rounded-full p-[3px]"
                        style={{
                          background: `linear-gradient(135deg, ${form.accentColor}, #ffffff20)`,
                        }}
                      >
                        <div className="h-24 w-24 overflow-hidden rounded-full bg-[#0b0d12]">
                          {form.image ? (
                            <img
                              src={form.image}
                              alt={form.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                              {form.name.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>

                      <h2 className="mt-5 text-2xl font-bold text-white">
                        {form.name || "Tu nombre"}
                      </h2>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: form.accentColor }}
                      >
                        @{form.username.replace(/^@+/, "") || "usuario"}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-zinc-300">
                        {form.bio || "Tu biografía aparecerá aquí."}
                      </p>
                    </div>

                    {form.showSocialHeaders && previewSocials.length > 0 && (
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                        {previewSocials.map((social) => {
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
                              }}
                            >
                              <Icon width={15} height={15} />
                            </a>
                          );
                        })}
                      </div>
                    )}

                    {form.profileSongTitle ? (
                      <div className="mt-6">
                        <ProfileMusicPlayer
                          songUrl={form.profileSongUrl}
                          title={form.profileSongTitle}
                          coverUrl={form.profileSongCover}
                          autoPlay={form.autoplayMusic}
                          compact
                          showControls={form.showMusicControls}
                          accentColor={form.accentColor}
                        />
                      </div>
                    ) : null}

                    {form.showEmail ? (
                      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-zinc-300">
                        Tu correo será visible públicamente
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handlePasswordSubmit}
        className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
          Seguridad
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">
          Cambiar contraseña
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Contraseña actual
            </label>
            <input
              type="password"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Nueva contraseña
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Confirmar nueva contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {passwordMessage ? (
          <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            {passwordMessage}
          </div>
        ) : null}

        {passwordError ? (
          <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {passwordError}
          </div>
        ) : null}

        <div className="mt-6">
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white"
          >
            Actualizar contraseña
          </button>
        </div>
      </form>
    </div>
  );
}