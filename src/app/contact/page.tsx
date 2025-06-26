"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Mesaj başarıyla gönderildi!");
        setForm({ name: "", email: "", message: "" }); // input temizleme
      } else {
        alert("Gönderim başarısız oldu!");
      }
    } catch (err) {
      console.error("Gönderim hatası:", err);
      alert("Sunucu hatası oluştu!");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-8 pt-40 pb-20">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sol Kısım - Sosyal Medya */}
        <div className="md:w-2/5 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Əlaqə</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Mənimlə işləmək, əməkdaşlıq etmək və ya sadəcə salam vermək
            istəyirsinizsə, mesaj göndərməkdən çəkinməyin. Hər bir geri dönüş
            mənim üçün dəyərlidir
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ferid-necefov-342a8a204/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-700"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href="https://facebook.com/ferid.najafoff"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FacebookIcon /> Facebook
            </a>
            <a
              href="https://instagram.com//ferid.najafov/"
              target="_blank"
              className="flex items-center gap-2 hover:text-pink-500"
            >
              <InstagramIcon /> Instagram
            </a>

            <a
              href="https://github.com/elfredy"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>

        {/* Sağ Kısım - Form */}
        <div className="md:w-3/5 bg-white/70 dark:bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">İletişim Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Ad Soyad"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Mesajınız"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="inline-block mt-6 cursor-pointer px-6 py-3 rounded-md text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
