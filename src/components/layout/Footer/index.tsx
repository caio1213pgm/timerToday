import style from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <a href="#" className={style.footerLink}>
        Entenda como funciona a técnica de pomodoro
      </a>
      <a href="#" className={style.footerLink}>
        TimerToday &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
}
