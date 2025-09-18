import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CoinMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  market_cap: number;
};

type TrendingCoin = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number | null;
  thumb: string;
  small: string;
  large: string;
  price_btc: number;
  data?: {
    price: number;
    price_btc: string;
    price_change_percentage_24h: Record<string, number>;
    market_cap: string;
    market_cap_btc: string;
    total_volume: string;
    total_volume_btc: string;
    sparkline: string;
    content?: {
      title: string;
      description: string;
    } | null;
  };
};

type TrendingResponse = {
  coins: Array<{
    item: TrendingCoin;
  }>;
};

type SimplePriceResponse = Record<string, Record<string, number>>;

export const coingeckoApi = createApi({
  reducerPath: "coingeckoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCoins: builder.query<CoinMarket[], { currency: string; perPage?: number }>({
      query: ({ currency, perPage = 20 }) =>
        `/coins/markets?vs_currency=${encodeURIComponent(
          currency
        )}&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&price_change_percentage=24h`,
    }),
    getTrending: builder.query<TrendingResponse, void>({
      query: () => "/search/trending",
    }),
    getSimplePrice: builder.query<SimplePriceResponse, { ids: string[]; vsCurrencies: string[] }>({
      query: ({ ids, vsCurrencies }) =>
        `/simple/price?ids=${encodeURIComponent(ids.join(","))}&vs_currencies=${encodeURIComponent(
          vsCurrencies.join(",")
        )}`,
    }),
  }),
});

export const { useGetTopCoinsQuery, useGetTrendingQuery, useGetSimplePriceQuery } = coingeckoApi;

export type { CoinMarket, TrendingCoin };
