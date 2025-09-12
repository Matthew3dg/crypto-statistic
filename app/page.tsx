import { CryptoPrices } from "@/widgets/crypto-prices/ui/CryptoPrices";
import { NewsFeed } from "@/widgets/news/ui/NewsFeed";
import { Converter } from "@/widgets/converter/ui/Converter";
import { Portfolio } from "@/widgets/portfolio/ui/Portfolio";
import { Alerts } from "@/widgets/alerts/ui/Alerts";
import { StocksPlaceholder } from "@/widgets/stocks/ui/StocksPlaceholder";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Market Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CryptoPrices />
        </div>
        {/* <div>
          <Portfolio />
        </div> */}
        <div>
          <Converter />
        </div>
        {/* <div>
          <Alerts />
        </div> */}
        <div className="lg:col-span-2">
          <NewsFeed />
        </div>
        {/* <div>
          <StocksPlaceholder />
        </div> */}
      </div>
    </main>
  );
}
