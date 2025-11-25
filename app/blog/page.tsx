export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 text-white sm:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Blog
        </h1>
        <p className="text-lg text-gray-300">
          News and updates from Solbase
        </p>
      </div>

      {/* Article Grid - Placeholder for future articles */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Article Card Template (hidden for now, will be used when adding articles) */}
        {/*
        <article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10">
          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
          <div className="p-6">
            <p className="mb-2 text-sm text-gray-400">January 1, 2025</p>
            <h2 className="mb-3 text-xl font-bold text-white">Article Title</h2>
            <p className="mb-4 text-gray-300">
              Brief excerpt of the article content goes here...
            </p>
            <a
              href="/blog/article-slug"
              className="inline-flex items-center text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Read more →
            </a>
          </div>
        </article>
        */}
      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
        <p className="text-gray-400">
          No articles yet. Check back soon for updates!
        </p>
      </div>
    </div>
  );
}
