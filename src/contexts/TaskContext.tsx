import dayjs from "dayjs";
import { createContext, useEffect, useReducer, useRef } from "react";
import { TaskActionType, type TaskActionModel } from "../actions/taskActions";
import type { TaskSateType } from "../types/TaskStateType";
import { formatTime } from "../utils/formatTime";
import { loadBeep } from "../utils/loadBeep";
import { nextCycle } from "../utils/nextCycle";
import { TimerWorkerManager } from "../workers/TimerWorkerManager";

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
      case TaskActionType.EDIT_CONFIG: {
        return {
          ...state,
          config: action.payload,
        };
      }
      case TaskActionType.CLEAR_HISTORY: {
        localStorage.setItem(
          "taskState",
          JSON.stringify({
            ...state,
            activeTask: null,
            currentCycle: 0,
            formattedSecondsRemaining: "00:00",
            secondsRemaining: 0,
            tasks: [],
          })
        );
        return {
          ...state,
          tasks: [],
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: "00:00",
          currentCycle: 0,
        };
      }
      default:
        return state;
    }
  };

  const [taskState, dispatch] = useReducer(
    taskReducer,
    {
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
    },
    () => {
      const taskStorage = JSON.parse(
        localStorage.getItem("taskState")!
      ) as TaskSateType | null;
      if (!taskStorage) {
        return {
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
        };
      }
      return {
        ...taskStorage,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        activeTask: null,
      };
    }
  );

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(({ data }) => {
    if (data.secondsRemaining < 0) {
      if (soudBeepRef.current !== null) {
        soudBeepRef.current();
        soudBeepRef.current = null;
      }

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
    localStorage.setItem("taskState", JSON.stringify(taskState));
  }, [taskState.activeTask, taskState.config]);

  useEffect(() => {
    if (!taskState.activeTask) {
      worker.terminate();
      document.title = "TimerToday";
      return;
    }

    worker.postMessage(taskState);

    if (taskState.formattedSecondsRemaining !== "00:00") {
      document.title = `${taskState.formattedSecondsRemaining} - TimerToday`;
      return;
    }
  }, [taskState, worker]);

  useEffect(() => {
    if (taskState.activeTask && soudBeepRef.current === null) {
      soudBeepRef.current = loadBeep();
      return;
    }
    soudBeepRef.current = null;
  }, [taskState.activeTask]);

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
