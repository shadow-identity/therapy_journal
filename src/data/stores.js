import {observable} from 'mobx';
import {days} from './dataMock';

export class JournalStore {
  @observable days = days;
  @observable calendar = true;
  @observable day;
  @observable showMoodMenu = false;

  addDay(day) {
    this.days.push(day);
  }

  setMood(mood) {
    this.day.mood = mood;
    this.showMoodMenu = !this.showMoodMenu;
  }
}

export const journal = new JournalStore();