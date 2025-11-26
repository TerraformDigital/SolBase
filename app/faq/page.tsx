import { Metadata } from "next/types";
import FAQPageContent from "@/components/FAQPageContent";
import { generatePageMetadata } from "@/lib/seo-config";
import { faqSchema, SchemaMarkup } from "@/lib/schema-markup";

export const metadata: Metadata = generatePageMetadata('/faq');

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schemas={faqSchema} />
      <FAQPageContent />
    </>
  );
}
