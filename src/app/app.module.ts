import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './Components/WelcomeMessageComponent/welcome-message.component';
import { ReportIssueComponent } from './Components/ReportIssueComponent/report-issue.component';
import { NavigationComponent } from './Components/NavigationComponent/navigation.component';
import { MenuComponent } from './Components/MenuComponent/menu.component';
import { TaskTrackingComponent } from './Components/TaskTrackingComponent/task-tracking.component';
import { StatsComponent } from './Components/StatsComponent/stats.component';
import { UpcomingTasksComponent } from './Components/UpcomingTasksComponent/upcoming-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMessageComponent,
    ReportIssueComponent,
    NavigationComponent,
    MenuComponent,
    TaskTrackingComponent,
    StatsComponent,
    UpcomingTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
