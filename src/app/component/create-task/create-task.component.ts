import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  // j'injecte mon service dans le constructeur 
  constructor(private taskService: TaskService) {}

  // appelle la méthode createTask() du service TaskService pour ajouter la tâche au local storage.
  createTask(task: ITodo) {
    this.taskService.createTask(task);
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   this.createTask(form.value);
  // }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.createTask(this.task);
  }

  task : ITodo = {
    id : 1,
    content : 'test',
    category : 'bills',
    isUrgent : false,
    doneDate : null
  }

}
