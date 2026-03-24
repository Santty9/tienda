import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black text-white">
      <div className="container-main py-8 text-center text-sm text-zinc-500">
        <p>© 2026 Space. Todos los derechos reservados.</p>

        <div className="mt-4">
          <Link
            href="/privacy"
            className="mx-3 text-zinc-400 transition hover:text-white"
          >
            Política de privacidad
          </Link>
          |
          <Link
            href="/terms"
            className="mx-3 text-zinc-400 transition hover:text-white"
          >
            Términos de uso
          </Link>
        </div>
      </div>
    </footer>
  );
}