import { NFTStorage, File } from 'nft.storage';

// Get API key from environment
const NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || '';

const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });

export interface TokenMetadataJson {
  name: string;
  symbol: string;
  description?: string;
  image: string;
  attributes?: Array<{ trait_type: string; value: string }>;
  properties?: {
    files?: Array<{ uri: string; type: string }>;
  };
}

/**
 * Upload an image file to IPFS via NFT.Storage
 * Returns the IPFS gateway URL
 */
export async function uploadImageToIPFS(file: File): Promise<string> {
  if (!NFT_STORAGE_API_KEY) {
    throw new Error('NFT.Storage API key not configured');
  }

  try {
    // Upload the image directly
    const cid = await client.storeBlob(file);
    const ipfsUrl = `https://nftstorage.link/ipfs/${cid}`;

    console.log('Image uploaded to IPFS:', ipfsUrl);
    return ipfsUrl;
  } catch (error) {
    console.error('Failed to upload image to IPFS:', error);
    throw new Error('Failed to upload image');
  }
}

/**
 * Upload token metadata JSON to IPFS
 * Returns the IPFS gateway URL to the metadata JSON
 */
export async function uploadMetadataToIPFS(metadata: TokenMetadataJson): Promise<string> {
  if (!NFT_STORAGE_API_KEY) {
    throw new Error('NFT.Storage API key not configured');
  }

  try {
    // Convert metadata to JSON blob
    const metadataBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
    const metadataFile = new File([metadataBlob], 'metadata.json');

    const cid = await client.storeBlob(metadataFile);
    const ipfsUrl = `https://nftstorage.link/ipfs/${cid}`;

    console.log('Metadata uploaded to IPFS:', ipfsUrl);
    return ipfsUrl;
  } catch (error) {
    console.error('Failed to upload metadata to IPFS:', error);
    throw new Error('Failed to upload metadata');
  }
}

/**
 * Complete flow: Upload image, create metadata JSON, upload metadata
 * Returns the final metadata URI to use in token creation
 */
export async function uploadTokenMetadata(
  imageFile: File,
  name: string,
  symbol: string,
  description?: string
): Promise<string> {
  // Step 1: Upload the image
  console.log('Uploading image to IPFS...');
  const imageUrl = await uploadImageToIPFS(imageFile);

  // Step 2: Create metadata JSON
  const metadata: TokenMetadataJson = {
    name,
    symbol,
    description: description || `${name} (${symbol}) - Created on Solbase.app`,
    image: imageUrl,
    properties: {
      files: [
        {
          uri: imageUrl,
          type: imageFile.type,
        },
      ],
    },
  };

  // Step 3: Upload metadata JSON
  console.log('Uploading metadata JSON to IPFS...');
  const metadataUrl = await uploadMetadataToIPFS(metadata);

  return metadataUrl;
}
