"use client";

import { useState, useEffect } from 'react';

export default function BaseSwap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[480px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // 0x/Matcha embed for Base swaps
  // Affiliate address: 0xa1bf025e24c030989fda17c965b89ec95f69d951
  // Using Matcha (0x's consumer app) embed
  return (
    <div className="w-full h-[480px] rounded-xl overflow-hidden">
      <iframe
        src="https://matcha.xyz/trade?chain=base&affiliateAddress=0xa1bf025e24c030989fda17c965b89ec95f69d951"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          borderRadius: '12px',
        }}
        allow="clipboard-write; clipboard-read"
      />
    </div>
  );
}
