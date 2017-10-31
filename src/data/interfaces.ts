export interface Drug {
  name: string;
  isTaken?: boolean;
  amount?: string;
}

export interface Task {
  name: string;
  isDone?: boolean;
}

export enum Mood {VerySatisfied, Satisfied, Neutral, Dissatisfied, VeryDissatisfied}

export interface Day {
  date: string;
  mood: Mood | null;
  drugs: Drug[];
  tasks: Task[];
  dream?: string;
  thoughts?: string;
}
