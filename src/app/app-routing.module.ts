import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'nav',
    component: MyNavComponent
  },
  {
    path: 'mySchedules',
    component: MyScheduleComponent
  },
  {
    path: 'newTask',
    component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
