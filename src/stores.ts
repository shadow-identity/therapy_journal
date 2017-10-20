import {observable} from 'mobx';
import {Day, Mood} from './interfaces';
import {days} from './dataMock';

export class JournalStore {
  @observable days: Day[] = days;
  @observable calendar = true;
  @observable day: Day;
  @observable showMoodMenu: boolean = false;

  addDay(day: Day) {
    this.days.push(day);
  }

  setMood(mood: Mood) {
    this.day.mood = mood;
    this.showMoodMenu = !this.showMoodMenu;
  }
}

export const journal = new JournalStore();