import { getTopCoins, type CoinMarket } from "@/src/shared/api/coingecko";
import { formatNumber } from "@/src/shared/lib/format";
import { Card } from "@/src/shared/ui/Card";
import Image from "next/image";

export async function CryptoPrices() {
  let data: CoinMarket[] = [];
  let error: string | null = null;

  try {
    data = await getTopCoins("usd", 10);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load data";
  }

  return (
    <Card title="Top Crypto Prices">
      {error ? (
        <div className="text-sm text-red-600">{error}</div>
      ) : (
        <ul className="divide-y divide-zinc-200">
          {data.map((coin) => (
            <li key={coin.id} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full"
                />
                <div className="text-sm text-zinc-800">
                  {coin.name} <span className="text-zinc-500">({coin.symbol.toUpperCase()})</span>
                </div>
              </div>
              <div className="text-sm tabular-nums">
                ${formatNumber(coin.current_price, { maximumFractionDigits: 2 })}
                {coin.price_change_percentage_24h != null && (
                  <span
                    className={
                      "ml-2 text-xs " +
                      (coin.price_change_percentage_24h >= 0 ? "text-emerald-600" : "text-red-600")
                    }
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
