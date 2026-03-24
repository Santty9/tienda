"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "register") {
        if (!name.trim()) {
          setError("Ingresa tu nombre.");
          setLoading(false);
          return;
        }

        if (!email.trim()) {
          setError("Ingresa tu correo.");
          setLoading(false);
          return;
        }

        if (!password.trim()) {
          setError("Ingresa una contraseña.");
          setLoading(false);
          return;
        }

        if (password !== confirmPassword) {
          setError("Las contraseñas no coinciden.");
          setLoading(false);
          return;
        }

        const username = `@${name.toLowerCase().replace(/\s+/g, "")}`;

        const registerRes = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            username,
            email,
            password,
          }),
        });

        const registerData = await registerRes.json();

        if (!registerRes.ok) {
          setError(registerData.error || "No se pudo crear la cuenta.");
          setLoading(false);
          return;
        }

        window.location.href = "/perfil";
        return;
      }

      const loginRes = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        setError(loginData.error || "Correo o contraseña incorrectos.");
        setLoading(false);
        return;
      }

      window.location.href = "/perfil";
    } catch {
      setError("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="h-[calc(100vh-64px)] overflow-hidden">
      <div className="container-main flex h-[calc(100vh-64px)] items-center justify-center py-6">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl lg:grid-cols-2">
          <div className="hidden flex-col justify-between bg-gradient-to-br from-violet-700 via-fuchsia-600 to-cyan-500 p-10 lg:flex">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                Comunidad gamer
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
                Juega, crea tu perfil y conecta tus redes.
              </h1>
              <p className="mt-5 max-w-lg text-base text-white/90">
                Una tienda gaming moderna con identidad visual sólida, perfil de
                usuario y enfoque animalista.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-black/15 p-6">
              <p className="text-sm text-white/80">Acceso</p>
              <p className="mt-3 text-white">Regístrate o inicia sesión.</p>
            </div>
          </div>

          <div className="bg-[#0d1016] p-8 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8 flex rounded-2xl border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setError("");
                  }}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    mode === "login"
                      ? "bg-violet-600 text-white"
                      : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  Iniciar sesión
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setError("");
                  }}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    mode === "register"
                      ? "bg-violet-600 text-white"
                      : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  Registrarse
                </button>
              </div>

              <p className="text-sm uppercase tracking-[0.24em] text-violet-400">
                {mode === "login" ? "Bienvenido" : "Crea tu cuenta"}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                {mode === "login"
                  ? "Accede a tu cuenta"
                  : "Únete a Gamer Animal"}
              </h2>

              <p className="mt-3 text-sm text-zinc-400">
                {mode === "login"
                  ? "Entra a tu perfil para gestionar tu comunidad y tus compras."
                  : "Regístrate para personalizar tu perfil, bio y enlaces sociales."}
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {mode === "register" && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-200">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre o nickname"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-500"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-200">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-200">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-500"
                  />
                </div>

                {mode === "register" && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-200">
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-500"
                    />
                  </div>
                )}

                {error ? (
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 font-semibold text-white transition hover:opacity-95 disabled:opacity-70"
                >
                  {loading
                    ? "Procesando..."
                    : mode === "login"
                    ? "Entrar"
                    : "Crear cuenta"}
                </button>
              </form>

              <div className="mt-6 text-sm text-zinc-400">
                <Link href="/" className="transition hover:text-white">
                  ← Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}