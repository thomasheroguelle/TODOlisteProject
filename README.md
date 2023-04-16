--> Voir la branche MAIN pour le projet final 

La TODO liste a été réalisée à partir de User Stories 

# US1 : Empty HomePage / init project --> Quand je me connecte sur l'application, j'arrive sur la HomePage

- Création de la HomePage + message qui affiche "Hello World"

## US2 : [FRONT] Add footer

- Création du composant createTask + "Hello World"
- Création du footer accessible sur toutes les pages
- CSS conditionnel pour le bouton du footer de createTask et de homePage
- app.routing

## US3 : [FRONT] Create tasks : quand j'accede a la page de création de taches, je peux créer une tache avec son contenu en utilisant le taskService 

- Création du taskService 
- Création du mock ITodo
- Création du local storage : 
    - méthode createTask et getTask(renommée en findTasks) 
    - déclaration d'une variable task reliée à ITodo en statique pour tester si le LS fonctionne 
- Création d'un mini formulaire dans la homePage toujours pour tester le LS 

## US4 : [BACK] Create TaskService - write

- Création d'un formulaire avec [(ngModel)] (textarea) / ngForm 
- Initialisation de createTask dans le composant dédié (createTask)
- L'utilisateur peut entrer une tache , la valider et la voir apparaitre dans le local storage
- L'interface ITodo est en brut
- Création header
- CSS selectedTask

## US5 : [FRONT] Home page (static) : Quand j'arrive sur l'application ou que j'accede a la homePage, je vois un ensemble de taches respectant l'UI fixée. Dans un premier temps, j'affiche une liste de tache fixes. si pas de tache, doit afficher le message approprié

## US6 :[BACK] Use TaskService in the HomePage : remplacer la liste de taches statiques de la homepage par un appel au taskService (findTodoTasks) -> les taches viennent du LS, on souhaite récupérer seulement les taches non réalisées (les taches dont la doneDate est null) 
- findTodoTasks du service permet de filtrer les taches dont la doneDate est null
- initialisation de la methode dans la homePage

## US7 : [FRONT/BACK] End task : Lorsque je clique sur le bouton de validation d'une tache, la tache est réalisée, cad une date de fin est définie dans la colonne doneDate et la tache n'apparait plus dans la homePage

## US8 : [FRONT/BACK] Task history : quand j'accede a la page d'historique, je peux voir l'ensemble des taches réalisées par ordre de réalisation (cad triées par doneDate)
- Création d'une méthode getDoneTasks(renommée setTasksDone) dans le service 
- Création composant historique 

## US9 :  [FRONT/BACK] Add emergency tasks : je souhaite pouvoir préciser si une tache est urgente ou non 
- bouton tache urgente 

## US10 : Add category management : je souhaite pour séléctionner ma catégorie de task
- creation d'une interface IEmoticone , reliée a createTask et a task.category 
