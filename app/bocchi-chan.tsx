"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BocchiChan() {
  const [count, setCount] = useState<number>(0);

  const items: { id: number; image: string }[] = [];

  for (let i = 0; i < count; i++) {
    items.unshift({ id: i, image: `/bocchi_000${i}.png` });
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => (prev >= 7 ? prev : prev + 1));
    }, 300);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex flex-row w-[400px] h-[800px]">
      {items.map((item, i) => (
        <Image
          key={item.id}
          alt="bocchi"
          src={item.image}
          width={350}
          height={858}
          sizes="600px"
          className="min-w-[600px] absolute transition-transform duration-100 animate-in slide-in-from-top-40"
          style={{
            transform: `translateX(-${i * 50}px)`,
            zIndex: count - i,
          }}
        />
      ))}
    </div>
  );
}
