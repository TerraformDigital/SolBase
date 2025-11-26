"use client";

import { useEffect, useState } from 'react';

export default function JupiterSwap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[650px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Jupiter Terminal iframe embed with referral fee
  // Fee account: JCquJ2BEKr1eaKjHNCFgqd7fRnxCt6mjtq3qU6nBMFXJ
  // Fee BPS: 50 = 0.5%
  return (
    <div className="w-full h-[650px] rounded-xl overflow-hidden">
      <iframe
        src="https://jup.ag/swap/SOL-USDC?referrer=JCquJ2BEKr1eaKjHNCFgqd7fRnxCt6mjtq3qU6nBMFXJ&feeBps=50"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          borderRadius: '12px',
        }}
        allow="clipboard-write"
      />
    </div>
  );
}
