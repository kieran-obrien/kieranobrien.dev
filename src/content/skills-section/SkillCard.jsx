const SkillCard = ({ title, skills, color }) => (
  <div className="bg-muted rounded-2xl shadow-2xl/60 p-5 hover:shadow-2xl/90 transition-all group-hover:blur-xs hover:!blur-none hover:scale-110 transition duration-150">
    <h3 className={`text-xl font-semibold mb-3`}>{title}</h3>
    <ul className="space-y-1 text-sm text-muted-foreground">
      {skills.map((skill, index) => (
        <div
          className="tooltip tooltip-right"
          style={{ "--tt-bg": "transparent" }}
        >
          <div className="hidden lg:block tooltip-content bg-[var(--muted)]">
            <div className={`${color} text-md font-black p-2`}>
              {skill.props.title}
            </div>
          </div>
          <li
            key={index}
            className="m-6 hover:scale-120 transition duration-150"
          >
            {skill}
          </li>
        </div>
      ))}
    </ul>
  </div>
);

export default SkillCard;
