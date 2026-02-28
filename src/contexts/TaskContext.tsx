import { createContext, useState } from "react";
import type { TaskSateType } from "../types/TaskStateType";

interface TaskProviderProps {
  children: React.ReactNode;
}

interface TaskContextProps {
  taskState: TaskSateType;
  setTaskState: React.Dispatch<React.SetStateAction<TaskSateType>>;
}

export const TaskContext = createContext<TaskContextProps>({
  taskState: {} as TaskSateType,
  setTaskState: () => {},
});

export default function TaskProvider({ children }: TaskProviderProps) {
  const [taskState, setTaskState] = useState<TaskSateType>({
    activeTask: null,
    config: {
      longBreak: 15,
      shortBreak: 5,
      work: 25,
    },
    currentCycle: 0,
    formattedSecondsRemaining: "00:00",
    secondsRemaining: 0,
    tasks: [],
  });
  return (
    <TaskContext.Provider value={{ taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
}
