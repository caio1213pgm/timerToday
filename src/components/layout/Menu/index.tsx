import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  Settings,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ThemeType } from "../../../types/themeType";
import NavButton from "../../ui/NavButton";
import style from "./Menu.module.css";

export default function Menu() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storageTheme = localStorage.getItem("theme");
    return (storageTheme as ThemeType) || "dark";
  });

  const iconSelectByTheme = theme === "dark" ? <SunIcon /> : <MoonIcon />;

  function handleClickModifyTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    return () => {};
  }, [theme]);

  return (
    <nav className={style.navBox}>
      <NavButton link="#" icon={<HouseIcon />} tooltip="Home" />
      <NavButton link="#" icon={<HistoryIcon />} tooltip="History" />
      <NavButton link="#" icon={<Settings />} tooltip="Settings" />
      <NavButton
        link="#"
        icon={iconSelectByTheme}
        tooltip="Theme"
        onClick={handleClickModifyTheme}
      />
    </nav>
  );
}
