import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { taskStore } from '../../task-store';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.sass']
})
export class ReportIssueComponent implements OnInit {
  store = taskStore;
  title = "Issue Reporting"
  subtitle = "Create a ticket for an issue"
  prompt = "Fill in the details below"
  report = "Report Issue"
  formVisible = false

  inputBrf: string = ""
  inputDescription: string = ""
  inputContact: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.formVisible = !this.formVisible
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

  reportIssue() {
    // Add issue to the store tasks array
    this.store.setTask({
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
