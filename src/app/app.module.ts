import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './Components/WelcomeMessageComponent/welcome-message.component';
import { ReportIssueComponent } from './Components/ReportIssueComponent/report-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMessageComponent,
    ReportIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
