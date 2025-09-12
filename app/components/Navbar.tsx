"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors " +
        (scrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-white/40 backdrop-blur")
      }
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-zinc-900">
            CryptoHub
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/market" className="text-zinc-800 hover:text-zinc-900 transition-colors">
              Market Dashboard
            </Link>
            <Link href="/converter" className="text-zinc-800 hover:text-zinc-900 transition-colors">
              Converter
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
