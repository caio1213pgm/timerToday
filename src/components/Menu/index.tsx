import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  Settings,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ThemeType } from "../../types/themeType";
import NavButton from "../NavButton";
import style from "./Menu.module.css";

export default function Menu() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  function handleClickModifyTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <nav className={style.navBox}>
      <NavButton link="#" icon={<HouseIcon />} tooltip="Home" />
      <NavButton link="#" icon={<HistoryIcon />} tooltip="History" />
      <NavButton link="#" icon={<Settings />} tooltip="Settings" />
      <NavButton
        link="#"
        icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
        tooltip="Theme"
        onClick={handleClickModifyTheme}
      />
    </nav>
  );
}
