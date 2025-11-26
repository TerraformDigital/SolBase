import { Metadata } from "next/types";
import FAQPageContent from "@/components/FAQPageContent";
import { generatePageMetadata } from "@/lib/seo-config";
import { faqSchema } from "@/lib/schema-markup";

export const metadata: Metadata = generatePageMetadata('/faq');

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageContent />
    </>
  );
}
