"use client";

import { useState } from "react";

type Chain = "all" | "solana" | "base";

export default function TokensPage() {
  const [selectedChain, setSelectedChain] = useState<Chain>("all");

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 text-white sm:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Tokens
        </h1>
        <p className="text-lg text-gray-300">
          Browse tokens created on Solbase
        </p>
      </div>

      {/* Chain Filter Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-white/5 p-1">
          <button
            onClick={() => setSelectedChain("all")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              selectedChain === "all"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedChain("solana")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              selectedChain === "solana"
                ? "bg-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ⚡ Solana
          </button>
          <button
            onClick={() => setSelectedChain("base")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              selectedChain === "base"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🔷 Base
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
        <p className="mb-4 text-2xl font-semibold text-white">
          No tokens yet
        </p>
        <p className="mb-6 text-gray-400">
          Be the first to launch a token on Solbase!
        </p>
        <a
          href="/launch"
          className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
        >
          Launch Token
        </a>
      </div>

      {/* Token Grid Template (for future use) */}
      {/*
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
            <div>
              <h3 className="font-bold text-white">Token Name</h3>
              <p className="text-sm text-gray-400">$SYMBOL</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">⚡ Solana</span>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300">View →</a>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
