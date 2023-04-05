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
  todoTasks: ITodo[] = [];

  constructor(private taskService: TaskService) {
    this.todoTasks = this.taskService.findTodoTasks();
  }

  onTaskChecked(task: ITodo) {
    // J'initialise la methode de mon service
    this.taskService.setTaskDone(task.id);
    // je recupere l'index de ma variable 
    const index = this.todoTasks.indexOf(task);
    // Supprime la tâche en fonction de son index 
    this.todoTasks.splice(index, 1);
  }
}

