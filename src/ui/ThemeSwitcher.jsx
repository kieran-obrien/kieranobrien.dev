import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("");

  const switchTheme = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.className = newTheme; // swap <html> class
  };

  return (
    <select required onChange={switchTheme} value={theme}>
      <option value="" disabled selected>Select a theme</option>
      <option value="theme-dracula">Dracula</option>
      <option value="theme-catppuccin">Catppuccin</option>
      <option value="theme-catppuccin-mocha">Catppuccin Mocha</option>
      <option value="theme-nord-dark">Nord Dark (Default)</option>
      <option value="theme-nord-light">Nord Light</option>
      <option value="theme-tokyo-dark">Tokyo Night Dark</option>
      <option value="theme-tokyo-light">Tokyo Night Light</option>
      <option value="theme-solarized-dark">Solarized Night</option>
      <option value="theme-solarized-light">Solarized Light</option>
    </select>
  );
};

export default ThemeSwitcher;
