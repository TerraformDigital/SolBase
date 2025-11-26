"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqCategories } from "@/lib/faq-data";

export default function FAQPageContent() {
  const [activeSection, setActiveSection] = useState("");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  // Intersection observer for TOC highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    faqCategories.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
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
              <nav className="space-y-2">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Contents
                </p>
                {faqCategories.map(({ id, title }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === id
                        ? "bg-[#9945FF]/20 text-[#9945FF] font-medium"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile TOC - Horizontal Scroll */}
          <div className="lg:hidden mb-8 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="whitespace-nowrap px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-[#9945FF]/20 hover:text-[#9945FF] transition-colors"
                >
                  {category.title}
                </button>
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
                  {category.questions.map((q, index) => {
                    const questionId = `${category.id}-${index}`;
                    const isOpen = openQuestions[questionId];
                    return (
                      <div key={questionId} className="border-b border-gray-800 last:border-b-0">
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full py-5 flex justify-between items-center text-left hover:text-[#9945FF] transition-colors"
                        >
                          <span className="text-lg font-medium text-white pr-4">{q.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isOpen ? "max-h-96 pb-5" : "max-h-0"
                          }`}
                        >
                          <p className="text-gray-300 leading-relaxed">{q.answer}</p>
                        </div>
                      </div>
                    );
                  })}
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
        <ChevronUp className="w-6 h-6" />
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
              href="https://x.com/SolBaseApp"
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
  );
}
