import {observable} from 'mobx';
import {Day} from './interfaces';
import {days} from './dataMock';

export class JournalStore {
  @observable days: Day[] = days;
  @observable calendar = true;
  @observable day: Day;

  addDay(day: Day) {
    this.days.push(day);
  }
}

export class MoodMenuStore {
  @observable showMenu: boolean = false;
  @observable buttonEl: HTMLElement;
}

export const journal = new JournalStore();