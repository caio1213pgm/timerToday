import type { TaskSateType } from "./TaskStateType";

export type TaskType = {
  id: string;
  name: string;
  duration: number;
  startDate: string | Date;
  completeDate: string | Date;
  interruptDate: string | Date;
  type: keyof TaskSateType["config"];
};
