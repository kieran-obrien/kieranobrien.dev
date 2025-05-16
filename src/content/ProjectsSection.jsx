import ProjectCard from "./ProjectCard";
import { langs, frontend, backend, tools, other } from "./Skills";

import { project1 } from "./ProjectSkills";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold font-[IBM_Plex_Mono] text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 text-[var(--fg)] group">
        <ProjectCard title="Project 1" skills={project1} />
        <ProjectCard title="Project 2" skills={frontend} />
      </div>
    </section>
  );
};

export default ProjectsSection;
