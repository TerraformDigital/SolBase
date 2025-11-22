import Image from "next/image";
import { WalletButton } from "@/components/WalletButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/solbase-logo.png"
              alt="Solbase Logo"
              width={40}
              height={40}
              priority
              className="h-8 w-auto sm:h-10"
            />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              Solbase
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#launch"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Launch
            </a>
            <a
              href="#tokens"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Tokens
            </a>
            <a
              href="#docs"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Docs
            </a>
          </div>

          {/* Connect Wallet Button */}
          <WalletButton />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12">
        {/* Main Title with Gradient */}
        <h1 className="mb-6 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Solbase
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-2xl text-center text-lg text-gray-300 sm:text-xl md:text-2xl">
          Launch tokens on Solana and Base. One platform.
        </p>

        {/* Launch Token Button */}
        <button className="mb-16 transform rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 sm:px-16 sm:py-5 sm:text-xl">
          Launch Token
        </button>

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
      </main>
    </div>
  );
}
