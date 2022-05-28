import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.sass']
})
export class ActiveTasksComponent implements OnInit {
  message = "Wow, such empty..."

  constructor() { }

  ngOnInit(): void {
  }

}
