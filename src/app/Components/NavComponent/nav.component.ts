import { Component } from "@angular/core";

@Component({
    selector: "app-nav",
    templateUrl: 'app.nav.html',
    styleUrls: ['app.nav.sass']
})

export class NavComponent {
    title = "Issue Reporting"
    subtitle = "Create a ticket for an issue"
}