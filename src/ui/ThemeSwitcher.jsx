import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("");

  const switchTheme = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.className = newTheme; // swap <html> class
  };

  return (
    <select
      className="w-50 px-4 py-2 text-sm text-[var(--fg)] bg-[var(--bg)] border border-[var(--muted)] rounded-sm shadow-sm appearance-none"
      required
      onChange={switchTheme}
      value={theme}
    >
      <option value="" disabled selected>
        Select a theme
      </option>
      <option value="theme-dracula">Dracula</option>
      <option value="theme-catppuccin">Catppuccin</option>
      <option value="theme-catppuccin-mocha">Catppuccin Mocha</option>
      <option value="theme-nord-dark">Nord Dark (Default)</option>
      <option value="theme-nord-light">Nord Light</option>
      <option value="theme-tokyo-dark">Tokyo Night Dark</option>
      <option value="theme-tokyo-light">Tokyo Night Light</option>
      <option value="theme-solarized-dark">Solarized Night</option>
      <option value="theme-solarized-light">Solarized Light</option>
      <option value="theme-colorblind">Colour-blind Friendly</option>
    </select>
  );
};

export default ThemeSwitcher;
