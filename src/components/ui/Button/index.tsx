import React from "react";
import style from "./Button.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "error";
  tooltip?: string;
}

export default function Button({
  children,
  type,
  variant = "primary",
  tooltip,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${style.button} ${style[variant]}`}
      type={type}
      {...props}
      title={tooltip}
    >
      {children}
    </button>
  );
}
