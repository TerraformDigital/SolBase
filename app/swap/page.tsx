import { Metadata } from 'next';
import SwapPageContent from '@/components/SwapPageContent';

export const metadata: Metadata = {
  title: 'Swap Tokens | Solbase - Trade on Solana & Base',
  description: 'Swap tokens instantly on Solana and Base. Low fees, best rates powered by Jupiter and 0x aggregators.',
  openGraph: {
    title: 'Swap Tokens | Solbase',
    description: 'Swap tokens instantly on Solana and Base. Low fees, best rates.',
    url: 'https://solbase.app/swap',
  },
};

export default function SwapPage() {
  return <SwapPageContent />;
}
