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

// export interface QuestionnaireItem {
//   question: string;
//   score?: number;
// }

// export interface QuestionnaireHADSItem extends QuestionnaireItem {
//   disorder: 'depression' | 'anxiety';
//   score?: 0 | 1 | 2 | 3;
// }
//
// export interface Questionnaire {
//   name: string;
//   instructions: string;
//   description: string;
//   questions: QuestionnaireHADSItem[];
// }
//
// export interface QuestionnaireAspectResult {
//   name: string;
//   level: number;
//   description: string;
// }
//
// export interface QuestionnaireResult {
//   name: string;
//   results: QuestionnaireAspectResult[];
// }