import { ProjectCard } from "./ProjectCard";
import projects, { type Project } from "./utilities/projects.ts";

export function ProjectCardsContainer() {
  return (
    <section id="portfolio" className="">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}