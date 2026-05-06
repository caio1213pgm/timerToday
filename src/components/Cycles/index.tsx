import { useEffect } from "react";
import { useTask } from "../../hooks/useTask";
import { nextCycle } from "../../utils/nextCycle";
import { nextTypeCycle } from "../../utils/nextTypeCycle";
import style from "./Cycles.module.css";

interface CyclesProps {
  cicle: number;
}

export default function Cycles({ cicle }: CyclesProps) {
  const { taskState } = useTask();

  const cyclesStates = Array.from({ length: taskState.currentCycle });

  const labels = {
    work: "Ciclo de trabalho",
    shortBreak: "Ciclo de descanso curto",
    longBreak: "Ciclo de descanso longo",
  };

  useEffect(() => {
    cyclesStates.push(cicle);
  }, [cicle]);

  return (
    <div className={style.boxCycles}>
      <span>Ciclos:</span>
      <div className={style.cycles}>
        {cyclesStates.map((type, index) => {
          const nextCicle = nextCycle(index);
          const typeCycle = nextTypeCycle(nextCicle);
          return (
            <span
              className={style[typeCycle]}
              key={index}
              aria-label={labels[typeCycle]}
              title={labels[typeCycle]}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
