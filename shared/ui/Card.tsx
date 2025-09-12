"use client";

import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export function Card({ title, className, children }: CardProps) {
  return (
    <section
      className={
        "rounded-xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg " +
        (className ?? "")
      }
    >
      {title ? (
        <header className="px-4 py-3 border-b border-white/20">
          <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
        </header>
      ) : null}
      <div className="p-4">{children}</div>
    </section>
  );
}
