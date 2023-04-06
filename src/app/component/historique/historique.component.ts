import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITodo } from 'src/ITodo/ITodo';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {

  task: ITodo[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task = this.taskService.getDoneTasks();
  }
}