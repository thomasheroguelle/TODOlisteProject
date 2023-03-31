import { Injectable } from '@angular/core';
import { ITodo } from 'src/ITodo/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private static readonly TASKS_KEY = 'tasks'

  task: ITodo = {
    id: 1,
    content: "test",
    category: "",
    isUrgent: false,
    doneDate: null,
  }
  
  // nous retourne les taches 
  getTasks(): ITodo[] {
    // je recupere les données grace a la clé task
    const tasksFromLocalStorage = localStorage.getItem(TaskService.TASKS_KEY);
    // Si des tâches sont stockées dans le Local Storage, on les ajoute au tableau task
    if (tasksFromLocalStorage) {
      return JSON.parse(tasksFromLocalStorage);
    }
    // Si aucune tâche n'est stockée, retourne un tableau vide
    else {
      return [];
    }
  }
  // création du LocalStorage 
  createTask(task: ITodo) {
    // je recupere les données 
    const tasksFromLocalStorage = this.getTasks();
    // j'ajoute ma nouvelle donnée vers le LS
    tasksFromLocalStorage.push(task);
    // j'enregistre les tâches mises à jour dans le localStorage
    const tasksInStringify = JSON.stringify(tasksFromLocalStorage);
    localStorage.setItem(TaskService.TASKS_KEY, tasksInStringify);
  }
}

