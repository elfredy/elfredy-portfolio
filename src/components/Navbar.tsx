"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import useAuth from "@/hooks/useAuth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

export default function Navbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "Haqqımda" },
    { href: "/projects", label: "Proyektlər" },
    { href: "/contact", label: "Əlaqə" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-black/60 backdrop-blur-lg dark:shadow-blue-500/10 shadow-md">
      <div className="flex justify-between items-center py-4 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <img src="/logomaster.png" alt="Logo" className="w-20 h-20" />
          </Link>
          <span className="text-xl font-bold">Elfredy</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group text-base font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          {user && (
            <Link
              href="/admin"
              className="relative group text-base font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Admin
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          )}
          <ThemeToggle />
          {user ? <LogoutButton /> : <LoginButton />}
        </div>

        {/* Hamburger menu toggle */}
        <div className="md:hidden cursor-pointer">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform-gpu ${
          menuOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        } bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md px-6 pb-6 pt-2`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {link.label}
          </Link>
        ))}
        {user && (
          <Link
            href="/admin"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Admin
          </Link>
        )}
        <div className="mt-2">
          <ThemeToggle />
        </div>
        <div className="mt-2">{user ? <LogoutButton /> : <LoginButton />}</div>
      </div>
    </nav>
  );
}
