import type { Metadata } from "next";
import { CryptoPrices } from "@/src/widgets/crypto-prices/ui/CryptoPrices";
import { NewsFeed } from "@/src/widgets/news/ui/NewsFeed";
import { getTopCoins, getTrendingCoins } from "@/src/shared/api/coingecko";

export const metadata: Metadata = {
  title: "Market Dashboard",
  description: "Top crypto prices and trending coins.",
};

export default async function MarketPage() {
  // Получаем данные параллельно с Promise.allSettled
  const [cryptoPricesResult, trendingCoinsResult] = await Promise.allSettled([
    getTopCoins("usd", 10),
    getTrendingCoins(),
  ]);

  // Извлекаем данные и ошибки
  const cryptoPricesData =
    cryptoPricesResult.status === "fulfilled" ? cryptoPricesResult.value : [];
  const cryptoPricesError =
    cryptoPricesResult.status === "rejected" ? cryptoPricesResult.reason : null;

  const trendingCoinsData =
    trendingCoinsResult.status === "fulfilled" ? trendingCoinsResult.value : { coins: [] };
  const trendingCoinsError =
    trendingCoinsResult.status === "rejected" ? trendingCoinsResult.reason : null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Market Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <CryptoPrices data={cryptoPricesData} error={cryptoPricesError} />
        </div>
        <div className="md:col-span-2">
          <NewsFeed data={trendingCoinsData} error={trendingCoinsError} />
        </div>
      </div>
    </main>
  );
}
