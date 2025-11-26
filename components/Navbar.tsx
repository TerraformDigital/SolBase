"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const WalletButton = dynamic(
  () => import("@/components/WalletButton").then((mod) => ({ default: mod.WalletButton })),
  { ssr: false }
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/solbase-logo.png"
            alt="Solbase"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#9945FF] to-[#0052FF] bg-clip-text text-transparent">
            Solbase
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/launch"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Launch
          </Link>
          <Link
            href="/tokens"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Tokens
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Docs
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>

        {/* Desktop Wallet Button */}
        <div className="hidden md:block">
          <WalletButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/launch"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Launch
            </Link>
            <Link
              href="/tokens"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Tokens
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Blog
            </Link>
            <div className="pt-2">
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
