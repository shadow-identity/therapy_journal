import {Day} from './interfaces';

export const day: Day = {
  date: '1st September',
  mood: null,
  drugs: [{name: 'Ibuprofen', amount: '1 tablet'}, {name: 'MDMA', isTaken: true}],
  tasks: [{name: 'Fill this journal'}, {name: 'Do some good stuff'}],
  dream: 'Strange dream'
};

export let days: Day[] = [];
let iterDay = Object.assign({}, day);
for (let i = 1; i <= 30; i++) {
  iterDay = Object.assign({}, day);
  iterDay.date = `${i}st September`;
  days.push(iterDay);
}