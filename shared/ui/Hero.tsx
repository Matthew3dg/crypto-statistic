"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let active = true;
    // Load local animation to avoid external 403 errors.
    fetch("/animations/hero.json")
      .then((res) => res.json())
      .then((json: unknown) => {
        if (active) setAnimationData(json as object);
      })
      .catch(() => {
        // no-op; hero works without animation
      });
    return () => {
      active = false;
    };
  }, []);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop autoplay />;
}
