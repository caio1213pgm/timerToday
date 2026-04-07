import type { TaskType } from "../types/TaskType";

export enum TaskActionType {
  START_TASK = "START_TASK",
  STOP_TASK = "STOP_TASK",
  CANCEL_TASK = "CANCEL_TASK",
  UPDATE_TASK = "UPDATE_TASK",
}

export type TaskActionModel =
  | {
      type: TaskActionType.START_TASK;
      payload: TaskType;
    }
  | {
      type: TaskActionType.STOP_TASK;
    };
