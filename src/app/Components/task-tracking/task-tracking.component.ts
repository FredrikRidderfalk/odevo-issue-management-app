import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tracking',
  templateUrl: './task-tracking.component.html',
  styleUrls: ['./task-tracking.component.sass']
})
export class TaskTrackingComponent implements OnInit {
  newTasks = "3"
  activeTasks = "0"
  resolvedTasks = "5"

  constructor() { }

  ngOnInit(): void {
  }

}
