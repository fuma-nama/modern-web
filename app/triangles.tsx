"use client";
import { useEffect, useRef } from "react";

export function Triangles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;

    const context = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.fillStyle = "#ffffff0d";
    const W = 30;
    const P = 2;

    function draw() {
      context.save();
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < canvas.height; y += W + P * 2) {
        for (let x = 0; x < canvas.width; x += W + P * 2) {
          const hide = Math.random() >= 0.2;
          if (hide) continue;

          context.setTransform(1, 0, 0, 1, 0, 0);

          context.translate(x + P, y + P);
          context.fillRect(0, 0, W, W);
        }
      }

      context.restore();
    }

    const id = setInterval(() => draw(), 400);

    return () => clearInterval(id);
  }, []);

  return (
    <canvas
      ref={ref}
      width={500}
      height={500}
      className="absolute inset-0 z-[-2] animate-in fade-in"
    />
  );
}
