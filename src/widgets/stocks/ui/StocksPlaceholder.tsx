"use client";

import { Card } from "@/src/shared/ui/Card";

export function StocksPlaceholder() {
  return (
    <Card title="Stocks (Alpha Vantage)">
      <div className="text-sm text-zinc-500">
        Connect Alpha Vantage (API key required) to fetch stock quotes. For now this is a
        placeholder.
      </div>
    </Card>
  );
}
