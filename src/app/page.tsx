import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/src/shared/ui/Hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to CryptoHub — track markets and convert currencies.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-50">
        <Hero />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Your Gateway to Crypto Markets
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Real-time prices, trending coins, and an easy converter — all in one place.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/market"
            className="group inline-flex items-center justify-center rounded-xl bg-white/90 text-zinc-900 px-6 py-3 text-sm font-semibold shadow-lg backdrop-blur hover:bg-white transition transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Market Dashboard
          </Link>
          <Link
            href="/converter"
            className="group inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/20 text-white px-6 py-3 text-sm font-semibold shadow-lg backdrop-blur hover:bg-white/30 transition transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Converter
          </Link>
        </div>
      </div>
    </main>
  );
}
