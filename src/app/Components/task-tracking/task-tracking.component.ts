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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showResolvedTasks() {
    this.router.navigate(["tasks/resolved-tasks"])
  }

}
