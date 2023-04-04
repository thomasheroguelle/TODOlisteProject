import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';
import { ITodo } from 'src/ITodo/ITodo';
import { HomepageComponent } from '../component/homepage/homepage.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private static readonly TASKS_KEY = 'tasks'

  // nous retourne les taches 
  findTasks(): ITodo[] {
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
    const tasksFromLocalStorage: ITodo[] = this.findTasks();
    task.id = tasksFromLocalStorage.length;
    // j'ajoute ma nouvelle donnée vers le LS
    tasksFromLocalStorage.push(task);
    // j'enregistre les tâches mises à jour dans le localStorage
    const tasksInStringify = JSON.stringify(tasksFromLocalStorage);
    localStorage.setItem(TaskService.TASKS_KEY, tasksInStringify);
  }

  findTodoTasks(): ITodo[] {
    // je recupere les données grace a la clé task
    const tasksFromLocalStorage = this.findTasks();
    // je filtre les tâches non réalisées en fonction de la date
    const nonRealisedTasks = tasksFromLocalStorage.filter(task => task.doneDate === null);
    console.log(nonRealisedTasks);
    return nonRealisedTasks;
  }
}

// 


