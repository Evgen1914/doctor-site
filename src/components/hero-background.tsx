"use client";

import NeuroNoise from "@/components/ui/neuro-noise";

export function HeroBackground() {
  return (
    <NeuroNoise
      colorFront="#22D3EE"
      colorMid="#0891B2"
      colorBack="#F0FDFA"
      brightness={0.85}
      contrast={0.25}
      speed={0.3}
      scale={1.2}
      rotation={0}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.15,
      }}
    />
  );
}
