import dayjs from "dayjs";
import { PlayCircle, StopCircle } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { TaskActionType } from "../../../actions/taskActions";
import { useTask } from "../../../hooks/useTask";
import type { TaskType } from "../../../types/TaskType";
import { nextCycle } from "../../../utils/nextCycle";
import { nextTypeCycle } from "../../../utils/nextTypeCycle";
import Cycles from "../../Cycles";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function FormAddTask() {
  const { dispatch, taskState } = useTask();
  const inputTaskRef = useRef<HTMLInputElement>(null);

  const getCycle = nextCycle(taskState.currentCycle);
  const getCycleType = nextTypeCycle(getCycle);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputTaskRef.current?.value.trim()) {
      toast.warn("Digite o nome da sua task");
      return;
    }
    const newTask: TaskType = {
      name: inputTaskRef.current.value,
      completeDate: "",
      duration: taskState.config[getCycleType],
      id: nanoid(),
      interruptDate: "",
      startDate: dayjs().format("DD/MM/YYYY - HH:mm"),
      type: getCycleType,
    };
    dispatch({ type: TaskActionType.START_TASK, payload: newTask });
    toast.success("Task iniciada!");
  }

  function handleCancelTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (e.currentTarget.type === "submit") {
      return;
    }
    e.preventDefault();

    dispatch({
      type: TaskActionType.STOP_TASK,
    });
    toast.error("Tarefa cancelada!");
    inputTaskRef.current?.value === "";
  }

  useEffect(() => {
    if (taskState.activeTask) {
      inputTaskRef.current!.value = taskState.activeTask.name;
      return;
    }
    if (taskState.tasks.length > 0) {
      inputTaskRef.current!.value =
        taskState.tasks[taskState.tasks.length - 1].name;
      return;
    }
  }, []);

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
        <p>Próximo ciclo será de {taskState?.config?.[getCycleType]}min</p>
      </div>
      {taskState.currentCycle > 0 && <Cycles cicle={getCycle} />}
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
