"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;

    setMounted(true);
    const context = canvas.getContext("2d")!;

    const container = document.getElementById("stars-container")!;

    const W = 5;
    const P = 0;

    function init() {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      context.fillStyle = "#ffffff0d";
    }

    function draw() {
      const center = canvas.width / 2;
      context.save();

      for (let x = 0; x < canvas.width; x += W + P * 2) {
        const r = Math.random();

        if (r >= 0.5 - Math.abs(x - center) / canvas.width) continue;

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(x + P, 0);

        if (r >= 0.1) {
          context.clearRect(0, 0, W, canvas.height);
          continue;
        }

        context.fillRect(0, 0, W, canvas.height);
      }

      context.restore();
    }

    const onResize = () => {
      init();
    };

    init();
    window.addEventListener("resize", onResize);
    const id = setInterval(() => draw(), 100);

    return () => {
      window.removeEventListener("resize", onResize);
      clearInterval(id);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      width={500}
      height={500}
      className={clsx(
        "absolute inset-0 z-[-2] w-full h-full",
        mounted && "animate-in fade-in duration-1000"
      )}
    />
  );
}
