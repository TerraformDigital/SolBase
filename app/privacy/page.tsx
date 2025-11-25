export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-white sm:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-gray-400">
          Last updated: {currentDate}
        </p>
      </div>

      {/* Content */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <p className="text-gray-300">
          Privacy policy content coming soon...
        </p>
      </div>
    </div>
  );
}
