import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ITodo } from 'src/ITodo/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private static readonly TASKS_KEY = 'tasks'

  // LS création 
  findTasks(): ITodo[] {
    // je recupere les données grace a la clé task
    const taskList = localStorage.getItem(TaskService.TASKS_KEY);
    // Si des tâches sont stockées dans le Local Storage, on les ajoute au tableau task
    if (taskList) {
      return JSON.parse(taskList);
    }
    // Si aucune tâche n'est stockée, retourne un tableau vide
    else {
      return [];
    }
  }
  
  // création du LocalStorage 
  createTask(task: ITodo) {
    // je recupere les données 
    const taskList: ITodo[] = this.findTasks();
    task.id = (taskList.length > 0) ? taskList[taskList.length - 1].id + 1 : 0;
    // j'ajoute ma nouvelle donnée vers le LS
    taskList.push(task);
    // j'enregistre les tâches mises à jour dans le localStorage
    this.saveTasksToLocalStorage(taskList);
  }

  saveTasksToLocalStorage(tasks: ITodo[]) {
    // je transforme taskList en chaine de caractere comme dans la methode ci dessus 
    const tasksInStringify = JSON.stringify(tasks);
    // je sauvegarde cette chaine de caractere grace a la clé
    localStorage.setItem(TaskService.TASKS_KEY, tasksInStringify);
  }

  // updateTask
  findTask(taskId: number): ITodo {
    const taskList: ITodo[] = this.findTasks();
    // for (let task of taskList) {
    //   if (taskId == task.id) {
    //     return task
    //   }
    // }
    const filteredTask: ITodo[] = taskList.filter(task => task.id == taskId)
    return filteredTask[0]
  }

  findTodoTasks(): ITodo[] {
    // je recupere les données 
    const taskList: ITodo[] = this.findTasks();
    // je filtre les tâches null
    const nonRealisedTasks = taskList.filter(task => task.doneDate === null);
    return nonRealisedTasks;
  }

  findDoneTasks(): ITodo[] {
    // je recupere les données grace a la clé task
    const taskList: ITodo[] = this.findTasks();
    // je filtre les tâches NON null
    const realisedTasks = taskList.filter(task => task.doneDate !== null);
    // tri
    const sortedTasks = realisedTasks.sort(function compare(a, b) {
      // fonctions de comparaison : retourne un int qui vaut 0 si les objets sont égaux, 
      // une valeur négative si le deuxième objet (b) est > (a) 
      // positif si a > b
      if (a.doneDate === null) {
        return 1;
      }
      if (b.doneDate === null) {
        return -1;
      }
      if (a.doneDate < b.doneDate) {
        return -1
      }
      if (a.doneDate > b.doneDate) {
        return 1;
      }
      return 0
    });
    return sortedTasks
  }

  setTaskDone(taskId: number) {
    // je recupere les taches stockées de mon local storage en appelant ma méthode findTasks
    const taskList: ITodo[] = this.findTasks();
    // je créer une const pour récupérer l'index des taches . findIndex permet de mettre a jour la tache 
    const index = taskList.findIndex(item => item.id === taskId);
    // vérifie si l'index est différent de -1 
    if (index !== -1 && taskList[index].doneDate == null) {
      // on remplace la tache existante du tableau par la tache qu'on a passé en paramètre et qui a maintenant une date de fin 
      taskList[index].doneDate = new Date();
      this.saveTasksToLocalStorage(taskList);
    }
  }

  setTaskUndone(taskId: number) {
    const taskList: ITodo[] = this.findTasks();
    const index = taskList.findIndex(item => item.id === taskId);
    if (index !== -1 && taskList[index].doneDate !== null) {
      taskList[index].doneDate = null;
      this.saveTasksToLocalStorage(taskList);
    }
  }

  updateTask(task: ITodo) {
    // je recupere les taches 
    const taskList: ITodo[] = this.findTasks();
    const taskIndex = taskList.findIndex(item => item.id === task.id);
    // si l'index de la tache n'est pas égal a -1
    if (taskIndex !== -1) {
      // je remplace la tâche existante par la nouvelle tâche
      taskList[taskIndex] = task;
      // enregistre et met a jour la tache 
      this.saveTasksToLocalStorage(taskList);
    }
    else {
      throw new Error("task to update not found");
    }
  }
}





