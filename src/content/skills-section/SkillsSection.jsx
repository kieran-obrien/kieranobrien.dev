import SkillCard from "./SkillCard";
import { langs, frontend, backend, tools, other } from "./Skills";

const SkillsSection = () => {
  return (
    <div className="group">
      {/* Mobile: Fullscreen horizontal snap carousel */}
      <div className="flex snap-x snap-mandatory sm:overflow-x-auto h-screen w-screen sm:hidden sm:snap-start scroll-smooth">
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

      {/* Desktop grid version */}
      <h2 className="text-4xl font-bold font-[IBM_Plex_Mono] text-center mb-12  snap-start">
        Tech Stack
      </h2>
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-8 text-[var(--fg)]">
        <SkillCard title="Core" skills={langs} color="text-[var(--primary)]" />
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
        <SkillCard title="Other" skills={other} color="text-[var(--primary)]" />
      </div>
    </div>
  );
};

export default SkillsSection;
