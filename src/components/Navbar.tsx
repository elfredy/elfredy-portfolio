"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import useAuth from "@/hooks/useAuth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white/60 dark:bg-black/60 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <Link href="/">
          <img src="/logomaster.png" alt="Logo" className="w-20 h-20" />
        </Link>
        <span className="text-xl font-bold">Elfredy</span>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        {user && <Link href="/admin">Admin</Link>}
        <ThemeToggle />
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
}
