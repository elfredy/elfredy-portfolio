"use client";

import ThemeToggle from "@/components/ThemeToggle";
import useAuth from "@/hooks/useAuth";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogOutButton";
import { motion } from "framer-motion";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="relative flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.55 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="
    absolute inset-0
    bg-white/15 dark:bg-black/20 
    backdrop-blur-2xl 
    border border-white/40 dark:border-white/10 
    shadow-lg
    rounded-lg
    z-[-1]
  "
      ></motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center"
      >
        Elfredy 👑
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8 text-center"
      >
        Fullstack Developer • React • Next.js • Firebase
      </motion.h2>

      {user ? (
        <div className="flex flex-col items-center">
          <p>Hoşgeldin, {user.displayName}</p>
          <img
            src={user.photoURL || ""}
            alt="Profil"
            className="rounded-full w-20 h-20 mb-4"
          />
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </main>
  );
}
