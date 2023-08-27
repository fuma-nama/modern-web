"use client";

import { useEffect, useRef, useState } from "react";

export function Cards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <Card title="Focus on Your Job" />
      <Card title="Build something cool" />
      <Card title="Move fast break nothing" />
      <Card title="Modern solutions for modern problems" />
      <Card title="Stop wasting time on DevOP" />
      <Card title="Use google correctly" />
    </div>
  );
}

function Card({ title }: { title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<[x: number, y: number]>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const listener = (e: MouseEvent) => {
      const bounding = element.getBoundingClientRect();
      setPos([e.x - bounding.x, e.y - bounding.y]);
      e.preventDefault();
      e.stopPropagation();
    };

    element.addEventListener("mousemove", listener);
    return () => element.removeEventListener("mousemove", listener);
  });

  return (
    <div
      ref={ref}
      className="relative group bg-gradient-to-br from-black to-blue-950 font-extrabold overflow-hidden p-10 rounded-2xl z-[2]"
    >
      <p className="text-4xl text-white mix-blend-difference">{title}</p>
      {pos && (
        <div
          className="absolute w-20 h-[500%] bg-white transition-opacity z-[-1] opacity-0 group-hover:opacity-100"
          style={{
            top: `${pos[1]}px`,
            left: `${pos[0]}px`,
            transform: `translate(-50%, -50%) rotateZ(45deg)`,
          }}
        />
      )}
    </div>
  );
}
