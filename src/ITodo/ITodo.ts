export interface ITodo {
    id: number;
    content: string;
    category: string;
    isUrgent: boolean;
    doneDate: Date | null;
}
export interface IEmoticones {
    img: string;
}

export const CATEGORY: string[] = [
    "🛍️", // shopping
    "💊", // health
    "💼", // work
    "💸", // bills
    "🧼", // cleaning
    "🤷", // other
  ];
  