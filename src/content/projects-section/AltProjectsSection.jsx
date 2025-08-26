export default function AltProjectsSection() {
  return (
    <div className="flex flex-col items-end">
      <div className="my-5 text-xl flex gap-2">
        <div>
          <i title="CSS" className="ri-home-smile-line text-error text-2xl"></i>
          <a
            href="https://github.com/kieran-obrien/AirBNC-Backend"
            className="font-[IBM_Plex_Mono] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="Repo"
              className="ri-github-fill text-2xl text-error hover:text-primary"
            ></i>
          </a>
          <a
            href="https://airbnc-backend.kieranobrien.dev"
            className="font-[IBM_Plex_Mono]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="App"
              className="ri-window-fill text-2xl text-error hover:text-primary"
            ></i>
          </a>
        </div>
        <p>airbnc - fullstack airbnb clone</p>
      </div>
      <div className="my-5 text-xl flex gap-2">
        <div>
          <i title="CSS" className="ri-planet-line text-error text-2xl"></i>
          <a
            href="https://github.com/kieran-obrien/starstuf"
            className="font-[IBM_Plex_Mono] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="Repo"
              className="ri-github-fill text-2xl text-error hover:text-primary"
            ></i>
          </a>
          <a
            href="https://starstuf.app"
            className="font-[IBM_Plex_Mono]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="App"
              className="ri-window-fill text-2xl text-error hover:text-primary"
            ></i>
          </a>
        </div>
        <p>starstuf - 3D solar system simulator</p>
      </div>
      <div className="my-5 text-xl flex gap-2">
        <div>
          <i title="CSS" className="ri-paint-fill text-error text-2xl"></i>
          <a
            href="https://github.com/kieran-obrien/ghypr"
            className="font-[IBM_Plex_Mono] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="Repo"
              className="ri-github-fill text-2xl text-error hover:text-primary"
            ></i>
          </a>
        </div>
        <p>ghypr - arch linux ricing theme switcher cli program</p>
      </div>
      <div className="mt-5 mb-10 text-xl flex gap-2">
        <div>
          <i title="CSS" className="ri-lock-2-fill text-error text-2xl"></i>
          <a
            href="https://github.com/kieran-obrien/checkplz"
            className="font-[IBM_Plex_Mono] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="Repo"
              className="ri-github-fill text-2xl text-error hover:text-primary"
            ></i>
          </a>
        </div>
        <p>checkplz - arch linux AUR pkgbuild threat checker</p>
      </div>
    </div>
  );
}
