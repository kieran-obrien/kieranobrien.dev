import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const langs = [
    <i
      title="JavaScript"
      className="devicon-javascript-plain skill-icon-core text-5xl text-[var(--primary)]"
    ></i>,
    <i
      title="Python"
      class="devicon-python-plain skill-icon-core text-5xl text-[var(--primary)]"
    ></i>,
    <i
      title="C"
      class="devicon-c-plain skill-icon-core text-5xl text-[var(--primary)]"
    ></i>,
    <i
      title="GD Script"
      class="devicon-godot-plain skill-icon-core text-5xl text-[var(--primary)]"
    ></i>,
  ];

  const frontend = [
    <i
      title="React"
      className="devicon-react-original skill-icon text-5xl"
    ></i>,
    <i
      title="HTML"
      className="devicon-html5-plain-wordmark skill-icon text-5xl"
    ></i>,
    <i title="CSS" class="devicon-css3-plain-wordmark skill-icon text-5xl"></i>,
    <i
      title="Tailwind CSS"
      class="devicon-tailwindcss-original skill-icon text-5xl"
    ></i>,
    <i
      title="Bootstrap CSS"
      class="devicon-bootstrap-plain skill-icon text-5xl"
    ></i>,
  ];

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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[var(--accent)]">
        <SkillCard title="Core Languages" skills={langs} />
        <SkillCard title="Frontend" skills={frontend} />
        <SkillCard title="Backend" skills={backend} />
        <SkillCard title="Tools & Workflow" skills={tools} />
      </div>
    </section>
  );
};

export default SkillsSection;
