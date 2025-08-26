export default function Header() {
  return (
    <div className="mockup-code bg-neutral">
      <pre data-prefix="$">
        <code className="">sudo apt get kieranobrien</code>
      </pre>
      <pre data-prefix="$">
        <code>sudo apt install kieranobrien</code>
      </pre>
      <pre data-prefix=">" className="text-error">
        <code>
          hiring new dev
          <span className="loading loading-dots loading-xs align-bottom"></span>
        </code>
      </pre>
      <pre data-prefix=">" className="text-primary">
        <code>done, no regrets!</code>
      </pre>
      <pre data-prefix="?" className="text-secondary p-0 hover:text-base-300">
        <code>
          <a href="https://github.com/kieran-obrien">github</a>
        </code>
      </pre>
      <pre data-prefix="?" className="text-secondary p-0 hover:text-base-300">
        <code>
          <a href="https://www.linkedin.com/in/kieran-o-brien-440285333/">
            linkedin
          </a>
        </code>
      </pre>
      <pre data-prefix="?" className="text-secondary p-0 hover:text-base-300">
        <code>
          <a href="mailto:hello@kieranobrien.dev">email</a>
        </code>
      </pre>
    </div>
  );
}
