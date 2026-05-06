import { AlarmClock } from "lucide-react";
import { Link } from "react-router";
import style from "./LogoTime.module.css";

export default function LogoTimer() {
  return (
    <div className={style.logo}>
      <Link className={style.logoLink} to="/">
        <AlarmClock size={64} />
        <span>TimerToday</span>
      </Link>
    </div>
  );
}
