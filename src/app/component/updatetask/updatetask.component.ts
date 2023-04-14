import { Component } from '@angular/core';
import { ITodo } from 'src/ITodo/ITodo';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CATEGORY } from 'src/ITodo/ITodo';
import { Route } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {

  categoryList = CATEGORY
  task: ITodo = {
    id: 1,
    content: "",
    category: "🛍️",
    isUrgent: false,
    doneDate: null,
  }
  constructor(private taskService: TaskService, private router: ActivatedRoute, private route: Router) {
    this.router.params.subscribe(params => this.task = taskService.findTask(params['taskid']));
  }

  updateTask(task: ITodo) {
    try {
      this.taskService.updateTask(task);
    } catch (e) {
      alert("erreur lors de la mise a jour")
    }
    this.route.navigate(['/']);

  }



}




