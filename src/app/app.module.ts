import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './Components/WelcomeMessageComponent/welcome-message.component'; // My component
import { ReportIssueComponent } from './Components/ReportIssueComponent/report-issue.component'; // My component

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMessageComponent, // My component
    ReportIssueComponent // My component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
