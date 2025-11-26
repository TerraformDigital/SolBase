"use client";

import { useState, useEffect } from 'react';

export default function BaseSwap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[850px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Use Li.Fi widget instead - it has better embed support and affiliate fees
  // Affiliate address: 0xa1bf025e24c030989fda17c965b89ec95f69d951
  return (
    <div className="w-full h-[850px] rounded-xl overflow-hidden">
      <iframe
        src="https://transferto.xyz/swap?fromChain=8453&toChain=8453&affiliateAddress=0xa1bf025e24c030989fda17c965b89ec95f69d951&affiliateFee=0.003"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          borderRadius: '12px',
          backgroundColor: '#1a1a1a',
        }}
        allow="clipboard-write; clipboard-read"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
}
