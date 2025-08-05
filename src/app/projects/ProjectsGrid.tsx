"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/firestore";
import { motion } from "framer-motion";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [delays, setDelays] = useState<number[]>([]);

  useEffect(() => {
    // Delay değerlerini sadece client tarafında hesapla
    const computedDelays = projects.map((_, i) => i * 0.1);
    setDelays(computedDelays);
  }, [projects]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: delays[index] ?? 0,
          }}
          className="rounded-xl shadow-lg overflow-hidden bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-black/20 transition hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              Siteye Git →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}