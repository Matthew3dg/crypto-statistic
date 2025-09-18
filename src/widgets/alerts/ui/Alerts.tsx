"use client";

import { Card } from "@/src/shared/ui/Card";
import { formatNumber } from "@/src/shared/lib/format";
import { useState } from "react";

export function Alerts() {
  const [alerts, setAlerts] = useState<Array<{ id: number; symbol: string; price: number }>>([
    { id: 1, symbol: "BTC", price: 60000 },
  ]);

  return (
    <Card title="Price Alerts">
      <div className="text-sm text-zinc-500">Basic placeholders for alerts.</div>
      <ul className="mt-3 space-y-2">
        {alerts.map((a) => (
          <li key={a.id} className="flex justify-between text-sm">
            <span>
              {a.symbol} alert at{" "}
              <span className="tabular-nums">
                ${formatNumber(a.price, { maximumFractionDigits: 2 })}
              </span>
            </span>
            <button
              className="text-xs text-red-600 hover:underline"
              onClick={() => setAlerts((s) => s.filter((x) => x.id !== a.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="mt-3 rounded-md bg-zinc-900 text-white px-3 py-1.5 text-xs"
        onClick={() => setAlerts((s) => [...s, { id: Date.now(), symbol: "ETH", price: 4000 }])}
      >
        Add example alert
      </button>
    </Card>
  );
}
