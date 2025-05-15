const SkillCard = ({ title, skills }) => (
  <div className="bg-muted rounded-2xl shadow-2xl/60 p-5 hover:shadow-2xl/90 transition-all group-hover:blur-xs hover:!blur-none hover:scale-110 transition duration-150">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <ul className="space-y-1 text-sm text-muted-foreground">
      {skills.map((skill, index) => (
        <li key={index} className="font-mono">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
