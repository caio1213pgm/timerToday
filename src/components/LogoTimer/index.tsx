import { AlarmClock } from "lucide-react";
import style from "./LogoTime.module.css";

export default function LogoTimer() {
  return (
    <div className={style.logo}>
      <a className={style.logoLink} href="#">
        <AlarmClock size={64} />
        <span>TimerToday</span>
      </a>
    </div>
  );
}
