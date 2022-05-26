import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTasksComponent } from './components/new-tasks/new-tasks.component';
import { ActiveTasksComponent } from './components/active-tasks/active-tasks.component';
import { ResolvedTasksComponent } from './components/resolved-tasks/resolved-tasks.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tasks", component: TasksComponent, children: [
    { path: "new-tasks", component: NewTasksComponent },
    { path: "active-tasks", component: ActiveTasksComponent },
    { path: "resolved-tasks", component: ResolvedTasksComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
