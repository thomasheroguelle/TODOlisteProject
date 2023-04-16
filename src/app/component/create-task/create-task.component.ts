import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';
import { Router } from '@angular/router';
import { CATEGORY } from 'src/ITodo/ITodo';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  categoryList = CATEGORY;

  task: ITodo = {
    id: 1,
    content: "",
    category: "🛍️",
    isUrgent: false,
    doneDate: null,
  }
  // j'injecte mon service dans le constructeur 
  constructor(private taskService: TaskService, private route: Router) { }

  // appelle la méthode createTask() du service TaskService pour ajouter la tâche au local storage.
  createTask() {
    this.taskService.createTask(this.task);
    this.route.navigate(['/']);
  }
}


