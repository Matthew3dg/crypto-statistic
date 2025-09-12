import type { Metadata } from "next";
import { CryptoPrices } from "@/widgets/crypto-prices/ui/CryptoPrices";
import { NewsFeed } from "@/widgets/news/ui/NewsFeed";

export const metadata: Metadata = {
  title: "Market Dashboard",
  description: "Top crypto prices and trending coins.",
};

export default function MarketPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Market Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <CryptoPrices />
        </div>
        <div className="md:col-span-2">
          <NewsFeed />
        </div>
      </div>
    </main>
  );
}
