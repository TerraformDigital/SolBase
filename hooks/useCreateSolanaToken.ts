'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import { buildCreateTokenTransaction, TokenConfig } from '@/lib/solana/tokenFactory';

export function useCreateSolanaToken() {
  const { connection } = useConnection();
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createToken = async (config: TokenConfig): Promise<string | null> => {
    if (!publicKey || !signTransaction) {
      setError('Wallet not connected');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { transaction, mintKeypair } = await buildCreateTokenTransaction(
        connection,
        publicKey,
        config
      );

      // Sign with both wallet and mint keypair
      transaction.partialSign(mintKeypair);

      const signature = await sendTransaction(transaction, connection, {
        signers: [mintKeypair],
      });

      // Wait for confirmation
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
      await connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight,
      });

      console.log('Token created! Mint address:', mintKeypair.publicKey.toBase58());
      console.log('Transaction:', signature);

      return mintKeypair.publicKey.toBase58();

    } catch (err) {
      console.error('Token creation failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to create token');
      return null;

    } finally {
      setIsLoading(false);
    }
  };

  return {
    createToken,
    isLoading,
    error,
  };
}
