import HorizontalLine from "../HorizontalLine";

const ProjectCard = ({ title, skills, carId, repo, blurb, url, images }) => {
  return (
    <div
      className="flex flex-col h-full justify-start items-center p-5 bg-[var(--bg2)] rounded-lg
      overflow-y-hidden overflow-x-hidden shrink-0 w-full snap-center"
    >
      <div className="carousel w-50 h-50 sm:w-100 sm:h-100 lg:w-120 lg:h-120 rounded-lg border-solid border-2 border-[var(--bg)] hover:border-[var(--primary)]">
        <div id={`${carId}1`} className="carousel-item relative w-full">
          <img src={images[0]} className="w-full" />
          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                document.getElementById(`${carId}2`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle btn-xs sm:btn-sm border-none bg-[var(--primary)] hover:bg-[var(--secondary)] active:bg-[var(--muted)]"
            >
              <i className="ri-arrow-left-s-line text-lg sm:text-2xl"></i>
            </button>
            <button
              onClick={() =>
                document.getElementById(`${carId}2`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle btn-xs sm:btn-sm border-none bg-[var(--primary)] hover:bg-[var(--secondary)] active:bg-[var(--muted)]"
            >
              <i className="ri-arrow-right-s-line text-lg sm:text-2xl"></i>
            </button>
          </div>
        </div>
        <div id={`${carId}2`} className="carousel-item relative w-full">
          <img src={images[1]} className="w-full" />
          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                document.getElementById(`${carId}1`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle btn-xs sm:btn-sm border-none bg-[var(--primary)] hover:bg-[var(--secondary)] active:bg-[var(--muted)]"
            >
              <i className="ri-arrow-left-s-line text-lg sm:text-2xl"></i>
            </button>
            <button
              onClick={() =>
                document.getElementById(`${carId}1`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle btn-xs sm:btn-sm border-none bg-[var(--primary)] hover:bg-[var(--secondary)] active:bg-[var(--muted)]"
            >
              <i className="ri-arrow-right-s-line text-lg sm:text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="m-2 mb-0 w-full rounded-md flex flex-row flex-wrap p-1 justify-between">
        <h3 className={`mt-2 text-xl font-semibold mb-3`}>{title}</h3>
        <div className="transition-all duration-300">
          <a
            href={repo}
            className="font-[IBM_Plex_Mono] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="Repo"
              className="ri-github-fill p-2 text-4xl align-middle text-[var(--primary)] text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"
            ></i>
          </a>

          <a
            href={url}
            className="font-[IBM_Plex_Mono] mr-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="App"
              className="ri-window-fill p-2 text-4xl align-middle text-[var(--primary)] text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"
            ></i>
          </a>
        </div>
      </div>
      <hr
        className={`block sm:mx-auto w-full mb-4 text-[var(--muted)]`}
      />

      <div className="flex flex-wrap xs:w-full justify-center items-center gap-1 sm:gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="hover:scale-115 transition duration-150 text-3xl sm:text-4xl"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-2 text-left p-2 w-full">{blurb}</p>
    </div>
  );
};

export default ProjectCard;
