'use client';

import { useState, useCallback } from 'react';
import { uploadTokenMetadata } from '@/lib/ipfs/uploadMetadata';

interface UseUploadMetadataReturn {
  uploadMetadata: (
    imageFile: File,
    name: string,
    symbol: string,
    description?: string
  ) => Promise<string | null>;
  isUploading: boolean;
  uploadError: string | null;
  uploadProgress: string;
}

export function useUploadMetadata(): UseUploadMetadataReturn {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState('');

  const uploadMetadata = useCallback(async (
    imageFile: File,
    name: string,
    symbol: string,
    description?: string
  ): Promise<string | null> => {
    setIsUploading(true);
    setUploadError(null);
    setUploadProgress('Uploading image...');

    try {
      // Validate file
      if (!imageFile.type.startsWith('image/')) {
        throw new Error('Please upload an image file');
      }

      // Max 5MB
      if (imageFile.size > 5 * 1024 * 1024) {
        throw new Error('Image must be less than 5MB');
      }

      setUploadProgress('Uploading to IPFS...');
      const metadataUri = await uploadTokenMetadata(imageFile, name, symbol, description);

      setUploadProgress('Upload complete!');
      return metadataUri;

    } catch (error) {
      console.error('Metadata upload failed:', error);
      let errorMessage = 'Upload failed';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      // Show in console for debugging
      console.error('Full error:', JSON.stringify(error, null, 2));

      setUploadError(errorMessage);
      return null;

    } finally {
      setIsUploading(false);
    }
  }, []);

  return {
    uploadMetadata,
    isUploading,
    uploadError,
    uploadProgress,
  };
}
