import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTasksComponent } from './components/new-tasks/new-tasks.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tasks", component: TasksComponent, children: [
    { path: "new-tasks", component: NewTasksComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
