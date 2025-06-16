import SkillCard from "./SkillCard";
import { langs, frontend, backend, tools, other } from "./Skills";

const SkillsSection = () => {
  return (
    <div className="snap-start h-screen">
      <section id="skills" className="py-5 px-4 max-w-6xl mx-auto h-full">
        <h2 className="text-4xl font-bold font-[IBM_Plex_Mono] text-center mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-8 text-[var(--fg)] group">
          <SkillCard
            title="Core"
            skills={langs}
            color="text-[var(--primary)]"
          />
          <SkillCard
            title="Frontend"
            skills={frontend}
            color="text-[var(--secondary)]"
          />
          <SkillCard
            title="Backend"
            skills={backend}
            color="text-[var(--accent)]"
          />
          <SkillCard
            title="Tools"
            skills={tools}
            color="text-[var(--highlight)]"
          />
          <SkillCard
            title="Other"
            skills={other}
            color="text-[var(--primary)]"
          />
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
