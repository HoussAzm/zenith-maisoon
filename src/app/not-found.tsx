import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-6xl text-clay-500">404</span>
      <h1 className="mt-4 font-display text-2xl text-ink-900">Page introuvable</h1>
      <p className="mt-3 text-sm text-ink-600">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink-950 px-7 py-3 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
