import { NFTStorage } from 'nft.storage';

// Get API key from environment
const NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || '';

// Log if API key is present (don't log the actual key)
console.log('NFT.Storage API Key configured:', NFT_STORAGE_API_KEY ? 'Yes (length: ' + NFT_STORAGE_API_KEY.length + ')' : 'NO - MISSING!');

const client = NFT_STORAGE_API_KEY ? new NFTStorage({ token: NFT_STORAGE_API_KEY }) : null;

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
 */
export async function uploadImageToIPFS(file: File): Promise<string> {
  console.log('uploadImageToIPFS called with file:', file.name, file.type, file.size);

  if (!NFT_STORAGE_API_KEY) {
    console.error('NFT.Storage API key is not configured!');
    console.error('Check that NEXT_PUBLIC_NFT_STORAGE_API_KEY is set in environment variables');
    throw new Error('NFT.Storage API key not configured. Please check environment variables.');
  }

  if (!client) {
    throw new Error('NFT.Storage client not initialized');
  }

  try {
    console.log('Uploading to NFT.Storage...');

    // Convert File to Blob for upload
    const blob = new Blob([await file.arrayBuffer()], { type: file.type });

    const cid = await client.storeBlob(blob);
    const ipfsUrl = `https://nftstorage.link/ipfs/${cid}`;

    console.log('Image uploaded successfully!');
    console.log('CID:', cid);
    console.log('URL:', ipfsUrl);

    return ipfsUrl;
  } catch (error) {
    console.error('NFT.Storage upload failed:', error);

    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('Unauthorized')) {
        throw new Error('Invalid NFT.Storage API key. Please check your configuration.');
      }
      if (error.message.includes('413') || error.message.includes('too large')) {
        throw new Error('Image file is too large. Maximum size is 5MB.');
      }
      if (error.message.includes('network') || error.message.includes('fetch')) {
        throw new Error('Network error. Please check your connection and try again.');
      }
      throw new Error(`Upload failed: ${error.message}`);
    }

    throw new Error('Failed to upload image. Please try again.');
  }
}

/**
 * Upload token metadata JSON to IPFS
 */
export async function uploadMetadataToIPFS(metadata: TokenMetadataJson): Promise<string> {
  console.log('uploadMetadataToIPFS called with:', metadata.name, metadata.symbol);

  if (!NFT_STORAGE_API_KEY || !client) {
    throw new Error('NFT.Storage API key not configured');
  }

  try {
    const metadataJson = JSON.stringify(metadata, null, 2);
    console.log('Metadata JSON:', metadataJson);

    const blob = new Blob([metadataJson], { type: 'application/json' });

    const cid = await client.storeBlob(blob);
    const ipfsUrl = `https://nftstorage.link/ipfs/${cid}`;

    console.log('Metadata uploaded successfully!');
    console.log('CID:', cid);
    console.log('URL:', ipfsUrl);

    return ipfsUrl;
  } catch (error) {
    console.error('Metadata upload failed:', error);
    throw new Error('Failed to upload metadata');
  }
}

/**
 * Complete flow: Upload image, create metadata JSON, upload metadata
 */
export async function uploadTokenMetadata(
  imageFile: File,
  name: string,
  symbol: string,
  description?: string
): Promise<string> {
  console.log('=== Starting Token Metadata Upload ===');
  console.log('Token:', name, symbol);
  console.log('Image:', imageFile.name, imageFile.type, imageFile.size, 'bytes');

  // Step 1: Upload the image
  console.log('Step 1: Uploading image...');
  const imageUrl = await uploadImageToIPFS(imageFile);
  console.log('Image URL:', imageUrl);

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
  console.log('Step 2: Uploading metadata...');
  const metadataUrl = await uploadMetadataToIPFS(metadata);
  console.log('Metadata URL:', metadataUrl);

  console.log('=== Token Metadata Upload Complete ===');
  return metadataUrl;
}
