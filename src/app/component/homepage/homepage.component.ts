import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // j'initialise la variable todoTasks a un tableau vide
  todoTasks : ITodo[] = [];

  constructor(private taskService : TaskService){
    this.todoTasks = this.taskService.findTodoTasks();
  } 
}

