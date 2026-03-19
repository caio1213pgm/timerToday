import { useTask } from "../../hooks/useTask";
import style from "./Cycles.module.css";

interface CyclesProps {
  cicle: number;
}

export default function Cycles({ cicle }: CyclesProps) {
  const { taskState } = useTask();

  return (
    <div className={style.boxCycles}>
      <span>Ciclos:</span>
      <div className={style.cycles}>
        {taskState.tasks.map(({ type }) => (
          <>
            {type === "work" && (
              <span className={style.cycleWork} key={type}></span>
            )}
            {type === "shortBreak" && (
              <span className={style.cycleShort} key={type}></span>
            )}
            {type === "longBreak" && (
              <span className={style.cycleLong} key={type}></span>
            )}
          </>
        ))}
        {/* {cicle === 8 && <span className={style.cycleLong}></span>}
        {cicle % 2 === 0 && <span className={style.cycleShort}></span>}
        {cicle % 2 !== 0 && <span className={style.cycleWork}></span>} */}
      </div>
    </div>
  );
}
