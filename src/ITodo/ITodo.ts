// type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";
export interface ITodo {
    id : number;
    content : string;
    category : string;
    isUrgent : boolean;
    doneDate : Date | null;
}
// second step
// creation du service TaskService 
// création d'un mock comprenant l'interface ITodo
// obligation de déclarer category en string 
// creation d'une variable tasks dans le service pour la lier a l'interface ITodo
// creation de la methode createTask pour initialiser le localStorage 
// methode getTask pour recuperer les données dans le LS
// initalisation des methodes de mon service vers le composant homepage
// prochaine etape : trouver la solution pour afficher les données en brutes dans le LS 

// third step
