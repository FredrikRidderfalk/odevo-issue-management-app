import { Component, OnInit } from '@angular/core';
import { taskStore } from '../../task-store';

@Component({
  selector: 'app-resolved-tasks',
  templateUrl: './resolved-tasks.component.html',
  styleUrls: ['./resolved-tasks.component.sass']
})
export class ResolvedTasksComponent implements OnInit {
  store = taskStore;
  message = "Wow, such empty..."
  tagSource = "/assets/water-tag2.png"
  currentDate = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
