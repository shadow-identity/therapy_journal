import {Day, Mood} from './interfaces';

export const day: Day = {
  date: '1st September',
  mood: Mood.Neutral,
  drugs: [{name: 'Ibuprofen', amount: '1 tablet'}, {name: 'MDMA', isTaken: true}],
  tasks: [{name: 'Fill this journal'}, {name: 'Do some good stuff'}],
  dream: 'Strange dream'
};

export let days: Day[] = [];
for (let i = 0; i <= 10; i++) {
  days.push(day);
}