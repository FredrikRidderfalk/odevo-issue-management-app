import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.sass']
})
export class ReportIssueComponent implements OnInit {
  title = "Issue Reporting"
  subtitle = "Create a ticket for an issue"
  prompt = "Fill in the details below"
  report = "Report Issue"
  tagSource = "/assets/water-tag2.png"
  calendarIcon = "calendar_today"

  tasks!: Task[]

  inputBrf: string = ""
  inputDescription: string = ""
  inputContact: string = ""

  currentDate = new Date()

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
