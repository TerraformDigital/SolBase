"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  title: string;
}

interface FAQTableOfContentsProps {
  categories: TOCItem[];
}

export default function FAQTableOfContents({ categories }: FAQTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState("");

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

    categories.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="space-y-2">
      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contents</p>
      {categories.map(({ id, title }) => (
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
  );
}
