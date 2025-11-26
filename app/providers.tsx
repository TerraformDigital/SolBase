'use client';

import { BaseProvider } from "./providers/BaseProvider";
import SolanaProvider from "./providers/SolanaProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SolanaProvider>
      <BaseProvider>
        {children}
      </BaseProvider>
    </SolanaProvider>
  );
}
