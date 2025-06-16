const SkillCard = ({ title, skills, color, mobileFull = false }) => (
  <div
    className={`
      bg-muted rounded-2xl shadow-2xl/60 hover:shadow-2xl/90 transition-all 
      group-hover:blur-xs hover:!blur-none hover:scale-105 duration-150 
      overflow-y-auto snap-start shrink-0 
      ${mobileFull ? "w-screen h-screen" : "max-h-[85vh]"}
    `}
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <ul className="text-sm text-muted-foreground flex flex-col gap-3 pb-20">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="tooltip tooltip-bottom hover:scale-110 transition duration-150"
          style={{ "--tt-bg": "transparent" }}
        >
          <div className="lg:block tooltip-content bg-transparent -translate-y-7/10 lg:-translate-y-9/10">
            <div
              className={`${color} text-sm font-[IBM_Plex_Mono] font-black p-2`}
            >
              {skill.props.title}
            </div>
          </div>
          <li className="m-2 sm:m-4">{skill}</li>
        </div>
      ))}
    </ul>
  </div>
);

export default SkillCard;
