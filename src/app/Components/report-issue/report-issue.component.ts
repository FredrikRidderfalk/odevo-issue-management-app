import { Component, OnInit } from '@angular/core';
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
  isTooltipRead!: boolean

  inputBrf: string = ""
  inputDescription: string = ""
  inputContact: string = ""

  constructor() { }

  ngOnInit(): void {
    // Get localStorage
    let data: any = localStorage.getItem("isTooltipRead")
    this.isTooltipRead = JSON.parse(data)
  }

  toggleForm() {
    this.formVisible = !this.formVisible
  }

  // markTaskAsRead(id: number) {
  //   this.store.tasks.map((value, i) => {
  //     if(i === id) value.read = true

  //     return value
  //   })
  // }

  // addToCalendar(id: number) {
  //   this.store.tasks.map((value, i) => {
  //     if(i === id) value.addedToCalendar = true

  //     return value
  //   })
  // }

  // markTaskAsResolved(id: number) {
  //   this.store.tasks.map((value, i) => {
  //     if(i === id) value.resolved = true

  //     return value
  //   })
  // }

  reportIssue() {
    // Add issue to the store tasks array
    this.store.setTask({
      brf: this.inputBrf,
      description: this.inputDescription,
      contact: this.inputContact,
      read: false,
      addedToCalendar: false,
      resolved: false
    })

    // Clear input fields on submit
    this.inputBrf = ""
    this.inputDescription = ""
    this.inputContact = ""
    
  }

  openTooltip() {
    // Set localStorage
    localStorage.setItem('isTooltipRead', JSON.stringify(this.isTooltipRead = true))
  }

}
