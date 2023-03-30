import { Injectable } from '@angular/core';
import { ITodo } from 'src/ITodo/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: ITodo = {
    id: 1,
    content: "test",
    category: "",
    isUrgent: false,
    doneDate: null,
  }
  // création du LocalStorage 
  public createTask() {
    // creation d'un tableau vide 
    const newTask: ITodo[] = [];
    // transformation du tableau en chaine de caracteres 
    const TaskinStringify = JSON.stringify(newTask);
    // enregistrement de la tache dans le Local Storage avec la clé task
    localStorage.setItem('task', TaskinStringify)
  }
  // nous retourne les taches 
  getTask() : ITodo[] {
    // je recupere les données grace a la clé task
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    // Si des tâches sont stockées dans le Local Storage, on les ajoute au tableau tasks
    if (tasksFromLocalStorage) {
      return JSON.parse(tasksFromLocalStorage);   
    }
    // Si aucune tâche n'est stockée, on retourne une tâche vide
    else {
      return [];
    }
    
  }
  // push la tache vers le LS
  taskToPush(tasks: ITodo) {
    // je recupere les données 
    const tasksFromLocalStorage = this.getTask();
    // j'ajoute ma nouvelle donnée vers le LS
    tasksFromLocalStorage.push(tasks);
    // j'enregistre les tâches mises à jour dans le localStorage
    const tasksInStringify = JSON.stringify(tasksFromLocalStorage);
    localStorage.setItem('tasks', tasksInStringify);
    console.log("test taskToPush", tasksInStringify);
    
  }
}

