import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.sass']
})
export class WelcomeMessageComponent implements OnInit {

  firstName = "Fredrik"

  constructor() { }

  ngOnInit(): void {
    // GSAP
gsap.from(".name", {
  duration: 2,
  x: "-50%",
  opacity: 0,
  ease: "expo.out",
});

gsap.from(".subtext", {
  duration: 3,
  opacity: 0,
  delay: 2,
  ease: "expo.out",
});

  }

}
