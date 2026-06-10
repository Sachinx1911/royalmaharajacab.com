import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl font-extrabold text-brand">404</span>
      <h1 className="mt-4 text-2xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-brand mt-6 px-6 py-3">
        Back to Home
      </Link>
    </section>
  );
}
