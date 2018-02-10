import {Day} from './interfaces';
import {dateToString} from './dateUtils';

function genDay(date: number): Day {
  return {
    date: dateToString(new Date(2017, 9, date)),
    mood: null,
    drugs: [{name: 'Ibuprofen', amount: '1 tablet', isTaken: false}, {name: 'MDMA', isTaken: true}],
    tasks: [{name: 'Fill this journal'}, {name: 'Do some good stuff'}],
    dream: 'Strange dream'
  };
}

export let days: Day[] = [];
for (let i = 2; i <= 3; i++) {
  days.push(genDay(i));
}