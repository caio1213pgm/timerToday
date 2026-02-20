import React from "react";
import style from "./Button.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "error";
}

export default function Button({
  children,
  type,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${style.button} ${style[variant]}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
