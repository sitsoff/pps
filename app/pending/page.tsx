import Link from "next/link";

export default function PendingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 pt-28 pb-20">
      <div className="text-center max-w-md">
        <span className="text-red-600 text-sm font-bold uppercase tracking-widest">Coming Soon</span>
        <h1 className="text-4xl font-bold text-black mt-4 mb-4">Page en cours de développement</h1>
        <p className="text-zinc-500 text-base leading-relaxed mb-8">
          Cette page sera bientôt disponible. Revenez nous voir prochainement.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-8 py-3 text-sm rounded-sm"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
