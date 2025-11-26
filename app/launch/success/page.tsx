import { Metadata } from 'next';
import SuccessPageContent from '@/components/SuccessPageContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Token Created Successfully | Solbase',
  description: 'Your token has been deployed to the blockchain.',
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div></div>}>
      <SuccessPageContent />
    </Suspense>
  );
}
