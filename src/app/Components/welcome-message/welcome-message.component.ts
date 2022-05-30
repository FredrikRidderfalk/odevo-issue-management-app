import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.sass']
})
export class WelcomeMessageComponent implements OnInit {

  firstName = "Fredrik"

  constructor() { }

  ngOnInit(): void {
  }

}
