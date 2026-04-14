import dayjs from "dayjs";
import { createContext, useReducer } from "react";
import { TaskActionType, type TaskActionModel } from "../actions/taskActions";
import type { TaskSateType } from "../types/TaskStateType";
import { formatTime } from "../utils/formatTime";
import { nextCycle } from "../utils/nextCycle";

interface TaskProviderProps {
  children: React.ReactNode;
}

interface TaskContextProps {
  taskState: TaskSateType;
  dispatch: React.Dispatch<TaskActionModel>;
}

export const TaskContext = createContext<TaskContextProps>({
  taskState: {} as TaskSateType,
  dispatch: () => {},
});

export default function TaskProvider({ children }: TaskProviderProps) {
  const taskReducer = (
    state: TaskSateType,
    action: TaskActionModel
  ): TaskSateType => {
    switch (action.type) {
      case TaskActionType.START_TASK: {
        const newTask = action.payload;
        const getCycle = nextCycle(state.currentCycle);
        const secconds = newTask.duration * 60;
        return {
          ...state,
          tasks: [...state.tasks, newTask],
          activeTask: newTask,
          secondsRemaining: secconds,
          formattedSecondsRemaining: formatTime(secconds),
          currentCycle: getCycle,
        };
      }
      case TaskActionType.STOP_TASK: {
        return {
          ...state,
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: "00:00",
          tasks: state.tasks.map((task) => {
            if (task.id === state.activeTask?.id) {
              return {
                ...task,
                interruptDate: dayjs().format("DD/MM/YYYY"),
              };
            }
            return task;
          }),
        };
      }
      case TaskActionType.UPDATE_TIME: {
        return {
          ...state,
          secondsRemaining: action.payload,
          formattedSecondsRemaining: formatTime(action.payload),
        };
      }
      default:
        return state;
    }
  };

  const [taskState, dispatch] = useReducer(taskReducer, {
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
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
