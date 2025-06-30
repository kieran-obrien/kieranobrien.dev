import ProjectCard from "./projects-section/ProjectCard";
import { project1, project2 } from "./projects-section/ProjectSkills";

export default function OtherTest() {
  return (
    <div className="snap-start h-screen w-full flex flex-col items-center justify-start px-5">
      <h2 className="text-3xl sm:text-4xl font-bold font-[IBM_Plex_Mono] text-center my-4">
        Projects
      </h2>
      <div className="grow-1 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full h-full max-w-3xl mb-5">
        <div className="flex h-full gap-8">
          <ProjectCard
            title="Starstuf"
            skills={project1}
            carId={1}
            repo="https://github.com/kieran-obrien/starstuf"
            url="https://starstuf.app"
          />
          <ProjectCard title="Project 2" skills={project2} carId={2} />
        </div>
      </div>
    </div>
  );
}
