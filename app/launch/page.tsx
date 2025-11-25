"use client";

import { Suspense, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAccount } from "wagmi";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
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

function LaunchFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [selectedChain, setSelectedChain] = useState<Chain>("solana");
  const { publicKey: solanaWallet } = useWallet();
  const { address: baseWallet } = useAccount();

  const isConnected = selectedChain === "solana" ? !!solanaWallet : !!baseWallet;

  // Draft restoration
  const [showDraftPrompt, setShowDraftPrompt] = useState(false);
  const [hasDraft, setHasDraft] = useState(false);

  // Form state
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [description, setDescription] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");

  // Social links
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [telegram, setTelegram] = useState("");

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load draft on mount
  useEffect(() => {
    if (!mounted) return;

    const draft = localStorage.getItem("solbase_draft_token");
    if (draft) {
      setHasDraft(true);
      setShowDraftPrompt(true);
    }

    // Check if coming from success page with chain parameter
    const chainParam = searchParams.get("chain");
    if (chainParam === "solana" || chainParam === "base") {
      setSelectedChain(chainParam);
      // Auto-restore draft when coming from success page
      if (draft) {
        restoreDraft(JSON.parse(draft));
      }
    }
  }, [mounted, searchParams]);

  // Save draft to localStorage whenever form changes
  useEffect(() => {
    if (!mounted) return;

    if (tokenName || tokenSymbol || totalSupply || description || website || twitter || discord || telegram) {
      const draft: TokenDraft = {
        tokenName,
        tokenSymbol,
        totalSupply,
        description,
        logoPreview,
        website,
        twitter,
        discord,
        telegram,
      };
      localStorage.setItem("solbase_draft_token", JSON.stringify(draft));
    }
  }, [mounted, tokenName, tokenSymbol, totalSupply, description, logoPreview, website, twitter, discord, telegram]);

  const restoreDraft = (draft: TokenDraft) => {
    setTokenName(draft.tokenName);
    setTokenSymbol(draft.tokenSymbol);
    setTotalSupply(draft.totalSupply);
    setDescription(draft.description);
    setLogoPreview(draft.logoPreview);
    setWebsite(draft.website);
    setTwitter(draft.twitter);
    setDiscord(draft.discord);
    setTelegram(draft.telegram);
    setShowDraftPrompt(false);
  };

  const handleContinueDraft = () => {
    const draft = localStorage.getItem("solbase_draft_token");
    if (draft) {
      restoreDraft(JSON.parse(draft));
    }
  };

  const handleStartFresh = () => {
    localStorage.removeItem("solbase_draft_token");
    setShowDraftPrompt(false);
    setHasDraft(false);
  };

  // Validation
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid = () => {
    if (!tokenName || tokenName.length > 32) return false;
    if (!tokenSymbol || tokenSymbol.length > 10) return false;
    if (!totalSupply || parseFloat(totalSupply) <= 0 || parseFloat(totalSupply) > 1000000000000) return false;
    if (!logoFile && !logoPreview) return false;
    if (description.length > 500) return false;
    if (website && !isValidUrl(website)) return false;
    return true;
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    if (!isFormValid()) {
      alert("Please fill in all required fields correctly!");
      return;
    }

    // Get deployed chains from draft
    const draft = localStorage.getItem("solbase_draft_token");
    let deployedChains: Chain[] = [];
    if (draft) {
      const parsedDraft = JSON.parse(draft);
      deployedChains = parsedDraft.deployedChains || [];
    }

    // Add current chain to deployed chains
    if (!deployedChains.includes(selectedChain)) {
      deployedChains.push(selectedChain);
    }

    // Update draft with deployed chains
    const updatedDraft: TokenDraft = {
      tokenName,
      tokenSymbol,
      totalSupply,
      description,
      logoPreview,
      website,
      twitter,
      discord,
      telegram,
      deployedChains,
    };
    localStorage.setItem("solbase_draft_token", JSON.stringify(updatedDraft));

    console.log({
      chain: selectedChain,
      tokenName,
      tokenSymbol,
      totalSupply,
      description,
      logo: logoFile?.name,
      website,
      twitter,
      discord,
      telegram,
      deployedChains,
    });

    // Simulate deployment and navigate to success page
    const tokenAddress = selectedChain === "solana"
      ? "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
      : "0x1234567890123456789012345678901234567890";

    router.push(`/launch/success?chain=${selectedChain}&address=${tokenAddress}`);
  };

  // Prevent SSR issues with wallet and localStorage
  if (!mounted) {
    return <div className="min-h-screen bg-[#0A0A0A]" />;
  }

  return (
    <>
      {/* Draft Restoration Prompt */}
      {showDraftPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="mx-4 max-w-md rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-white">
              You have an unfinished token
            </h3>
            <p className="mb-6 text-gray-400">
              Would you like to continue where you left off?
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleContinueDraft}
                className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105"
              >
                Continue
              </button>
              <button
                onClick={handleStartFresh}
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Start Fresh
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-6 py-12 text-white sm:px-8">
        <h1 className="mb-2 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Launch Your Token
        </h1>
        <p className="mb-8 text-center text-gray-400">
          Create your token on Solana or Base in minutes
        </p>

        {/* Chain Selector */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-white/5 p-1">
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

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          {/* Token Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Token Information</h2>

            {/* Token Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Token Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                maxLength={32}
                placeholder="e.g., Solbase Token"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <p className="mt-1 text-right text-xs text-gray-500">
                {tokenName.length}/32
              </p>
            </div>

            {/* Token Symbol */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Token Symbol <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value.toUpperCase())}
                maxLength={10}
                placeholder="e.g., SOLB"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <p className="mt-1 text-right text-xs text-gray-500">
                {tokenSymbol.length}/10
              </p>
            </div>

            {/* Total Supply */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Total Supply <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                value={totalSupply}
                onChange={(e) => setTotalSupply(e.target.value)}
                max={1000000000000}
                placeholder="e.g., 1000000"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <p className="mt-1 text-xs text-gray-500">
                Maximum: 1,000,000,000,000 (1 trillion)
              </p>
            </div>

            {/* Logo Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Token Logo <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center gap-4">
                <label className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>
                {logoPreview && (
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={logoPreview}
                      alt="Logo preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="text-sm text-gray-500">
                  {logoFile ? logoFile.name : logoPreview ? "Saved from draft" : "No file chosen"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={500}
                rows={4}
                placeholder="Tell us about your token..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <p className="mt-1 text-right text-xs text-gray-500">
                {description.length}/500
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 border-t border-white/10 pt-6">
            <h2 className="text-xl font-semibold text-white">Social Links (Optional)</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Website
                </label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  X / Twitter
                </label>
                <input
                  type="text"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="@username or full URL"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Discord
                </label>
                <input
                  type="text"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  placeholder="Invite link"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Telegram
                </label>
                <input
                  type="text"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="Group link"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-4 pt-6">
            {!isConnected && (
              <p className="text-center text-sm text-yellow-400">
                ⚠️ Please connect your wallet to create a token
              </p>
            )}
            <button
              type="submit"
              disabled={!isConnected || !isFormValid()}
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              Create Token
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default function LaunchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <LaunchFormContent />
    </Suspense>
  );
}
