import type { TaskType } from "../types/TaskType";

export enum TaskActionType {
  START_TASK = "START_TASK",
  STOP_TASK = "STOP_TASK",
  UPDATE_TIME = "UPDATE_TIME",
  COMPLETE_TASK = "COMPLETE_TASK",
  EDIT_CONFIG = "EDIT_CONFIG",
  CLEAR_HISTORY = "CLEAR_HISTORY",
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
    }
  | {
      type: TaskActionType.EDIT_CONFIG;
      payload: {
        work: number;
        shortBreak: number;
        longBreak: number;
      };
    }
  | {
      type: TaskActionType.CLEAR_HISTORY;
    };
