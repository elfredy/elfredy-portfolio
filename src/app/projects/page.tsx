"use client";

import { useEffect, useState } from "react";
import { getProjects, Project } from "@/lib/firestore";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto pt-32">
      <h1 className="text-4xl font-extrabold mb-12 text-center">Projelerim</h1>

      {loading ? (
        <p className="text-center text-gray-500">Yükleniyor...</p>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </div>
  );
}