import { StopCircle } from "lucide-react";
import { nanoid } from "nanoid";
import { useRef } from "react";
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
      completeDate: null,
      duration: taskState.config[getCycleType],
      id: nanoid(),
      interruptDate: null,
      startDate: Date.now(),
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
  }

  return (
    <form className="formGroup" onSubmit={handleSubmit}>
      <Input
        id="taskIn"
        label="Task"
        placeholder="Digite sua task"
        ref={inputTaskRef}
      />
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Cycles cicle={getCycle} />
      <div>
        <Button type="submit" variant={"primary"}>
          <StopCircle />
        </Button>
      </div>
    </form>
  );
}
