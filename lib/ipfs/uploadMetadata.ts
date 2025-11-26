const NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || '';

// New NFT.Storage API endpoint
const NFT_STORAGE_API_URL = 'https://api.nft.storage';

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
 * Upload a file to IPFS via NFT.Storage HTTP API
 * Returns the IPFS gateway URL
 */
export async function uploadImageToIPFS(file: File): Promise<string> {
  console.log('uploadImageToIPFS called:', file.name, file.type, file.size, 'bytes');

  if (!NFT_STORAGE_API_KEY) {
    console.error('NFT.Storage API key is missing!');
    throw new Error('NFT.Storage API key not configured');
  }

  try {
    // Use the /upload endpoint with the file directly
    const response = await fetch(`${NFT_STORAGE_API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NFT_STORAGE_API_KEY}`,
      },
      body: file,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NFT.Storage API error:', response.status, errorText);

      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your NFT.Storage API key.');
      }
      if (response.status === 403) {
        throw new Error('Access forbidden. Your API key may not have upload permissions.');
      }

      throw new Error(`Upload failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('NFT.Storage response:', data);

    // The response contains the CID
    const cid = data.value?.cid || data.cid;

    if (!cid) {
      console.error('No CID in response:', data);
      throw new Error('Upload succeeded but no CID returned');
    }

    const ipfsUrl = `https://nftstorage.link/ipfs/${cid}`;
    console.log('Image uploaded:', ipfsUrl);

    return ipfsUrl;
  } catch (error) {
    console.error('Upload failed:', error);

    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to upload image');
  }
}

/**
 * Upload token metadata JSON to IPFS
 */
export async function uploadMetadataToIPFS(metadata: TokenMetadataJson): Promise<string> {
  console.log('uploadMetadataToIPFS called:', metadata.name, metadata.symbol);

  if (!NFT_STORAGE_API_KEY) {
    throw new Error('NFT.Storage API key not configured');
  }

  try {
    const metadataJson = JSON.stringify(metadata, null, 2);
    const blob = new Blob([metadataJson], { type: 'application/json' });
    const file = new File([blob], 'metadata.json', { type: 'application/json' });

    const response = await fetch(`${NFT_STORAGE_API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NFT_STORAGE_API_KEY}`,
      },
      body: file,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Metadata upload error:', response.status, errorText);
      throw new Error(`Metadata upload failed: ${response.status}`);
    }

    const data = await response.json();
    const cid = data.value?.cid || data.cid;

    if (!cid) {
      throw new Error('No CID returned for metadata');
    }

    const ipfsUrl = `https://nftstorage.link/ipfs/${cid}`;
    console.log('Metadata uploaded:', ipfsUrl);

    return ipfsUrl;
  } catch (error) {
    console.error('Metadata upload failed:', error);

    if (error instanceof Error) {
      throw error;
    }
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
  console.log('Token:', name, '(' + symbol + ')');
  console.log('Image:', imageFile.name, imageFile.size, 'bytes');

  // Step 1: Upload image
  const imageUrl = await uploadImageToIPFS(imageFile);

  // Step 2: Create and upload metadata
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

  const metadataUrl = await uploadMetadataToIPFS(metadata);

  console.log('=== Upload Complete ===');
  console.log('Final metadata URI:', metadataUrl);

  return metadataUrl;
}
