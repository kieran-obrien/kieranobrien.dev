function SocialIcons() {
  return (
    <>
      <div className="my-5 p-2">
        {/* Update link visited colour */}
        {/* Make links open new tab */}
        <a href="https://github.com/kieran-obrien">
          <i className="p-2 ri-github-fill social-icon text-5xl text-[var(--primary)] m-3 text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"></i>
        </a>
        <a href="https://www.linkedin.com/in/kieran-o-brien-440285333/">
          <i className="p-2 ri-linkedin-box-fill social-icon text-5xl text-[var(--primary)] m-3 text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"></i>
        </a>
        <a href="mailto:hello@kieranobrien.dev">
          <i className="p-2 ri-mail-line social-icon text-5xl text-[var(--primary)] m-3 text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"></i>
        </a>
      </div>
    </>
  );
}

export default SocialIcons;
