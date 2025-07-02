import ProjectCard from "./ProjectCard";
import {
  starstufSkills,
  airbncBackendSkills,
} from "./ProjectSkills";
import {
  starstufImages,
  airbncBackendImages,
} from "./ProjectImages";

export default function ProjectsSection() {
  return (
    <div className="w-full flex flex-col items-center justify-start px-5">
      <h2 className="text-3xl sm:text-4xl font-bold font-[IBM_Plex_Mono] text-center my-4 lg:my-8">
        Projects
      </h2>
      <div className="grow-1 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full h-full max-w-3xl mb-5">
        <div className="flex h-full gap-8">
          <ProjectCard
            title="Starstuf"
            skills={starstufSkills}
            carId={1}
            blurb={
              "Starstuf is a 3D solar system simulator built with Vanilla JavaScript, Bootstrap CSS, Vite, and WebGL (via Three.js)."
            }
            repo="https://github.com/kieran-obrien/starstuf"
            url="https://starstuf.app"
            images={starstufImages}
          />
          <ProjectCard
            title="AirBNC - Backend"
            skills={airbncBackendSkills}
            carId={2}
            blurb={
              "AirBNC is my capstone project for the Northcoders Software Development with Javascript course."
            }
            repo="https://github.com/kieran-obrien/airbnc-backend"
            url="https://airbnc-backend.kieranobrien.dev"
            images={airbncBackendImages}
          />
        </div>
      </div>
    </div>
  );
}
