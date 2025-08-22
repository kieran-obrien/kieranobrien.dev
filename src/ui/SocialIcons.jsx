function SocialIcons() {
  return (
    <div className="flex justify-center mt-3">
      {/* Update link visited colour */}
      {/* Make links open new tab */}
      <a href="https://github.com/kieran-obrien">
        <i className="p-2 ri-github-fill social-icon text-4xl sm:text-4xl text-error m-3 text-shadow-sm/5 hover:text-shadow-sm/10 transition-shadow duration-300 hover:text-error-content active:text-muted"></i>
      </a>
      <a href="https://www.linkedin.com/in/kieran-o-brien-440285333/">
        <i className="p-2 ri-linkedin-box-fill social-icon text-4xl sm:text-4xl text-error m-3 text-shadow-sm/5 hover:text-shadow-sm/10 transition-shadow duration-300 hover:text-error-content active:text-muted"></i>
      </a>
      <a href="mailto:hello@kieranobrien.dev">
        <i className="p-2 ri-mail-line social-icon text-4xl sm:text-4xl text-error m-3 text-shadow-sm/5 hover:text-shadow-sm/10 transition-shadow duration-300 hover:text-error-content active:text-muted"></i>
      </a>
    </div>
  );
}

export default SocialIcons;
