import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { HistoriqueComponent } from './component/historique/historique.component';
import { UpdatetaskComponent } from './component/updatetask/updatetask.component';

const routes : Routes = [
  {path : "", component : HomepageComponent},
  {path : "createTask", component : CreateTaskComponent},
  {path : "historique", component : HistoriqueComponent},
  {path : "updatetask/:taskid", component : UpdatetaskComponent},
]


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }
