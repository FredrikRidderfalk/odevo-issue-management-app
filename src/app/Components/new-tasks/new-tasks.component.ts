import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.sass']
})
export class NewTasksComponent implements OnInit {
  name = "Brf Olskroken"
  info = "The laundry room for stairwell 2B has been experiencing a leak since yesterday coming fr..."
  contact = "Alex Skarsgård"
  date = "2022-07-11"
  tagSource = "/assets/water-tag2.png"
  calendarIcon = "calendar_today"

  tasks!: task[]

  inputBrf: string = ""
  inputDescription: string = ""
  inputContact: string = ""

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
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
    ]
  }

  markTaskAsRead(id: number) {
    this.tasks.map((value, i) => {
      if(i === id) value.read = true

      return value
    })
  }

  addToCalendar(id: number) {
    this.tasks.map((value, i) => {
      if(i === id) value.addedToCalendar = true

      return value
    })
  }

  markTaskAsResolved(id: number) {
    this.tasks = this.tasks.filter((value, i) => i !== id)
  }

  reportIssue() {
    // Add issue to tasks array
    this.tasks.push({
      brf: this.inputBrf,
      description: this.inputDescription,
      contact: this.inputContact,
      read: false,
      addedToCalendar: false
    })

    // Clear input fields on submit
    this.inputBrf = ""
    this.inputDescription = ""
    this.inputContact = ""
  }

}
