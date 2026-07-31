import type { TaskType } from "../types/TaskType";

export const TaskActionType = {
  START_TASK: "START_TASK",
  STOP_TASK: "STOP_TASK",
  UPDATE_TIME: "UPDATE_TIME",
  COMPLETE_TASK: "COMPLETE_TASK",
  EDIT_CONFIG: "EDIT_CONFIG",
  CLEAR_HISTORY: "CLEAR_HISTORY",
} as const;

export type TaskActionType =
  (typeof TaskActionType)[keyof typeof TaskActionType];

export type TaskActionModel =
  | {
      type: typeof TaskActionType.START_TASK;
      payload: TaskType;
    }
  | {
      type: typeof TaskActionType.STOP_TASK;
    }
  | {
      type: typeof TaskActionType.UPDATE_TIME;
      payload: number;
    }
  | {
      type: typeof TaskActionType.COMPLETE_TASK;
    }
  | {
      type: typeof TaskActionType.EDIT_CONFIG;
      payload: {
        work: number;
        shortBreak: number;
        longBreak: number;
      };
    }
  | {
      type: typeof TaskActionType.CLEAR_HISTORY;
    };
