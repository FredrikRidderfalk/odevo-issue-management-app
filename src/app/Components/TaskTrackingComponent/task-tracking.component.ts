import { Component } from "@angular/core";

@Component({
    selector: "app-task-tracking",
    templateUrl: 'app.task-tracking.html',
    styleUrls: ['app.task-tracking.sass']
})

export class TaskTrackingComponent {
    newTasks = "3"
    activeTasks = "1"
    resolvedTasks = "5"
}