import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrls: ['./upcoming-tasks.component.sass']
})
export class UpcomingTasksComponent implements OnInit {
  message = "Wow, such empty..."

  constructor() { }

  ngOnInit(): void {
  }

}
