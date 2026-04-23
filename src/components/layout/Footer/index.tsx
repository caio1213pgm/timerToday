import { Link } from "react-router";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <Link to="/about" className={style.footerLink}>
        Entenda como funciona a técnica de pomodoro
      </Link>
      <Link to="/" className={style.footerLink}>
        TimerToday &copy; {new Date().getFullYear()}
      </Link>
    </footer>
  );
}
