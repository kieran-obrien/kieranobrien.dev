const ProjectCard = ({ title, skills, color }) => (
  <div className="flex flex-col justify-center items-center bg-muted rounded-2xl shadow-2xl/60 p-5 hover:shadow-2xl/90 transition-all group-hover:blur-xs hover:!blur-none hover:scale-110 transition duration-150">
    <img src="./placeholder.png" className="w-md h-md rounded-lg"></img>
    <h3 className={`w-full text-center text-xl font-semibold mb-3 p-3`}>{title}</h3>
  </div>
);

export default ProjectCard;
