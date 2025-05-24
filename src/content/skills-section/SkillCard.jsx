const SkillCard = ({ title, skills, color }) => (
  <div className="bg-muted rounded-2xl shadow-2xl/60 p-5 hover:shadow-2xl/90 transition-all group-hover:blur-xs hover:!blur-none hover:scale-110 transition duration-150">
    <h3 className={`text-xl font-semibold mb-3`}>{title}</h3>
    <ul className="space-y-1 text-sm text-muted-foreground ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="tooltip tooltip-bottom hover:scale-120 transition duration-150"
          style={{ "--tt-bg": "transparent" }}
        >
          <div className="lg:block tooltip-content bg-transparent -translate-y-7/10 lg:-translate-y-9/10">
            <div
              className={`${color} text-sm font-[IBM_Plex_Mono] font-black p-2`}
            >
              {skill.props.title}
            </div>
          </div>
          <li className="m-4 sm:m-5 ">{skill}</li>
        </div>
      ))}
    </ul>
  </div>
);

export default SkillCard;
