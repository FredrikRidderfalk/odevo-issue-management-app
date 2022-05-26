import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './components/WelcomeMessageComponent/welcome-message.component';
import { ReportIssueComponent } from './components/ReportIssueComponent/report-issue.component';
import { NavigationComponent } from './components/NavigationComponent/navigation.component';
import { MenuComponent } from './components/MenuComponent/menu.component';
import { TaskTrackingComponent } from './components/TaskTrackingComponent/task-tracking.component';
import { StatsComponent } from './components/StatsComponent/stats.component';
import { UpcomingTasksComponent } from './components/UpcomingTasksComponent/upcoming-tasks.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMessageComponent,
    ReportIssueComponent,
    NavigationComponent,
    MenuComponent,
    TaskTrackingComponent,
    StatsComponent,
    UpcomingTasksComponent,
    HomeComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
