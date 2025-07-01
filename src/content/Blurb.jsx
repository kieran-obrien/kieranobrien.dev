function Blurb({ invisible, border }) {
  return (
    <p
      className={`block sm:m-16 leading-relaxed text-md sm:text-lg text-center ${invisible} ${border} text-shadow-md/20 text-[var(--fg)]`}
    >
      Hello, world! I’m Kieran — a junior software developer with a passion for building functional and user-focused applications. After over a decade of professional experience in a
      different field, I’ve leapt headfirst into tech, bringing with me a sharp
      eye for detail, strong problem-solving skills, and a relentlessly curious
      drive to learn. Whether it’s working with JavaScript, Python, or exploring
      the world of Linux and DevOps, I’m all about writing clean code that solves real world
      problems. Let’s build something great together!
    </p>
  );
}

export default Blurb;
