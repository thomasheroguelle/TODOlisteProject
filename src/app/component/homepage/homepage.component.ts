import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  todoTasks : ITodo[] = [
    {
      id: 0,
      content: "task1",
      category: "bills",
      isUrgent: false,
      doneDate: null
    },
    {
      id: 1,
      content: "task2",
      category: "bills",
      isUrgent: false,
      doneDate: null
    },
  ]
}

