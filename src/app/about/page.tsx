"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollY(scrollRef.current.scrollTop);
      }
    };
    const current = scrollRef.current;
    current?.addEventListener("scroll", handleScroll);
    return () => current?.removeEventListener("scroll", handleScroll);
  }, []);

  // opacity değeri yukarıda 1, aşağı indikçe 0.5'e düşüyor (daha fazla değil)
  const dynamicOpacity = Math.max(1 - scrollY / 400, 0.5);

  return (
    <main className="pt-40 px-8 max-w-7xl mx-auto h-[80vh] md:flex gap-12 overflow-hidden">
      {/* Sol Taraf - Sabit Fotoğraf */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-start">
        <motion.img
          src="/me.png"
          alt="Farid Najafov"
          className="w-120 h-120 rounded-full shadow-xl object-cover sticky top-40"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Sağ Taraf - Scroll + Fade */}
      <motion.div
        ref={scrollRef}
        className="md:w-1/2 h-full overflow-y-auto pr-4 scrollbar-none relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <div
          className="text-lg leading-relaxed transition-opacity duration-300"
          style={{ opacity: dynamicOpacity }}
        >
          <h1 className="text-4xl font-extrabold mb-4">Farid Najafov</h1>
          <p>
            5+ illik İT sahəsində təcrübəyə malik bir Front-end developer və IT
            mütəxəssisi olaraq həm yerli, həm də beynəlxalq bazarda çalışıram.
            Azərbaycan Dövlət Aviasiya Akademiyasında “İnformasiya
            texnologiyaları və sistemləri mühəndisliyi” ixtisası üzrə bakalavr
            təhsilimi, Odlar Yurdu Universitetində isə “İdarəetmədə informasiya
            sistemləri mühəndisliyi” üzrə magistr təhsilimi tamamlamışam. <br />{" "}
            <br />
            Karyeram boyunca 2.5 il Gocreative şirkətində Front-end developer
            kimi fəaliyyət göstərmişəm. Paralel olaraq Odlar Yurdu və Bakı
            Biznes Universitetlərində müəllim kimi dərs demişəm. Hazırda Abşeron
            Rayon Mərkəzi Xəstəxanasında İnformasiya Texnologiyaları şöbəsinin
            müdiri vəzifəsində çalışıram. <br /> <br />
            React, Next.js, TypeScript, JavaScript, HTML/CSS, SCSS və digər
            müasir texnologiyalar üzərində işləyirəm. Gördüyüm işlərdə
            performans, təhlükəsizlik və istifadəçi təcrübəsini hər zaman ön
            planda tuturam. Təkcə kodlaşdırma deyil, həm də komanda idarəçiliyi,
            sistemlərin avtomatlaşdırılması və texniki qərarvermə sahələrində də
            aktiv fəaliyyət göstərirəm. <br /> <br />
            Məqsədim – estetik və funksional layihələr yaratmaqla yanaşı,
            innovativ düşüncə ilə qlobal səviyyədə tanınan bir mütəxəssisə
            çevrilməkdir.
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </motion.div>
    </main>
  );
}
