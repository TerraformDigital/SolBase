"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";

type Chain = "solana" | "base";

export function WalletButton() {
  const [selectedChain, setSelectedChain] = useState<Chain>("solana");

  // Solana wallet hooks
  const { publicKey, disconnect: disconnectSolana } = useWallet();
  const { setVisible } = useWalletModal();

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleSolanaConnect = () => {
    setVisible(true);
  };

  const handleSolanaDisconnect = () => {
    disconnectSolana();
  };

  return (
    <div className="flex items-center gap-2">
      {/* Chain Selector */}
      <div className="hidden items-center gap-1 rounded-full bg-white/5 p-1 sm:flex">
        <button
          onClick={() => setSelectedChain("solana")}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            selectedChain === "solana"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Solana
        </button>
        <button
          onClick={() => setSelectedChain("base")}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            selectedChain === "base"
              ? "bg-blue-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Base
        </button>
      </div>

      {/* Wallet Button */}
      {selectedChain === "base" ? (
        <ConnectButton />
      ) : (
        // Solana wallet button
        <>
          {publicKey ? (
            <button
              onClick={handleSolanaDisconnect}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/10 sm:px-6 sm:py-2.5"
            >
              {truncateAddress(publicKey.toBase58())}
            </button>
          ) : (
            <button
              onClick={handleSolanaConnect}
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 sm:px-6 sm:py-2.5"
            >
              Connect Wallet
            </button>
          )}
        </>
      )}
    </div>
  );
}
