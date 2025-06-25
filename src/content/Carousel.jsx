// Carousel.jsx
const cards = [
  { id: 1, title: "Card 1", content: "This is the first card." },
  { id: 2, title: "Card 2", content: "This is the second card." },
  { id: 3, title: "Card 3", content: "This is the third card." },
  { id: 4, title: "Card 4", content: "This is the fourth card." },
  { id: 5, title: "Card 5", content: "This is the fifth card." },
];

import SkillCard from "./skills-section/SkillCard";
import { langs, frontend, backend, tools, other } from "./skills-section/Skills";

export default function Carousel() {
  return (
    <div className="snap-start h-screen w-full flex items-center justify-center">
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory w-full max-w-3xl">
        <div className="flex">
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
