import { getProjects, Project } from "@/lib/firestore";
import ProjectsGrid from "./ProjectsGrid";

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <div className="p-8 max-w-7xl mx-auto pt-32">
      <h1 className="text-4xl font-extrabold mb-12 text-center">Projelerim</h1>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
