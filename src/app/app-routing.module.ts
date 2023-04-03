import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';

const routes : Routes = [
  {path : "", component : HomepageComponent},
  {path : "createTask", component : CreateTaskComponent}
]


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }