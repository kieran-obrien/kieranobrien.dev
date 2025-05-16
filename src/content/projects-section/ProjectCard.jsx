import HorizontalLine from "../HorizontalLine";

const ProjectCard = ({ title, skills, color }) => (
  <div className="flex flex-col justify-start items-center bg-muted rounded-2xl shadow-2xl/60 p-7  hover:shadow-2xl/90 transition-all group-hover:blur-xs hover:!blur-none hover:scale-110 transition duration-150">
    <img src="./placeholder.png" className="w-full h-md rounded-lg"></img>

    <div className="m-2 w-full rounded-md flex flex-row flex-wrap p-1 justify-between">
      <h3 className={`mt-2 text-xl font-semibold mb-3`}>{title}</h3>
      <div className="">
        <a href="https://google.com" className="font-[IBM_Plex_Mono]">
          <i
            title="Repo"
            class="ri-github-fill p-2 text-4xl align-middle text-[var(--primary)] text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"
          ></i>
        </a>
        <a href="https://google.com" className="font-[IBM_Plex_Mono] mr-3">
          <i
            title="App"
            class="ri-window-fill p-2 text-4xl align-middle text-[var(--primary)] text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"
          ></i>
        </a>
      </div>
    </div>
    <hr className="text-[var(--muted)] w-full  mb-6" />
    <div className="flex flex-wrap xs:w-full justify-center items-center gap-2">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
    <p className="mt-2 text-left p-2 w-full">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
);

export default ProjectCard;
