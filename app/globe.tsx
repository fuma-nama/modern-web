"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    const renderer = createGlobe(canvas, {
      devicePixelRatio: 1,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 1, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => renderer.destroy();
  });

  return <canvas ref={canvasRef} width={1000} height={1000} />;
}
