"use client";

import React from "react";
import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LoginButton = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Giriş başarılı");
    } catch (error) {
      console.error("Giriş hatası", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Google ile Giriş Yap
    </button>
  );
};

export default LoginButton;
