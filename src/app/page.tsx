"use client";

import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";

export default function Home() {
  const { loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-8 pt-45 max-w-7xl mx-auto">
      {/* Sağ Taraf (Yazılar) */}
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Farid{" "}
            <span className="text-blue-600 dark:text-blue-400">Najafov</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg mt-4 max-w-2xl"
        >
          Mən Milli Aviasiya Akademiyasında bakalavr, Odlar Yurdu
          Universitetində magistr təhsili almış Front-end developer və IT
          mütəxssisiyəm. 4+ illik təcrübəmlə React və Next.js kimi
          texnologiyalarla funksional və estetik layihələr hazırlayıram. Hazırda
          xəstəxanada IT şöbə müdiri və universitetlərdə müəllim kimi fəaliyyət
          göstərirəm.
        </motion.p>

        <motion.a
          href="/projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block mt-6 px-6 py-3 rounded-md text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
        >
          Layihələrimə göz at
        </motion.a>
      </div>

      {/* Sol Taraf (Görsel) */}
      <div className="flex-1">
        <motion.img
          src="/hero.png"
          alt="Hero Görseli"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-lg dark:shadow-blue-500/30"
        />
      </div>
    </section>
  );
}
