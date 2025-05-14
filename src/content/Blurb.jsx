function Blurb({ invisible, border }) {
  return (
    <p
      className={`block m-16 leading-relaxed text-lg text-center ${invisible} ${border} text-shadow-md/70 text-[var(--fg)]`}
    >
      Hi, I’m Kieran — a junior software developer with a passion for building
      clean, functional, and user-focused applications. After over a decade in a
      different field, I’ve leapt headfirst into tech, bringing with me a sharp
      eye for detail, strong problem-solving skills, and a relentlessly curious
      drive to learn. Whether it’s working with JavaScript, Python, or exploring
      the world of DevOps and Linux, I’m all about writing code that solves real
      problems and grows with users. Let’s build something great together.
    </p>
  );
}

export default Blurb;
