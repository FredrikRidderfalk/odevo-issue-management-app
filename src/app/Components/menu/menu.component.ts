import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  logoText = "odevo"
  dashboard = "Dashboard"
  team = "Team"
  tasks = "Tasks"
  statistics = "Statistics"
  settings = "Settings"
  logOut = "Logout"

  constructor() { }

  ngOnInit(): void {
  }

}
