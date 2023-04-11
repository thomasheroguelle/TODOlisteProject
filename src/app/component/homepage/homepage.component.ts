import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DatePipe]

})
export class HomepageComponent {

  // j'initialise la variable todoTasks a un tableau vide
  urgentTasks: ITodo[] = [];
  nonUrgentTasks: ITodo[] = [];

  constructor(private taskService: TaskService) {
    const todoTasks = this.taskService.findTodoTasks();
    this.urgentTasks = todoTasks.filter(task => task.isUrgent);
    this.nonUrgentTasks = todoTasks.filter(task => !task.isUrgent)

  }

  onTaskChecked(task: ITodo) {
    // J'initialise la methode de mon service
    this.taskService.setTaskDone(task.id);
    const todoTasks = task.isUrgent ? this.urgentTasks : this.nonUrgentTasks;
    // je recupere l'index de ma variable 
    const index = todoTasks.indexOf(task);
    // Supprime la tâche en fonction de son index 
    todoTasks.splice(index, 1);
  }


  
}







