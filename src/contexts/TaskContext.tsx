import dayjs from "dayjs";
import { createContext, useEffect, useReducer, useRef } from "react";
import { TaskActionType, type TaskActionModel } from "../actions/taskActions";
import type { TaskSateType } from "../types/TaskStateType";
import { formatTime } from "../utils/formatTime";
import { nextCycle } from "../utils/nextCycle";
import { TimerWorkerManager } from "../workers/TimerWorkerManager";
import { loadBeep } from "../utils/loadBeep";

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
  const soudBeepRef = useRef<() => void | null>(null);
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
                interruptDate: dayjs().format("DD/MM/YYYY - HH:mm"),
              };
            }
            return task;
          }),
        };
      }
      case TaskActionType.COMPLETE_TASK: {
        return {
          ...state,
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: "00:00",
          tasks: state.tasks.map((task) => {
            if (task.id === state.activeTask?.id) {
              return {
                ...task,
                completeDate: dayjs().format("DD/MM/YYYY - HH:mm"),
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
      work: 0.1,
    },
    currentCycle: 0,
    formattedSecondsRemaining: "00:00",
    secondsRemaining: 0,
    tasks: [],
  });

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(({ data }) => {
    if (data.secondsRemaining < 0) {
      soudBeepRef.current !== null && soudBeepRef.current();
      worker.terminate();
      dispatch({
        type: TaskActionType.COMPLETE_TASK,
      });
      return;
    }
    dispatch({
      type: TaskActionType.UPDATE_TIME,
      payload: data.secondsRemaining,
    });
  });

  useEffect(() => {
    if (!taskState.activeTask) {
      worker.terminate();
    }

    worker.postMessage(taskState);
  }, [taskState, worker]);

  useEffect(() => {
    if (taskState.activeTask && soudBeepRef.current === null) {
      soudBeepRef.current = loadBeep();
    }
    soudBeepRef.current = null;
  }, [taskState.activeTask]);

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
