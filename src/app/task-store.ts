import { observable, action, computed } from 'mobx-angular';
import { Task } from "./models/task";

class TaskStore {
    @observable tasks = [
      {
        brf: "Brf Olskroken",
        description: "Something about a leak.",
        contact: "Alex Skarsgård",
        read: false,
        addedToCalendar: false,
        resolved: false,
      },
      {
        brf: "Brf Guldheden",
        description: "A light has gone out.",
        contact: "Anna Annedal",
        read: true,
        addedToCalendar: true,
        resolved: false,
      },
    ];

    @computed get newTasks() {
        return this.tasks.filter((value, i) => !value.resolved).length
    }

    @computed get activeTasks() {
        return this.tasks.filter((value, i) => value.read && !value.resolved).length
    }

    @computed get resolvedTasks() {
        return this.tasks.filter((value, i) => value.resolved).length
    }

    @action setTask(task: Task) {
        this.tasks.unshift(task);
    }

    @action setActiveTask(i: number) {
        this.tasks[i].read = true
    }

    @action setResolvedTask(i: number) {
        this.tasks[i].resolved = true
    }
}
export const taskStore = new TaskStore();