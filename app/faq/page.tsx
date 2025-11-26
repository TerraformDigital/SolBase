import { Metadata } from "next/types";
import FAQAccordion from "@/components/FAQAccordion";
import FAQTableOfContents from "@/components/FAQTableOfContents";
import { faqCategories } from "@/lib/faq-data";
import { ArrowUp } from "lucide-react";

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
  // Build JSON-LD schema
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#9945FF]/10 to-transparent py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9945FF] to-[#0052FF] bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about creating tokens on Solana and Base
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* Table of Contents - Sticky on Desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <FAQTableOfContents
                  categories={faqCategories.map((cat) => ({ id: cat.id, title: cat.title }))}
                />
              </div>
            </aside>

            {/* Mobile TOC - Horizontal Scroll */}
            <div className="lg:hidden mb-8 overflow-x-auto">
              <div className="flex gap-2 pb-2">
                {faqCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="whitespace-nowrap px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-[#9945FF]/20 hover:text-[#9945FF] transition-colors"
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3 space-y-16">
              {faqCategories.map((category) => (
                <section key={category.id} id={category.id} className="scroll-mt-24">
                  {/* Category Title */}
                  <div className="mb-6 border-l-4 border-[#9945FF] pl-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                  </div>

                  {/* Questions */}
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    {category.questions.map((q, index) => (
                      <FAQAccordion key={index} question={q.question} answer={q.answer} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#9945FF] text-white p-3 rounded-full shadow-lg hover:bg-[#7a34cc] transition-colors z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Still Have Questions CTA */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-[#9945FF]/10 to-[#0052FF]/10 rounded-xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Reach out to our community on X or Discord. We are here to help you launch your token.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://x.com/solaboratory"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Join on X
              </a>
              <a
                href="/launch"
                className="px-6 py-3 bg-gradient-to-r from-[#9945FF] to-[#0052FF] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Launch Your Token
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
