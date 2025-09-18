"use client";

import { Card } from "@/src/shared/ui/Card";
import { formatNumber } from "@/src/shared/lib/format";

export function Portfolio() {
  // Placeholder portfolio balances and a tiny SVG chart stub
  const totalUsd = 12543.12;
  return (
    <Card title="Portfolio">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs text-zinc-500">Total value</div>
          <div className="text-2xl font-semibold mt-1">
            ${formatNumber(totalUsd, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        <svg width="140" height="48" viewBox="0 0 140 48" className="text-emerald-500">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points="0,40 20,35 40,38 60,32 80,28 100,30 120,20 140,24"
          />
        </svg>
      </div>
      <ul className="mt-4 divide-y divide-zinc-200">
        {[
          { name: "Bitcoin", symbol: "BTC", amount: 0.2, value: 2600 },
          { name: "Ethereum", symbol: "ETH", amount: 3.5, value: 5400 },
          { name: "Solana", symbol: "SOL", amount: 50, value: 2543.12 },
        ].map((a) => (
          <li key={a.symbol} className="flex justify-between py-2 text-sm">
            <span>
              {a.name} <span className="text-zinc-500">({a.symbol})</span>
            </span>
            <span className="tabular-nums">
              ${formatNumber(a.value, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
