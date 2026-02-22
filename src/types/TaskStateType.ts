import type { TaskType } from "./TaskType";

export type TaskSateType = {
  tasks: TaskType[];
  activeTask: TaskType | null;
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  currentCycle: number;
  config: {
    work: number;
    shortBreak: number;
    longBreak: number;
  };
};
