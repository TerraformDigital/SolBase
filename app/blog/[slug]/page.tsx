import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import BlogPostContent from "@/components/BlogPostContent";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Solbase`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
