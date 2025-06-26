"use client";

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Çıkış yapıldı");
    } catch (error) {
      console.error("Çıkış hatası", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Çıkış
    </button>
  );
};

export default LogoutButton;
