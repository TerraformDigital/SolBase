import { Metadata } from "next/types";
import FAQPageContent from "@/components/FAQPageContent";
import { faqCategories } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Solbase - Token Creation on Solana & Base",
  description:
    "Get answers about creating tokens on Solana and Base. Learn about fees, wallets, security, and how to launch your token in 60 seconds with Solbase.",
  keywords:
    "solbase faq, how to create token solana, base token creation, crypto token fees, solana vs base, token launcher questions",
  openGraph: {
    title: "Frequently Asked Questions | Solbase",
    description:
      "Get answers about creating tokens on Solana and Base. Fees, wallets, security, and more.",
    url: "https://solbase.app/faq",
    siteName: "Solbase",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Solbase",
    description:
      "Get answers about creating tokens on Solana and Base. Fees, wallets, security, and more.",
  },
};

export default function FAQPage() {
  // Build JSON-LD schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Client Component with all interactive elements */}
      <FAQPageContent />
    </>
  );
}
