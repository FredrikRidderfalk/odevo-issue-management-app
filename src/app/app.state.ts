import { Task } from "./models/task";

export interface AppState {
  readonly task: Task[];
}