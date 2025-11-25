import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 text-white sm:px-8 md:px-12">
      {/* Main Title with Gradient */}
      <h1 className="mb-6 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
        Solbase
      </h1>

      {/* Subtitle */}
      <p className="mb-12 max-w-2xl text-center text-lg text-gray-300 sm:text-xl md:text-2xl">
        Launch tokens on Solana and Base. One platform.
      </p>

      {/* Launch Token Button */}
      <Link
        href="/launch"
        className="mb-16 transform rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 sm:px-16 sm:py-5 sm:text-xl"
      >
        Launch Token
      </Link>

      {/* Feature Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <div className="rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-medium text-purple-300 backdrop-blur-sm sm:px-8 sm:py-3 sm:text-base">
          ⚡ Solana
        </div>
        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-300 backdrop-blur-sm sm:px-8 sm:py-3 sm:text-base">
          🔷 Base
        </div>
        <div className="rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-medium text-purple-300 backdrop-blur-sm sm:px-8 sm:py-3 sm:text-base">
          ⚡ Lightning Fast
        </div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>
    </div>
  );
}
