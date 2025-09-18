"use client";

import { useMemo, useState } from "react";
import { Card } from "@/src/shared/ui/Card";
import { formatNumber } from "@/src/shared/lib/format";
import { useGetSimplePriceQuery } from "@/src/shared/api/coingecko";

const DEFAULT_FROM = "bitcoin";
const DEFAULT_TO = "usd";

export function Converter() {
  const [fromId, setFromId] = useState(DEFAULT_FROM);
  const [toCurrency, setToCurrency] = useState(DEFAULT_TO);
  const [amount, setAmount] = useState<string>("1");

  const { data, isFetching } = useGetSimplePriceQuery({
    ids: [fromId],
    vsCurrencies: [toCurrency],
  });

  const rate = data?.[fromId]?.[toCurrency] ?? null;
  const parsedAmount = useMemo(() => Number(amount), [amount]);
  const output = rate != null && !Number.isNaN(parsedAmount) ? parsedAmount * rate : null;

  return (
    <Card title="Converter">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs text-zinc-500">From (coin id)</label>
          <input
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            value={fromId}
            onChange={(e) => setFromId(e.target.value.trim().toLowerCase())}
            placeholder="bitcoin"
          />
          <label className="block text-xs text-zinc-500 mt-2">Amount</label>
          <input
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs text-zinc-500">To (vs currency)</label>
          <input
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value.trim().toLowerCase())}
            placeholder="usd"
          />
          <div className="mt-6 text-sm">
            {isFetching ? (
              <span className="text-zinc-500">Fetching rate...</span>
            ) : output != null ? (
              <span className="font-medium">
                {formatNumber(output, { maximumFractionDigits: 6 })}
              </span>
            ) : (
              <span className="text-zinc-500">Enter valid amount / pair</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
