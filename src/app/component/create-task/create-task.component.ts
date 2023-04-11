import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { IEmoticones, ITodo } from 'src/ITodo/ITodo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  selectedEmoticon: string = '';


  task: ITodo = {
    id: 0,
    content: "",
    category: "bills",
    isUrgent: false,
    doneDate: null,
  }
  // j'injecte mon service dans le constructeur 
  constructor(private taskService: TaskService, private route: Router) { }

  // appelle la méthode createTask() du service TaskService pour ajouter la tâche au local storage.
  createTask() {
    this.task.category = this.selectedEmoticon;
    this.taskService.createTask(this.task);
    this.route.navigate(['/']);
  }

  imgContent: IEmoticones[] = [
    {
      content: "shopping",
      img: "🛍️",
    },
    {
      content: "health",
      img: "💊",
    },
    {
      content: "work",
      img: "💼",
    },
    {
      content: "bills",
      img: "💸",
    },
    {
      content: "cleaning",
      img: "🧼",
    },
    {
      content: "other",
      img: "🤷",
    },
  ]
}

