import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  Keypair,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import {
  createInitializeMintInstruction,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
  getAssociatedTokenAddress,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  getMinimumBalanceForRentExemptMint,
} from '@solana/spl-token';
import {
  createCreateMetadataAccountV3Instruction,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from '@metaplex-foundation/mpl-token-metadata';

// Platform fee wallet - receives 0.01 SOL per token creation
const PLATFORM_FEE_WALLET = new PublicKey('JCquJ2BEKr1eaKjHNCFgqd7fRnxCt6mjtq3qU6nBMFXJ');
const PLATFORM_FEE_LAMPORTS = 0.01 * LAMPORTS_PER_SOL; // 0.01 SOL minimum

export interface TokenConfig {
  name: string;
  symbol: string;
  decimals: number;
  supply: number;
  metadataUri?: string; // IPFS URI for off-chain metadata (image, description, etc.)
}

export interface CreateTokenResult {
  transaction: Transaction;
  mintKeypair: Keypair;
}

export async function buildCreateTokenTransaction(
  connection: Connection,
  payer: PublicKey,
  config: TokenConfig
): Promise<CreateTokenResult> {
  const mintKeypair = Keypair.generate();
  const mintPubkey = mintKeypair.publicKey;

  // Get rent exemption amount for mint account
  const lamportsForMint = await getMinimumBalanceForRentExemptMint(connection);

  // Get associated token account address for the creator
  const associatedTokenAccount = await getAssociatedTokenAddress(
    mintPubkey,
    payer
  );

  // Derive the metadata PDA (Program Derived Address)
  const [metadataPDA] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mintPubkey.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  // Get latest blockhash
  const { blockhash } = await connection.getLatestBlockhash();

  // Build transaction with all instructions
  const transaction = new Transaction({
    recentBlockhash: blockhash,
    feePayer: payer,
  });

  // Instruction 1: Pay platform fee
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: payer,
      toPubkey: PLATFORM_FEE_WALLET,
      lamports: PLATFORM_FEE_LAMPORTS,
    })
  );

  // Instruction 2: Create mint account
  transaction.add(
    SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: mintPubkey,
      space: MINT_SIZE,
      lamports: lamportsForMint,
      programId: TOKEN_PROGRAM_ID,
    })
  );

  // Instruction 3: Initialize mint with 9 decimals (standard for Solana)
  transaction.add(
    createInitializeMintInstruction(
      mintPubkey,
      config.decimals,
      payer, // mint authority
      null,  // freeze authority (null = tokens cannot be frozen)
      TOKEN_PROGRAM_ID
    )
  );

  // Instruction 4: Create associated token account for creator
  transaction.add(
    createAssociatedTokenAccountInstruction(
      payer,                    // payer
      associatedTokenAccount,   // associated token account address
      payer,                    // owner
      mintPubkey                // mint
    )
  );

  // Instruction 5: Mint total supply to creator
  const supplyWithDecimals = BigInt(config.supply) * BigInt(10 ** config.decimals);
  transaction.add(
    createMintToInstruction(
      mintPubkey,               // mint
      associatedTokenAccount,   // destination
      payer,                    // mint authority
      supplyWithDecimals        // amount
    )
  );

  // Instruction 6: Create token metadata (name, symbol, image URI)
  const metadataData = {
    name: config.name.slice(0, 32),        // Max 32 characters
    symbol: config.symbol.slice(0, 10),    // Max 10 characters
    uri: config.metadataUri || '',          // IPFS URI for off-chain metadata JSON
    sellerFeeBasisPoints: 0,                // No royalties for fungible tokens
    creators: null,
    collection: null,
    uses: null,
  };

  const createMetadataInstruction = createCreateMetadataAccountV3Instruction(
    {
      metadata: metadataPDA,
      mint: mintPubkey,
      mintAuthority: payer,
      payer: payer,
      updateAuthority: payer,
    },
    {
      createMetadataAccountArgsV3: {
        data: metadataData,
        isMutable: true,          // Allow updating metadata later
        collectionDetails: null,
      },
    }
  );

  transaction.add(createMetadataInstruction);

  console.log('Building token with metadata:', {
    name: config.name,
    symbol: config.symbol,
    supply: config.supply,
    decimals: config.decimals,
    metadataUri: config.metadataUri || '(none)',
    mintAddress: mintPubkey.toBase58(),
  });

  return { transaction, mintKeypair };
}

// Helper to estimate total cost including metadata account rent
export async function estimateTokenCreationCost(connection: Connection): Promise<number> {
  const mintRent = await getMinimumBalanceForRentExemptMint(connection);
  const platformFee = PLATFORM_FEE_LAMPORTS;
  const estimatedTxFee = 10000;        // ~0.00001 SOL
  const metadataRent = 5616720;        // ~0.0056 SOL for metadata account

  const totalLamports = mintRent + platformFee + estimatedTxFee + metadataRent;
  return totalLamports / LAMPORTS_PER_SOL;
}

