import { ProjectsPageContent } from "@/components/projects";
import { getProjects } from "@/lib/notion";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsPageContent projects={projects} />;
}
