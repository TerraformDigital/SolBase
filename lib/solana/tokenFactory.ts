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

const PLATFORM_FEE_WALLET = new PublicKey('JCquJ2BEKr1eaKjHNCFgqd7fRnxCt6mjtq3qU6nBMFXJ');
const PLATFORM_FEE_LAMPORTS = 0.01 * LAMPORTS_PER_SOL; // 0.01 SOL

export interface TokenConfig {
  name: string;
  symbol: string;
  decimals: number;
  supply: number;
  metadataUri?: string; // IPFS URI for off-chain metadata
}

export async function buildCreateTokenTransaction(
  connection: Connection,
  payer: PublicKey,
  config: TokenConfig
): Promise<{ transaction: Transaction; mintKeypair: Keypair }> {
  const mintKeypair = Keypair.generate();
  const mintPubkey = mintKeypair.publicKey;

  // Get rent exemption amount
  const lamportsForMint = await getMinimumBalanceForRentExemptMint(connection);

  // Get associated token account address
  const associatedTokenAccount = await getAssociatedTokenAddress(
    mintPubkey,
    payer
  );

  // Get metadata PDA
  const [metadataPDA] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mintPubkey.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    recentBlockhash: blockhash,
    feePayer: payer,
  });

  // 1. Pay platform fee
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: payer,
      toPubkey: PLATFORM_FEE_WALLET,
      lamports: PLATFORM_FEE_LAMPORTS,
    })
  );

  // 2. Create mint account
  transaction.add(
    SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: mintPubkey,
      space: MINT_SIZE,
      lamports: lamportsForMint,
      programId: TOKEN_PROGRAM_ID,
    })
  );

  // 3. Initialize mint
  transaction.add(
    createInitializeMintInstruction(
      mintPubkey,
      config.decimals,
      payer, // mint authority
      payer, // freeze authority (can be null)
      TOKEN_PROGRAM_ID
    )
  );

  // 4. Create associated token account
  transaction.add(
    createAssociatedTokenAccountInstruction(
      payer, // payer
      associatedTokenAccount, // associated token account
      payer, // owner
      mintPubkey // mint
    )
  );

  // 5. Mint tokens to the creator
  const supplyWithDecimals = BigInt(config.supply) * BigInt(10 ** config.decimals);
  transaction.add(
    createMintToInstruction(
      mintPubkey,
      associatedTokenAccount,
      payer, // mint authority
      supplyWithDecimals
    )
  );

  // 6. Create metadata account
  const metadataData = {
    name: config.name,
    symbol: config.symbol,
    uri: config.metadataUri || '',
    sellerFeeBasisPoints: 0,
    creators: null,
    collection: null,
    uses: null,
  };

  transaction.add(
    createCreateMetadataAccountV3Instruction(
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
          isMutable: true,
          collectionDetails: null,
        },
      }
    )
  );

  return { transaction, mintKeypair };
}
