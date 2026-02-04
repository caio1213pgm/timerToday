import { Timer, TimerOff, TimerReset } from "lucide-react";
import NavButton from "../NavButton";
import style from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={style.navBox}>
      <NavButton link="#" icon={<Timer />} />
      <NavButton link="#" icon={<TimerReset />} />
      <NavButton link="#" icon={<TimerOff />} />
      <NavButton link="#" icon={<Timer />} />
    </nav>
  );
}
