'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Dynamically import wallet components with SSR disabled
const WalletProviderInner = dynamic(
  () => import('./SolanaWalletProvider'),
  {
    ssr: false,
    loading: () => <>{null}</>,
  }
);

export default function SolanaProvider({ children }: { children: ReactNode }) {
  return <WalletProviderInner>{children}</WalletProviderInner>;
}
