import { CirclePlay, StopCircle } from "lucide-react";
import style from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

export default function Button({ children, type }: ButtonProps) {
  const verifyIcon = type === "submit" ? <CirclePlay /> : <StopCircle />;
  return (
    <button
      className={type === "submit" ? style.buttonSubmit : style.buttonStop}
      type={type}
    >
      {children || verifyIcon}
    </button>
  );
}
