import { observable, action } from 'mobx-angular';
import { Task } from "./models/task";

class TaskStore {
    @observable tasks = [
      {
        brf: "Brf Olskroken",
        description: "Something about a leak.",
        contact: "Alex Skarsgård",
        read: false,
        addedToCalendar: false,
      },
      {
        brf: "Brf Guldheden",
        description: "A light has gone out.",
        contact: "Anna Annedal",
        read: true,
        addedToCalendar: true,
      },
    ];

    @action setTask(task: Task) {
        this.tasks.unshift(task);
    }
}
export const taskStore = new TaskStore();