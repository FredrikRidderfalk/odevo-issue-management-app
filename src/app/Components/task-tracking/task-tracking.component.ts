import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { taskStore } from '../../task-store';

@Component({
  selector: 'app-task-tracking',
  templateUrl: './task-tracking.component.html',
  styleUrls: ['./task-tracking.component.sass']
})
export class TaskTrackingComponent implements OnInit {
  store = taskStore;
  newTasks = "3"
  activeTasks = "0"
  resolvedTasks = "5"

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showNewTasks() {
    this.router.navigate(["new-tasks"], {relativeTo: this.route})
  }

  showActiveTasks() {
    this.router.navigate(["active-tasks"], {relativeTo: this.route})
  }

  showResolvedTasks() {
    this.router.navigate(["resolved-tasks"], {relativeTo: this.route})
  }

}
