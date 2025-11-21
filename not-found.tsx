import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-gray-400 text-lg max-w-md mb-10">
        The page you’re looking for doesn’t exist — or it moved somewhere else.
      </p>

      <Link
        href="/"
        className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
      >
        Return Home
      </Link>

      <div className="mt-16 opacity-40 select-none pointer-events-none">
        <img
          src="/logo.png"
          alt="Roman DevWorks"
          className="w-20 h-20 object-contain mx-auto"
        />
      </div>
    </main>
  );
}
