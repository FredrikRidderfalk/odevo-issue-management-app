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

  tasks: task[] = []

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        content: "First task",
        completed: false,
      },
      {
        content: "Second task",
        completed: true,
      },
    ]
  }

}
