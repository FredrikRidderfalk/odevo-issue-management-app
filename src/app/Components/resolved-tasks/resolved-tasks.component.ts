import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolved-tasks',
  templateUrl: './resolved-tasks.component.html',
  styleUrls: ['./resolved-tasks.component.sass']
})
export class ResolvedTasksComponent implements OnInit {
  message = "Wow, such empty..."

  constructor() { }

  ngOnInit(): void {
  }

}
