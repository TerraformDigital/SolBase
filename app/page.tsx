import Link from "next/link";
import Image from "next/image";
import { Wallet, SlidersHorizontal, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12">
        {/* Logo */}
        <Image
          src="/images/SolBase-logo-final.png"
          alt="Solbase"
          width={150}
          height={150}
          className="mx-auto mb-6"
          priority
        />

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

      {/* How It Works Section */}
      <section className="relative px-6 py-20 sm:px-8 md:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-[#9945FF] to-[#0052FF] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              How It Works
            </h2>
            <p className="text-lg text-gray-300 sm:text-xl">
              Launch your token in three simple steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {/* Step 1 */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#9945FF]/50 hover:bg-white/10 hover:shadow-lg hover:shadow-[#9945FF]/20">
              {/* Step Number */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF] to-[#0052FF] text-2xl font-bold">
                1
              </div>

              {/* Icon */}
              <Wallet className="mb-4 h-12 w-12 text-gray-300 transition-colors group-hover:text-white" />

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold text-white">
                Connect Your Wallet
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-300">
                Link your Phantom, MetaMask, or other supported wallet. No account creation needed - your wallet is your identity.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#9945FF]/50 hover:bg-white/10 hover:shadow-lg hover:shadow-[#9945FF]/20">
              {/* Step Number */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF] to-[#0052FF] text-2xl font-bold">
                2
              </div>

              {/* Icon */}
              <SlidersHorizontal className="mb-4 h-12 w-12 text-gray-300 transition-colors group-hover:text-white" />

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold text-white">
                Configure Your Token
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-300">
                Enter your token name, symbol, and supply. Add an optional logo and description. Choose Solana or Base.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#9945FF]/50 hover:bg-white/10 hover:shadow-lg hover:shadow-[#9945FF]/20">
              {/* Step Number */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF] to-[#0052FF] text-2xl font-bold">
                3
              </div>

              {/* Icon */}
              <Rocket className="mb-4 h-12 w-12 text-gray-300 transition-colors group-hover:text-white" />

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold text-white">
                Launch in Seconds
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-300">
                Review your details, pay a simple 1% fee, and deploy. Your token is live on the blockchain in about 60 seconds.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Link
              href="/launch"
              className="inline-block transform rounded-full bg-gradient-to-r from-[#9945FF] to-[#0052FF] px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#9945FF]/50"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
