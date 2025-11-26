"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";

function BlogContent() {
  const posts = getAllBlogPosts();

  // Format publish date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get excerpt (first 150 characters)
  const getExcerpt = (description: string) => {
    if (description.length <= 150) return description;
    return description.substring(0, 150) + "...";
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 text-white sm:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-[#9945FF] via-purple-400 to-[#0052FF] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Blog
        </h1>
        <p className="text-lg text-gray-300">
          News, insights, and updates from the Solbase team
        </p>
      </div>

      {/* Article Grid */}
      {posts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm transition-all duration-200 hover:border-[#9945FF]/50 hover:bg-white/10"
            >
              {/* Hero Image */}
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#9945FF]/20 to-[#0052FF]/20">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#9945FF]/10 text-[#9945FF] rounded">
                    {post.category}
                  </span>
                  <p className="text-sm text-gray-400">{formatDate(post.publishDate)}</p>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mb-3 text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#9945FF] group-hover:to-[#0052FF] group-hover:bg-clip-text transition-all">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="mb-4 text-gray-300 leading-relaxed">
                  {getExcerpt(post.description)}
                </p>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#9945FF] transition-colors hover:text-purple-300"
                  >
                    Read article →
                  </Link>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
          <p className="text-gray-400">
            No articles yet. Check back soon for updates!
          </p>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <BlogContent />
    </Suspense>
  );
}
