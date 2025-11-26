"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CheckCircle, Copy, ExternalLink, Share2, Plus, Wallet, Twitter, Send } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function SuccessPageContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // Get token data from URL params
  const chain = searchParams.get('chain') || 'solana';
  const address = searchParams.get('address') || '';
  const name = searchParams.get('name') || 'Your Token';
  const symbol = searchParams.get('symbol') || 'TOKEN';
  const supply = searchParams.get('supply') || '0';

  // Explorer URLs
  const explorerUrl = chain === 'solana'
    ? `https://solscan.io/token/${address}`
    : `https://basescan.org/token/${address}`;

  const explorerName = chain === 'solana' ? 'Solscan' : 'Basescan';

  // Trigger confetti on mount
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9945FF', '#0052FF', '#14F195']
    });
  }, []);

  // Copy contract address
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Copy share link
  const copyShareLink = () => {
    const shareUrl = `https://www.solbase.app/tokens/${address}?chain=${chain}`;
    navigator.clipboard.writeText(shareUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  // Share on X/Twitter
  const shareOnX = () => {
    const text = `I just created ${name} ($${symbol}) on ${chain === 'solana' ? 'Solana' : 'Base'} using @SolBaseApp! 🚀\n\nContract: ${address}\n\nCreate your own token in 60 seconds:`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://www.solbase.app')}`;
    window.open(url, '_blank');
  };

  // Share on Telegram
  const shareOnTelegram = () => {
    const text = `I just created ${name} ($${symbol}) on ${chain === 'solana' ? 'Solana' : 'Base'}! Contract: ${address}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent('https://www.solbase.app')}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Token Created! 🎉
          </h1>
          <p className="text-gray-400 text-lg">
            Your token is now live on {chain === 'solana' ? 'Solana' : 'Base'}
          </p>
        </div>

        {/* Token Info Card */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
              {symbol.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              <p className="text-gray-400">${symbol}</p>
            </div>
            <div className="ml-auto">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                chain === 'solana'
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {chain === 'solana' ? 'Solana' : 'Base'}
              </span>
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-800">
              <span className="text-gray-400">Total Supply</span>
              <span className="text-white font-medium">{Number(supply).toLocaleString()} {symbol}</span>
            </div>

            <div className="py-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Contract Address</span>
                <button
                  onClick={copyAddress}
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-gray-300 break-all">
                {address}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            View on {explorerName}
          </a>
          <button
            onClick={copyShareLink}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors"
          >
            <Share2 className="w-5 h-5" />
            {linkCopied ? 'Link Copied!' : 'Copy Share Link'}
          </button>
        </div>

        {/* Share Section */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Share Your Token</h3>
          <div className="flex gap-3">
            <button
              onClick={shareOnX}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-gray-900 text-white rounded-xl border border-gray-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              Share on X
            </button>
            <button
              onClick={shareOnTelegram}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl transition-colors"
            >
              <Send className="w-5 h-5" />
              Telegram
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Wallet className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Add to Wallet</p>
                <p className="text-gray-400 text-sm">Import the contract address to see your tokens in your wallet</p>
              </div>
            </div>
            <a
              href={chain === 'solana' ? 'https://raydium.io/liquidity/' : 'https://app.uniswap.org/add'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Plus className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Add Liquidity</p>
                <p className="text-gray-400 text-sm">Create a trading pool on {chain === 'solana' ? 'Raydium' : 'Uniswap'} so others can trade</p>
              </div>
            </a>
          </div>
        </div>

        {/* Create Another */}
        <div className="text-center">
          <Link
            href="/launch"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Another Token
          </Link>
        </div>

      </div>
    </div>
  );
}
