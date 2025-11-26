"use client";

import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

require("@solana/wallet-adapter-react-ui/styles.css");

export function SolanaProvider({ children }: { children: React.ReactNode }) {
  // Guard against SSR - wallet adapters need browser APIs
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  const network = WalletAdapterNetwork.Mainnet;

  // Use custom RPC URL if provided, otherwise fall back to public mainnet
  const endpoint = useMemo(() => {
    const customRpc = process.env.NEXT_PUBLIC_SOLANA_RPC_URL;

    if (customRpc) {
      console.log('Using custom Solana RPC:', customRpc.substring(0, 50) + '...');
      return customRpc;
    }

    console.log('Using public Solana RPC:', network);
    return clusterApiUrl(network);
  }, [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
