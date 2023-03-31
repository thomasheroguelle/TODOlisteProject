import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  task: ITodo[] = [];

  // j'injecte mon service dans le constructeur 
  constructor(private taskService: TaskService) { }

  // appelle la méthode createTask() du service TaskService pour ajouter la tâche au local storage.
  createNewTask(task: ITodo) {
    this.taskService.createTask(task);
  }

  addTasktoLocalStorage() {
    const task: ITodo = {
      id: 1,
      content: 'Nouvelle tâche',
      category: 'Travail',
      isUrgent: false,
      doneDate: null
    };
    this.taskService.createTask(task);
    // creation de données statiques qui les relient a la methode createTask
  }

}
