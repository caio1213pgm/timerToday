import type { TaskType } from "../types/TaskType";

export function nextTypeCycle(currentCycle: number): TaskType["type"] {
  if (currentCycle % 8 === 0) return "longBreak";
  if (currentCycle % 2 === 0) return "shortBreak";
  return "work";
}
