import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const frontend = [
    [<i className="devicon-react-original skill-icon text-5xl"></i>, "React"],
    [<i className="devicon-javascript-plain skill-icon text-5xl"></i>, "JavaScript"],
  ];
  // const frontend = [["React", '<i class="devicon-react-original"></i>'], "HTML5", "CSS3 / SCSS", "Tailwind", "Vite"];
  const backend = [
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "PostgreSQL",
    "MongoDB",
  ];
  const tools = [
    "Git / GitHub",
    "Linux (Ubuntu / i3)",
    "Docker (Basics)",
    "VS Code",
    "Postman",
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard title="Frontend" skills={frontend} />
        <SkillCard title="Backend" skills={backend} />
        <SkillCard title="Tools & Workflow" skills={tools} />
      </div>
    </section>
  );
};

export default SkillsSection;
