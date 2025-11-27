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
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo, ReactNode } from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';

export default function SolanaWalletProvider({ children }: { children: ReactNode }) {
  // Network configuration - use Devnet for testing
  const network = WalletAdapterNetwork.Devnet;

  // RPC endpoint
  const endpoint = useMemo(() => {
    const customRpc = process.env.NEXT_PUBLIC_SOLANA_RPC_URL;
    if (customRpc) {
      console.log('Solana RPC: Custom endpoint');
      return customRpc;
    }
    console.log('Solana RPC: Public devnet');
    return clusterApiUrl(network);
  }, [network]);

  // Debug: Log full endpoint URL
  console.log('Full endpoint URL:', endpoint);

  // Wallet adapters
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  // Debug: Log when wallets are initialized
  console.log('Wallets initialized:', wallets.map(w => w.name));

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect={false}
        onError={(error) => {
          console.error('Wallet Provider Error:', error.name, error.message);
          console.error('Full error:', error);
        }}
      >
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
