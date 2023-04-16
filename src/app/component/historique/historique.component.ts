import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {

  tasks: ITodo[] = [];

  constructor(private taskService: TaskService) { 
    this.tasks = this.taskService.findDoneTasks()
  }


  setTaskUndone(task : ITodo) {
    // J'initialise la methode de mon service
    this.taskService.setTaskUndone(task.id);
    // je recupere l'index de ma variable 
    const index = this.tasks.indexOf(task);
    // Supprime la tâche en fonction de son index 
    this.tasks.splice(index, 1);
  }




}
