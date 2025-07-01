import SkillCard from "./skills-section/SkillCard";
import {
  langs,
  frontend,
  backend,
  tools,
  other,
} from "./skills-section/Skills";

export default function Carousel() {
  return (
    <div className="snap-start lg:h-screen w-full flex flex-col items-center justify-start">
      <h2 className="text-3xl sm:text-4xl font-bold font-[IBM_Plex_Mono] text-center my-4">
          Tech Stack/Skills
        </h2>
      <div className="grow-1 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full max-w-5xl">
        <div className="flex h-full sm:justify-center gap-4 sm:gap-10">
          <SkillCard
            title="Core"
            skills={langs}
            color="text-[var(--primary)]"
            mobileFull
          />
          <SkillCard
            title="Frontend"
            skills={frontend}
            color="text-[var(--secondary)]"
            mobileFull
          />
          <SkillCard
            title="Backend"
            skills={backend}
            color="text-[var(--accent)]"
            mobileFull
          />
          <SkillCard
            title="Tools"
            skills={tools}
            color="text-[var(--highlight)]"
            mobileFull
          />
          <SkillCard
            title="Other"
            skills={other}
            color="text-[var(--primary)]"
            mobileFull
          />
        </div>
      </div>
    </div>
  );
}
