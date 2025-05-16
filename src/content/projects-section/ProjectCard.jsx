const ProjectCard = ({ title, skills, color }) => (
  <div className="flex flex-col justify-start items-center bg-muted rounded-2xl shadow-2xl/60 p-5 hover:shadow-2xl/90 transition-all group-hover:blur-xs hover:!blur-none hover:scale-110 transition duration-150">
    <img src="./placeholder.png" className="w-md h-md rounded-lg"></img>
    <h3 className={`w-full text-center text-xl font-semibold mb-3 p-3`}>
      {title}
    </h3>
    <div className="flex flex-wrap xs:w-75 justify-center items-center gap-2">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
    <p className="text-left p-4">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat."
    </p>
  </div>
);

export default ProjectCard;
