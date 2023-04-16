import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { TaskService } from './services/task.service';
import { FooterComponent } from './component/footer/footer.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { HistoriqueComponent } from './component/historique/historique.component';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { UpdatetaskComponent } from './component/updatetask/updatetask.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    CreateTaskComponent,
    HeaderComponent,
    HistoriqueComponent,
    UpdatetaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgScrollbarModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
