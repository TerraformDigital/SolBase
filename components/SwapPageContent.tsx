"use client";

import { useState } from 'react';
import JupiterSwap from './JupiterSwap';
import BaseSwap from './BaseSwap';

export default function SwapPageContent() {
  const [activeChain, setActiveChain] = useState<'solana' | 'base'>('solana');

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Swap Tokens
          </h1>
          <p className="text-gray-400">
            Trade instantly on Solana or Base with the best rates
          </p>
        </div>

        {/* Chain Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 rounded-xl p-1 flex gap-1">
            <button
              onClick={() => setActiveChain('solana')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeChain === 'solana'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Solana
            </button>
            <button
              onClick={() => setActiveChain('base')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeChain === 'base'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Base
            </button>
          </div>
        </div>

        {/* Swap Widget Container */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-4 min-h-[880px]">
          {activeChain === 'solana' ? (
            <JupiterSwap />
          ) : (
            <BaseSwap />
          )}
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Powered by {activeChain === 'solana' ? 'Jupiter' : 'Li.Fi'} aggregator</p>
          <p className="mt-1">Best rates across multiple DEXs</p>
        </div>
      </div>
    </div>
  );
}
