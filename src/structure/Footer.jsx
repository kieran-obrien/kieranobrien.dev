import Divider from "../content/Divider";
import ThemeSwitcher from "../ui/ThemeSwitcher";

function Footer() {
  return (
    <footer>
      <Divider heading="" />
      <div className="flex flex-col items-end justify-end">
        <ThemeSwitcher />
        <div className="divider divider-end text-xl before:bg-transparent after:bg-transparent">
          k.o. © 2025
        </div>
      </div>
    </footer>
  );
}

export default Footer;
