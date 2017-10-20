import * as React from 'react';
import {observer} from 'mobx-react';
import {Mood} from '../interfaces';
import {MoodSelectButton} from './MoodSelectButton';
import {MoodMenu} from './MoodMenu';
import {JournalStore} from '../stores';

@observer
export class MoodComponent extends React.Component<{ store: JournalStore }> {
  render() {
    let store = this.props.store;
    let Component;
    Component = store.showMoodMenu
      ? <MoodMenu moodCallBack={(mood: Mood) => store.setMood(mood)}/>
      : <MoodSelectButton store={store}/>;

    return (
      <div className={'journal-floating-container'}>
        {Component}
      </div>
    );
  }
}