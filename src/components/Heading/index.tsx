import type React from "react";
import style from "./Heading.module.css";

interface HeadingProps {
    children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
    return <h1 className={style.heading}>{children}</h1>;
}
