import { Component, OnInit } from '@angular/core';
import { taskStore } from '../../task-store';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.sass']
})
export class ActiveTasksComponent implements OnInit {
  store = taskStore;
  message = "Wow, such empty..."
  tagSource = "/assets/water-tag2.png"
  currentDate = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
