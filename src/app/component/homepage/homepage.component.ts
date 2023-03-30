import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  getTaskService : ITodo[] = [];
  // j'initialise mon constructeur avec mon service 
  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    // Appel de la méthode createTask() du service
    this.getTask();
  }
  getTask() {
    this.getTaskService = this.taskService.getTask();
  }
// interface
  item: ITodo = {
    id: 1,
    content: 'test',
    category: 'health',
    isUrgent: false,
    doneDate: null,
  }
  tasks: ITodo[] = [this.item];
}
