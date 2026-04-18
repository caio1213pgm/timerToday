import type { TaskType } from "../types/TaskType";

export enum TaskActionType {
  START_TASK = "START_TASK",
  STOP_TASK = "STOP_TASK",
  UPDATE_TIME = "UPDATE_TIME",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export type TaskActionModel =
  | {
      type: TaskActionType.START_TASK;
      payload: TaskType;
    }
  | {
      type: TaskActionType.STOP_TASK;
    }
  | {
      type: TaskActionType.UPDATE_TIME;
      payload: number;
    }
  | {
      type: TaskActionType.COMPLETE_TASK;
    };
