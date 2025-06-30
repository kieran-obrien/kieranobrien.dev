const SkillCard = ({ title, skills, color, mobileFull = false }) => (
  <div
    className={`
      bg-[var(--bg)] rounded-2xl sm:shadow-2xl mb-5
      overflow-y-auto overflow-x-hidden shrink-0 w-full sm:w-40 snap-center
    `}
  >
    <h3 className="text-2xl sm:text-2xl font-semibold mt-4">{title}</h3>
    <ul className="text-xs text-muted-foreground flex flex-col justify-around align-center gap-1 pb-20 h-9/10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="tooltip tooltip-bottom hover:scale-110 transition duration-150"
          style={{ "--tt-bg": "transparent" }}
        >
          <div className="hidden lg:block tooltip-content bg-transparent -translate-y-7/10 lg:-translate-y-7/10">
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
