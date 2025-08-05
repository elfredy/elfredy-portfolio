// components/AnimatedBackgroundDots.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackgroundDots() {
  const [dots, setDots] = useState<{ x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
          initial={{
            x: dot.x,
            y: dot.y,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}