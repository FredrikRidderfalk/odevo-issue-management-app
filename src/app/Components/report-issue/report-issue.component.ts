import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.sass']
})
export class ReportIssueComponent implements OnInit {
  title = "Issue Reporting"
  subtitle = "Create a ticket for an issue"

  constructor() { }

  ngOnInit(): void {
  }

}
