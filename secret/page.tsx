import Link from "next/link";

export const metadata = {
  title: "Secret • Roman DevWorks",
};

export default function SecretPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold mb-5">
        🕵️ You Found the Secret Page
      </h1>

      <p className="text-gray-400 max-w-lg mb-12 text-lg">
        Most people will never see this page.  
        You’re either curious, smart, or just really bored…  
        and honestly, I respect it.
      </p>

      <div className="space-y-4">
        <Link
          href="/"
          className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition block"
        >
          Return to Home
        </Link>
        <Link
          href="https://discord.com/users/1388535675921502349"
          target="_blank"
          className="px-8 py-4 border border-neutral-500 rounded-lg font-semibold hover:border-neutral-300 transition block"
        >
          Claim your prize (message me “I found it.”)
        </Link>
      </div>

      <p className="text-gray-600 text-xs mt-12">
        (Don’t spoil the location for others.)
      </p>
    </main>
  );
}
