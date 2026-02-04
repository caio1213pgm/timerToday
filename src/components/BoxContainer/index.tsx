import type React from "react";
import style from "./BoxContainer.module.css";

interface BoxContainerProps {
    children: React.ReactNode;
    textId: string;
}
export default function BoxContainer({ children, textId }: BoxContainerProps) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <section id={textId}>{children}</section>
            </div>
        </div>
    );
}
