import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private taskService: TaskService) {
    this.taskResponse = taskService.taskResponse;
  }
  taskResponse: string;

 

}

