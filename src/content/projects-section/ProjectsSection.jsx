import ProjectCard from "./ProjectCard";
import { project1, project2 } from "./ProjectSkills";

const ProjectsSection = () => {
  return (
    <section id="projects" className="snap-start h-screen py-20 sm:px-5">
      <h2 className="text-4xl font-bold font-[IBM_Plex_Mono] text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 text-[var(--fg)] group">
        <ProjectCard
          title="Starstuf"
          skills={project1}
          carId={1}
          repo="https://github.com/kieran-obrien/starstuf"
          url="https://starstuf.app"
        />
        <ProjectCard title="Project 2" skills={project2} carId={2} />
      </div>
    </section>
  );
};

export default ProjectsSection;
