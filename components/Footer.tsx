import Link from "next/link";
import { Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-8 lg:px-12">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Solbase. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/privacy"
            className="text-gray-400 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 transition-colors hover:text-white"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/SolBaseApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="X / Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://discord.gg/UWRT83TE"
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
