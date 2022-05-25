import { Component } from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: 'app.menu.html',
    styleUrls: ['app.menu.sass']
})

export class MenuComponent {
    logoText = "odevo"
    dashboard = "Dashboard"
    team = "Team"
    tasks = "Tasks"
    statistics = "Statistics"
    settings = "Settings"
    logOut = "Logout"
}