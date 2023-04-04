import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, FormsModule } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  task: ITodo = {
    id: 0,
    content: "",
    category: "bills",
    isUrgent: false,
    doneDate: null
  }
  // j'injecte mon service dans le constructeur 
  constructor(private taskService: TaskService, private route: Router) { }

  // appelle la méthode createTask() du service TaskService pour ajouter la tâche au local storage.
  createTask() {
    this.taskService.createTask(this.task);
    this.route.navigate(['/']);
  
  }
}
