"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const [animationData, setAnimationData] = useState<any | null>(null);

  useEffect(() => {
    let active = true;
    // Free animation from LottieFiles (royalty-free). If it ever changes, UI still works.
    fetch("https://assets3.lottiefiles.com/packages/lf20_q5pk6p1k.json")
      .then((res) => res.json())
      .then((json) => {
        if (active) setAnimationData(json);
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
