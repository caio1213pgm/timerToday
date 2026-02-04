import style from "./NavButton.module.css";

interface NavButtonProps {
  link: string;
  icon: React.ReactNode;
}

export default function NavButton({ link, icon }: NavButtonProps) {
  return (
    <>
      <a href={link} className={style.navLink}>
        {icon}
      </a>
    </>
  );
}
