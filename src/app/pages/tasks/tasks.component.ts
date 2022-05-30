import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // GSAP
    gsap.from(".task-type", {
      duration: 2,
      y: "50%",
      opacity: 0,
      stagger: 0.2,
      ease: "expo.out",
    });
  }

}
