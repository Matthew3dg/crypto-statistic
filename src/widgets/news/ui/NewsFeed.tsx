import { type TrendingResponse } from "@/src/shared/api/coingecko";
import { Card } from "@/src/shared/ui/Card";
import Image from "next/image";

interface NewsFeedProps {
  data: TrendingResponse;
  error: unknown;
}

export function NewsFeed({ data, error }: NewsFeedProps) {
  const errorMessage = error instanceof Error ? error.message : "Failed to load trending coins";

  return (
    <Card title="Trending Coins">
      {error ? (
        <div className="text-sm text-red-600">{errorMessage}</div>
      ) : (
        <ul className="space-y-3">
          {data?.coins.slice(0, 10).map((coin) => (
            <li key={coin.item.id} className="text-sm">
              <div className="flex items-center gap-2">
                <Image
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  width={16}
                  height={16}
                  className="w-4 h-4 rounded-full"
                />
                <div className="flex-1">
                  <div className="text-zinc-800 font-medium">
                    {coin.item.name} ({coin.item.symbol.toUpperCase()})
                  </div>
                  <div className="text-xs text-zinc-500">
                    Rank #{coin.item.market_cap_rank || "N/A"}
                    {coin.item.data?.price && (
                      <span className="ml-2">
                        ${coin.item.data.price.toFixed(2)}
                        {coin.item.data.price_change_percentage_24h?.usd && (
                          <span
                            className={`ml-1 ${
                              coin.item.data.price_change_percentage_24h.usd >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            ({coin.item.data.price_change_percentage_24h.usd >= 0 ? "+" : ""}
                            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%)
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
