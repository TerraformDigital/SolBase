'use client';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  CoinbaseWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo, useEffect, useState } from 'react';

// Import wallet adapter styles
import '@solana/wallet-adapter-react-ui/styles.css';

export default function SolanaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Prevent SSR issues - only render wallet provider on client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use Devnet for testing (change to Mainnet for production)
  const network = WalletAdapterNetwork.Devnet;

  // Use custom RPC if available, otherwise fall back to public
  const endpoint = useMemo(() => {
    const customRpc = process.env.NEXT_PUBLIC_SOLANA_RPC_URL;

    if (customRpc) {
      console.log('Using custom Solana RPC:', customRpc.substring(0, 50) + '...');
      return customRpc;
    }

    const defaultEndpoint = clusterApiUrl(network);
    console.log('Using public Solana RPC:', defaultEndpoint);
    return defaultEndpoint;
  }, [network]);

  // Initialize wallets
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ],
    []
  );

  // Don't render wallet provider during SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect={false}
        onError={(error) => {
          console.error('Wallet error:', error);
        }}
      >
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
