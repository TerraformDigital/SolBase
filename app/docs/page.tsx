import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata('/docs');

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-white sm:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Documentation
        </h1>
        <p className="text-lg text-gray-300">
          Learn how to use Solbase
        </p>
      </div>

      {/* Content */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <p className="text-gray-400">
          Documentation coming soon...
        </p>
      </div>
    </div>
  );
}
