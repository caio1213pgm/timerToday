import dayjs from "dayjs";
import { PlayCircle, StopCircle } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { useTask } from "../../../hooks/useTask";
import type { TaskType } from "../../../types/TaskType";
import { formatTime } from "../../../utils/formatTime";
import { nextCycle } from "../../../utils/nextCycle";
import { nextTypeCycle } from "../../../utils/nextTypeCycle";
import Cycles from "../../Cycles";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function FormAddTask() {
  const { setTaskState, taskState } = useTask();
  const inputTaskRef = useRef<HTMLInputElement>(null);
  const [secconds, setSecconds] = useState(0);

  const getCycle = nextCycle(taskState.currentCycle);
  const getCycleType = nextTypeCycle(getCycle);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputTaskRef.current?.value.trim()) {
      console.log("Digite o nome da sua task");
      return;
    }
    const newTask: TaskType = {
      name: inputTaskRef.current.value,
      completeDate: "",
      duration: taskState.config[getCycleType],
      id: nanoid(),
      interruptDate: "",
      startDate: new Date(),
      type: getCycleType,
    };

    const secconds = newTask.duration * 60;
    setTaskState((prev) => ({
      ...prev,
      formattedSecondsRemaining: formatTime(secconds),
      currentCycle: getCycle,
      activeTask: newTask,
      secondsRemaining: secconds,
      tasks: [...prev.tasks, newTask],
    }));
    setSecconds(secconds);
  }

  function handleCancelTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (e.currentTarget.type === "submit") {
      return;
    }
    e.preventDefault();
    setTaskState((prev) => ({
      ...prev,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
      tasks: prev.tasks.map((task) => {
        if (task.id === taskState.activeTask?.id) {
          return {
            ...task,
            interruptDate: dayjs().format("DD/MM/YYYY"),
          };
        }
        return task;
      }),
    }));
    inputTaskRef.current?.value === "";
  }

  useEffect(() => {
    if (taskState.activeTask) {
      // setTimeout(() => {
      //   setSecconds((prev) => prev - 1);
      //   setTaskState((prev) => ({
      //     ...prev,
      //     formattedSecondsRemaining: formatTime(secconds),
      //   }));
      // }, 1000);
    }
  }, [secconds, taskState.activeTask]);

  return (
    <form className="formGroup" onSubmit={handleSubmit}>
      <Input
        id="taskIn"
        label="Task"
        placeholder="Digite sua task"
        ref={inputTaskRef}
        disabled={!!taskState.activeTask}
      />
      <div>
        <p>Próximo ciclo será de {taskState.config[getCycleType]}min</p>
      </div>
      {taskState.activeTask && <Cycles cicle={getCycle} />}
      <div>
        <Button
          type={!taskState.activeTask ? "submit" : "button"}
          variant={!taskState.activeTask ? "primary" : "error"}
          tooltip={!taskState.activeTask ? "Iniciar task" : "Parar task"}
          onClick={handleCancelTask}
        >
          {!taskState.activeTask ? <PlayCircle /> : <StopCircle />}
        </Button>
      </div>
    </form>
  );
}
