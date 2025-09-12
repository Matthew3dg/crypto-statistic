"use client";

import { configureStore } from "@reduxjs/toolkit";
import { coingeckoApi } from "@/shared/api/coingecko";

export const makeStore = () =>
  configureStore({
    reducer: {
      [coingeckoApi.reducerPath]: coingeckoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coingeckoApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
