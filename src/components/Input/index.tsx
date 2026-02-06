import type { HTMLInputTypeAttribute } from "react";
import style from "./Input.module.css";

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  id: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Input({
  label,
  type,
  id,
  placeholder,
  disabled,
}: InputProps) {
  return (
    <div className={style.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type || "text"}
        id={id}
        placeholder={placeholder}
        className={style.input}
        disabled={disabled}
      />
    </div>
  );
}
