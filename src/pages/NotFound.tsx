import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading text-5xl mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-[var(--color-text-muted)] max-w-md mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
