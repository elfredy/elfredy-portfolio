"use client";

import { db } from "@/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form verisi:", form);

    try {
      await addDoc(collection(db, "projects"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      alert("Proje başarıyla eklendi!");
      setForm({ title: "", image: "", description: "", url: "" });
    } catch (error) {
      console.error("Proje eklenemedi ❌", error);
      alert("Bir hata oluştu: " + (error as Error).message);
    }
  };


  return (
    <main className="max-w-2xl w-full mx-auto pt-45 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Yeni Proyekt Əlavə Et{" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 dark:bg-black/30 backdrop-blur-lg p-8 rounded-xl shadow-xl space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Proje Başlığı
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Örn: Portfolio Website"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Görsel URL</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Açıklama</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Projenin kısa açıklaması"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Proje Linki</label>
          <input
            type="text"
            name="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-block mt-6 w-full cursor-pointer px-6 py-3 rounded-md text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
        >
          Projeyi Əlavə Et
        </button>
      </form>
    </main>
  );
}
