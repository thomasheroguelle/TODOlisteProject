import { Injectable } from '@angular/core';
import { ITodo } from 'src/ITodo/ITodo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private static readonly TASKS_KEY = 'tasks'

  // nous retourne les taches 
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
    task.id = taskList.length;
    // j'ajoute ma nouvelle donnée vers le LS
    taskList.push(task);
    // j'enregistre les tâches mises à jour dans le localStorage
    this.saveTasksToLocalStorage(taskList);
  }

  findTodoTasks(): ITodo[] {
    // je recupere les données grace a la clé task
    const taskList: ITodo[] = this.findTasks();
    // je filtre les tâches null
    const nonRealisedTasks = taskList.filter(task => task.doneDate === null);
    // console.log(nonRealisedTasks);
    return nonRealisedTasks;
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

  saveTasksToLocalStorage(tasks: ITodo[]) {
    // je transforme taskList en chaine de caractere comme dans la methode ci dessus 
    const tasksInStringify = JSON.stringify(tasks);
    // je sauvegarde cette chaine de caractere grace a la clé
    localStorage.setItem(TaskService.TASKS_KEY, tasksInStringify);
  }

  getDoneTasks(): ITodo[] {
    // je recupere les taches stockées dans le LS
    const tasksFromLocalStorage = localStorage.getItem(TaskService.TASKS_KEY);
    if (tasksFromLocalStorage) {
      // analyse et renvoie le tableau d'objet ITodo
      const tasks: ITodo[] = JSON.parse(tasksFromLocalStorage);
      // filtre les données qui sont complétées
      const completedTasks : ITodo[] = tasks.filter(task => task.doneDate !== null);
      // renvoie les taches complétées 
      return completedTasks;
    }
    else {
      console.log("erreur");
      return [];
    }
  }
}




