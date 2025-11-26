"use client";

import { Suspense, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Share2, Copy } from "lucide-react";
import { getBlogPost } from "@/lib/blog-data";
import type { Metadata } from "next";

function BlogPostContent() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);
  const [linkCopied, setLinkCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#9945FF] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShareOnTwitter = () => {
    const text = `${post.title} - @solaboratory`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  // Format publish date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert markdown-style content to JSX (basic implementation)
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");
        // Check for bold text
        const parts = text.split(/(\*\*.*?\*\*)/g);
        const renderedParts = parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="text-white font-semibold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        elements.push(
          <p key={key++} className="text-gray-300 mb-4 leading-relaxed">
            {renderedParts}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("# ") && index === 0) {
        // Skip the first H1 as we show it separately
        return;
      } else if (trimmed.startsWith("## ")) {
        flushParagraph();
        elements.push(
          <h2 key={key++} className="text-3xl font-bold text-white mt-12 mb-6">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushParagraph();
        elements.push(
          <h3 key={key++} className="text-2xl font-semibold text-white mt-8 mb-4">
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed === "---") {
        flushParagraph();
        elements.push(
          <hr key={key++} className="border-white/10 my-8" />
        );
      } else if (trimmed === "") {
        flushParagraph();
      } else {
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph();
    return elements;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="relative w-full aspect-[1200/630] rounded-lg overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Category */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[#9945FF]/10 text-[#9945FF] rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-12 pb-8 border-b border-white/10">
          <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button
              onClick={handleShareOnTwitter}
              className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Share on Twitter
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <Copy className="h-4 w-4" />
              {linkCopied ? "Link Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#9945FF]/10 to-[#0052FF]/10 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Launch Your Token?
          </h3>
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
      </article>
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <BlogPostContent />
    </Suspense>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Solbase",
    };
  }

  return {
    title: `${post.title} | Solbase`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const { blogPosts } = await import("@/lib/blog-data");
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
