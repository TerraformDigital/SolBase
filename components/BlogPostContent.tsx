"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  category: string;
  content: string;
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      // Convert headers
      .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-semibold text-white mt-8 mb-4">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold text-white mt-12 mb-6">$1</h2>')
      .replace(/^# (.+)$/gm, "") // Skip H1 as we show it separately
      // Convert bold text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      // Convert horizontal rules
      .replace(/^---$/gm, '<hr class="border-white/10 my-8" />')
      // Convert images
      .replace(
        /<img src="([^"]+)" alt="([^"]+)" \/>/g,
        '<div class="my-8 rounded-lg overflow-hidden"><img src="$1" alt="$2" class="w-full h-auto" /></div>'
      )
      // Convert paragraphs (lines that aren't headers or special elements)
      .split("\n\n")
      .map((para) => {
        const trimmed = para.trim();
        if (!trimmed) return "";
        if (trimmed.startsWith("<h") || trimmed.startsWith("<hr") || trimmed.startsWith("<div")) {
          return trimmed;
        }
        return `<p class="text-gray-300 mb-4 leading-relaxed">${trimmed.replace(/\n/g, " ")}</p>`;
      })
      .join("\n");
  };

  return (
    <article className="min-h-screen bg-[#0A0A0A] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-[#9945FF] hover:text-purple-400 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <div className="mb-8">
          <span className="text-[#9945FF] text-sm font-medium">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{post.publishDate}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {post.heroImage && (
          <div className="relative w-full aspect-[1200/630] mb-8 rounded-lg overflow-hidden">
            <Image src={post.heroImage} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://solbase.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
            >
              Share on X
            </a>
            <button
              onClick={copyLink}
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#9945FF]/10 to-[#0052FF]/10 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Token?</h3>
          <p className="text-gray-300 mb-6">
            Create your token on Solana or Base in just 60 seconds. No coding required.
          </p>
          <Link
            href="/launch"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#9945FF] to-[#0052FF] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Launch Token
          </Link>
        </div>
      </div>
    </article>
  );
}
