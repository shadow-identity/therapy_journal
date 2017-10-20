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

const moodStore = new MoodStore();

@observer
export class MoodComponent extends React.Component<{ mood: Mood }> {
  render() {
    let Component;
    moodStore.currentMood = this.props.mood;
    switch (moodStore.moodButtonState) {
      case MoodButtonStates.menu:
        Component = <MoodMenu moodCallBack={(mood: Mood) => moodStore.setMood(mood)}/>;
        break;
      default:
        Component = <MoodSelectButton moodStore={moodStore}/>;
    }

    return (
      <div className={'journal-floating-container'}>
        {Component}
      </div>
    );
  }
}