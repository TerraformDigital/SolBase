"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

type Chain = "solana" | "base";

interface TokenDraft {
  tokenName: string;
  tokenSymbol: string;
  totalSupply: string;
  description: string;
  logoPreview: string;
  website: string;
  twitter: string;
  discord: string;
  telegram: string;
  deployedChains?: Chain[];
}

function LaunchSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const chain = searchParams.get("chain") as Chain | null;
  const address = searchParams.get("address");

  const [tokenData, setTokenData] = useState<TokenDraft | null>(null);
  const [copied, setCopied] = useState(false);
  const [deployedChains, setDeployedChains] = useState<Chain[]>([]);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Load token data from localStorage
    const savedDraft = localStorage.getItem("solbase_draft_token");
    if (savedDraft) {
      try {
        const draft: TokenDraft = JSON.parse(savedDraft);
        setTokenData(draft);
        setDeployedChains(draft.deployedChains || []);

        // Check if deployed to both chains - if so, clear draft
        if (draft.deployedChains && draft.deployedChains.length >= 2) {
          localStorage.removeItem("solbase_draft_token");
        }
      } catch (error) {
        console.error("Failed to parse draft:", error);
      }
    }
  }, [mounted]);

  const handleCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getBlockExplorerUrl = (chain: Chain, address: string) => {
    if (chain === "solana") {
      return `https://solscan.io/token/${address}`;
    } else {
      return `https://basescan.org/token/${address}`;
    }
  };

  const getOtherChain = (): Chain => {
    return chain === "solana" ? "base" : "solana";
  };

  const isDeployedToBothChains = deployedChains.length >= 2;
  const otherChain = getOtherChain();

  const handleLaunchOnOtherChain = () => {
    // Navigate back to launch page with auto-restore=true
    router.push("/launch?auto-restore=true");
  };

  // Prevent SSR issues with localStorage
  if (!mounted) {
    return <div className="min-h-screen bg-[#0A0A0A]" />;
  }

  if (!chain || !address || !tokenData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-white">
        <div className="text-center">
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-3xl px-6 py-12 text-white sm:px-8">
      {/* Success Icon and Message */}
      <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Token Deployed Successfully!
          </h1>

          <p className="text-lg text-gray-300">
            Your token is now live on {chain === "solana" ? "⚡ Solana" : "🔷 Base"}
          </p>
        </div>

        {/* Token Details Card */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">{tokenData.tokenName}</h2>
              <p className="mt-1 text-xl text-gray-400">${tokenData.tokenSymbol}</p>
            </div>
            <div className={`rounded-full px-4 py-2 text-sm font-medium ${
              chain === "solana"
                ? "border border-purple-500/30 bg-purple-500/10 text-purple-300"
                : "border border-blue-500/30 bg-blue-500/10 text-blue-300"
            }`}>
              {chain === "solana" ? "⚡ Solana" : "🔷 Base"}
            </div>
          </div>

          {/* Token Address */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-400">
              Token Address
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1 overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <p className="truncate text-sm font-mono text-white">{address}</p>
              </div>
              <button
                onClick={handleCopyAddress}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Block Explorer Link */}
          <div>
            <a
              href={getBlockExplorerUrl(chain, address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              View on {chain === "solana" ? "Solscan" : "Basescan"}
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Cross-Chain Deployment Prompt */}
        {!isDeployedToBothChains && (
          <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 backdrop-blur-sm">
            <h3 className="mb-3 text-2xl font-bold text-white">
              {otherChain === "base" ? "🔷 Want to launch on Base too?" : "⚡ Want to launch on Solana too?"}
            </h3>
            <p className="mb-6 text-gray-300">
              Deploy the same token on {otherChain === "base" ? "Base" : "Solana"} to reach more users across both ecosystems.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleLaunchOnOtherChain}
                className="flex-1 transform rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                Launch on {otherChain === "base" ? "Base" : "Solana"}
              </button>

              <Link
                href="/"
                className="flex-1 transform rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              >
                Done for Now
              </Link>
            </div>
          </div>
        )}

        {/* Both Chains Deployed - Celebration */}
        {isDeployedToBothChains && (
          <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 text-center backdrop-blur-sm">
            <h3 className="mb-3 text-2xl font-bold text-white">
              🎉 Multi-Chain Success!
            </h3>
            <p className="mb-6 text-gray-300">
              Your token is now live on both Solana and Base. You're reaching users across two major ecosystems!
            </p>

            <Link
              href="/"
              className="inline-block transform rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
            >
              Back to Homepage
            </Link>
          </div>
        )}

      {/* Decorative Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute -right-40 top-60 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>
    </div>
  );
}

export default function LaunchSuccess() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <LaunchSuccessContent />
    </Suspense>
  );
}
