import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Mood} from '../interfaces';
import {MoodSelectButton} from './MoodSelectButton';
import {MoodMenu} from './MoodMenu';

export enum MoodButtonStates {set, menu}

export class MoodStore {
  @observable currentMood: Mood;
  @observable moodButtonState: MoodButtonStates;

  setMood(mood: Mood) {
    this.currentMood = mood;
    this.moodButtonState = MoodButtonStates.set;
  }
}

const observableMoodStore = new MoodStore();

@observer
export class MoodComponent extends React.Component<{mood: Mood}> {
  render() {
    let Component;
    switch (observableMoodStore.moodButtonState) {
      case MoodButtonStates.menu:
        Component = <MoodMenu moodCallBack={(mood: Mood) => observableMoodStore.setMood(mood)}/>;
        break;
      default:
        Component = <MoodSelectButton moodStore={observableMoodStore}/>;
    }

    return (
      <div>
        {Component}
      </div>
    );
  }
}