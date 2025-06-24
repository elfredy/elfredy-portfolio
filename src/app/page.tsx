"use client";

import useAuth from "@/hooks/useAuth";

import { motion } from "framer-motion";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="relative flex flex-col justify-center items-center p-4 pt-32 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4 text-center"
      >
        Farid Najafov
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl text-gray-500 dark:text-gray-400 mb-4 text-center"
      >
        Fullstack Developer | React | Next.js | Firebase | Cloud
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl"
      >
        Fullstack web developer crafting modern, scalable, and secure
        applications with a focus on performance and global reach.
      </motion.p>
    </main>
  );
}
