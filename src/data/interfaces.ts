 interface Drug {
  name: string;
  isTaken?: boolean;
  amount?: string;
}

 interface Task {
  name: string;
  isDone?: boolean;
}

 enum Mood {VerySatisfied, Satisfied, Neutral, Dissatisfied, VeryDissatisfied, Add}

 interface Day {
  date: string;
  mood: Mood;
  drugs: Drug[];
  tasks: Task[];
  dream?: string;
  thoughts?: string;
}
