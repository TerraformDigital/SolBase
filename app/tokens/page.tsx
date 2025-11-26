import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";
import TokensPageContent from "@/components/TokensPageContent";

export const metadata: Metadata = generatePageMetadata('/tokens');

export default function TokensPage() {
  return <TokensPageContent />;
}
