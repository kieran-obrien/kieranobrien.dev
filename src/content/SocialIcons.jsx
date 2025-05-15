function SocialIcons() {
  return (
    <>
      <div className="my-5">
        {/* Update link visited colour */}
        {/* Make links open new tab */}
        <a href="https://github.com/kieran-obrien">
          <i className="ri-github-fill social-icon text-5xl text-[var(--primary)] m-3 text-shadow-md/50 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-gray-500"></i>
        </a>
        <a href="https://www.linkedin.com/in/kieran-o-brien-440285333/">
          <i className="ri-linkedin-box-fill social-icon text-5xl text-[var(--primary)] m-3 text-shadow-md/50 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-gray-500"></i>
        </a>
        <a href="mailto:hello@kieranobrien.dev">
          <i className="ri-mail-line social-icon text-5xl text-[var(--primary)] m-3 text-shadow-md/50 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-gray-500"></i>
        </a>
      </div>
    </>
  );
}

export default SocialIcons;
