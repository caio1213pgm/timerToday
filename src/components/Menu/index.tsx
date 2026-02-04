import { HistoryIcon, HouseIcon, Settings, SunIcon } from "lucide-react";
import NavButton from "../NavButton";
import style from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={style.navBox}>
      <NavButton link="#" icon={<HouseIcon />} />
      <NavButton link="#" icon={<HistoryIcon />} />
      <NavButton link="#" icon={<Settings />} />
      <NavButton link="#" icon={<SunIcon />} />
    </nav>
  );
}
