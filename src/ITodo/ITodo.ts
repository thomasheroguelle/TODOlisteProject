// type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";
export interface ITodo {
    id : number;
    content : string;
    category : string;
    isUrgent : boolean;
    doneDate : Date | null;
}
