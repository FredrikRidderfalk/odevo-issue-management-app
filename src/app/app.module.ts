import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { ReportIssueComponent } from './components/report-issue/report-issue.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskTrackingComponent } from './components/task-tracking/task-tracking.component';
import { StatsComponent } from './components/stats/stats.component';
import { UpcomingTasksComponent } from './components/upcoming-tasks/upcoming-tasks.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTasksComponent } from './components/new-tasks/new-tasks.component';
import { ActiveTasksComponent } from './components/active-tasks/active-tasks.component';
import { ResolvedTasksComponent } from './components/resolved-tasks/resolved-tasks.component';

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
    TasksComponent,
    NewTasksComponent,
    ActiveTasksComponent,
    ResolvedTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
