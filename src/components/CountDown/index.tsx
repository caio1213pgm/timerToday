import { useTask } from "../../hooks/useTask";
import style from "./CountDown.module.css";
export default function CountDown() {
  const { taskState } = useTask();
  return (
    <div className={style.count}>{taskState.formattedSecondsRemaining}</div>
  );
}
