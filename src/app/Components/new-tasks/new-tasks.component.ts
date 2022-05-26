import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.sass']
})
export class NewTasksComponent implements OnInit {
  name = "Brf Olskroken"
  info = "The laundry room for stairwell 2B has been experiencing a leak since yesterday coming fr..."
  contact = "Alex Skarsgård"
  date = "2022-07-11"
  tagSource = "/assets/water-tag2.png"
  calendarIcon = "calendar_today"

  calendarIconElement = document.querySelector("#calendar-icon")

  constructor() { }

  ngOnInit(): void {
  }

  // updateCalendarIcon () {
  // }

}
