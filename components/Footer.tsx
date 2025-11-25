import Link from "next/link";
import { Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 Solbase. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/solaboratory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="X / Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://discord.gg/solbase"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="Discord"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
