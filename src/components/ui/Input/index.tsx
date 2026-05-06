import type { HTMLInputTypeAttribute } from "react";
import style from "./Input.module.css";

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({
  label,
  type,
  id,
  placeholder,
  disabled,
  onChange,
  value,
  ref,
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
        onChange={onChange}
        value={value}
        ref={ref}
        autoComplete="off"
      />
    </div>
  );
}
