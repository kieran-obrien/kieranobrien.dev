const SkillCard = ({ title, skills }) => (
  <div className="bg-muted dark:bg-muted-foreground/10 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
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
