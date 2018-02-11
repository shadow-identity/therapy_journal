import {observable} from 'mobx';
import {Day} from './interfaces';
import {days} from './dataMock';
import {getToday} from './dateUtils';

export class JournalStore {
  @observable days: Day[] = days;
  @observable calendar = true;
  @observable selectedDate: string;

  createDay(date: string = getToday()) {
    function genDay(dayDate: string): Day {
      return {
        date: dayDate,
        mood: null,
        drugs: [],
        tasks: [],
      };
    }
    const day = genDay(date);
    this.days.push(day);
    return day;
  }

  getDay(date: string = getToday()): Day {
    let foundDay = this.days.find(day => day.date === date);
    if (typeof foundDay === 'undefined') {
      foundDay = this.createDay(date);
    }
    return foundDay;
  }
}

export class MoodMenuStore {
  @observable showMenu: boolean = false;
  @observable buttonEl: HTMLElement;
}

export const journal = new JournalStore();