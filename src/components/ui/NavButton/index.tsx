import { NavLink } from "react-router";
import style from "./NavButton.module.css";

interface NavButtonProps extends React.ComponentProps<"a"> {
  link: string;
  icon: React.ReactNode;
  tooltip: string;
}

export default function NavButton({
  link,
  icon,
  tooltip,
  ...props
}: NavButtonProps) {
  return (
    <>
      <NavLink to={link} className={style.navLink} title={tooltip} {...props}>
        {icon}
      </NavLink>
    </>
  );
}
