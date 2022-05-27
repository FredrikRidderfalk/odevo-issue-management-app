import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/task';

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
  calendarIcon = "calendar_today"

  tasks!: task[]

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        content: "First task",
        read: false,
        addedToCalendar: false,
      },
      {
        content: "Second task",
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

}
