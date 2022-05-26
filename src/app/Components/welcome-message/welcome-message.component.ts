import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.sass']
})
export class WelcomeMessageComponent implements OnInit {
  firstName = "Habibi"

  constructor() { }

  ngOnInit(): void {
  }

}
