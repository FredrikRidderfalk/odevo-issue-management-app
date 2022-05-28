import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { taskStore } from '../../task-store';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.sass']
})
export class NewTasksComponent implements OnInit {
  store = taskStore;
  date = "2022-07-11"
  tagSource = "/assets/water-tag2.png"
  calendarIcon = "calendar_today"

  tasks!: Task[]

  inputBrf: string = ""
  inputDescription: string = ""
  inputContact: string = ""

  currentDate = new Date()

  constructor() { }

  ngOnInit(): void {
  }

  markTaskAsRead(id: number) {
    this.store.tasks.map((value, i) => {
      if(i === id) value.read = true

      return value
    })
  }

  addToCalendar(id: number) {
    this.store.tasks.map((value, i) => {
      if(i === id) value.addedToCalendar = true

      return value
    })
  }

  markTaskAsResolved(id: number) {
    this.store.tasks = this.store.tasks.filter((value, i) => i !== id)
  }

}
