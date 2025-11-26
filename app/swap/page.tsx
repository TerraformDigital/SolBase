import { Metadata } from 'next';
import SwapPageContent from '@/components/SwapPageContent';
import { generatePageMetadata } from '@/lib/seo-config';

export const metadata: Metadata = generatePageMetadata('/swap');

export default function SwapPage() {
  return <SwapPageContent />;
}
